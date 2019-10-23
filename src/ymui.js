;(function () {
    "use strict";
    let _global;

    function extend(o, n, override) {
        for (let key in n) {
            if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key)) || override) {
                o[key] = n[key];
            }
        }
        return o;
    }

    function generateTpl(opt) {
        let Tpl = `
            <div class="ym-dialog-cover"> </div>
            <div class="ym-dialog-main">
                <div class="title backcolor-${opt.theme}">
                    ${opt.title}
                    <span class="x-close"><em></em></span>
                </div>
                <div class="content bordercolor-${opt.theme}">
                    ${opt.content}
                </div>
                <div class="btn-area">`;
        if (opt.cancel) {
            Tpl += `<button class="btn-close ym-btn ym-btn-xsmall ym-btn-gray">${opt.cancel_text}</button>`;
        }
        Tpl += `        
                    <button class="btn-confirm ym-btn ym-btn-xsmall ym-btn-${opt.theme}">${opt.ok_text}</button>
                </div>
            </div>
        `;
        return Tpl;
    }

    function createDialog(def) {
        let dom = document.createElement('div');
        dom.className = 'ym-dialog-container';
        dom.setAttribute('id', def.dialogId);
        dom.innerHTML = generateTpl(def);
        document.body.appendChild(dom);
        return dom;
    }

    function YMDialog(opt) {
        this._initial(opt);
    }

    YMDialog.prototype = {
        constructor: this,
        _initial: function (opt = {}) {
            let def = {
                cancel: true,
                ok_text: '确定',
                cancel_text: '取消',
                ok_fuc: null,
                cancel_fuc: null,
                title: '',
                content: '',
                theme: 'green',
                dialogId: 'ymDialog' + (new Date()).getTime()
            };
            this.def = extend(def, opt, true);
            this.listeners = [];
            this.handles = {};
        },
        show: function (callback) {
            let _this = this;
            if(!!_this.dom) return false;
            _this.dom = createDialog(_this.def);

            _this.dom.getElementsByClassName('btn-close')[0].onclick = function () {
                !!_this.def.cancel_fuc ? _this.def.cancel_fuc.call(_this, _this.dom) : _this.close()
            };
            _this.dom.getElementsByClassName('x-close')[0].onclick = function () {
                _this.close()
            };
            _this.dom.getElementsByClassName('btn-confirm')[0].onclick = function () {
                !!_this.def.ok_fuc && _this.def.ok_fuc.call(_this, _this.dom)
            };
            let dragEle = _this.dom.getElementsByClassName('ym-dialog-main')[0];
            _this.dom.getElementsByClassName('title')[0].onmousedown = function (event) {
                let disX = event.clientX - dragEle.offsetLeft;
                let disY = event.clientY - dragEle.offsetTop;
                document.onmousemove = function (e) {
                    let l =  e.clientX - disX;
                    let t = e.clientY - disY;
                    dragEle.style.left = l + 'px';
                    dragEle.style.top = t + 'px';
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            };
        },
        close: function () {
            document.body.removeChild(this.dom);
        },
        on: function (type, handler) {
            if(typeof this.handles[type] === 'undefined') {
                this.handles['type'] = [];
            }
            this.listeners.push(type);
            this.handles[type].push(handler);
            return this;
        },
        off: function (type, handler) {
            if(this.handles[type] instanceof Array) {
                let handlers = this.handles[type];
                for(let i =0;i<handlers.length;i++) {
                    if(handlers[i] === handler) {
                        handlers.splice(i,1);
                        break;
                    }
                }
                return this;
            }
        }
    };

    _global = (function () {
        return this || (0, eval)('this');
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = YMDialog
    } else {
        !('YMDialog' in _global) && (_global.YMDialog = YMDialog);
    }
}());