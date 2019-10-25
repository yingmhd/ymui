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

    function generateDialogTpl(opt) {
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
        dom.innerHTML = generateDialogTpl(def);
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
            this.listeners = {};
        },
        show: function (callback) {
            let _this = this;
            if (!!_this.dom) return false;
            // 渲染模板
            _this.dom = createDialog(_this.def);
            // 触发show监听事件
            if (this.listeners['show'] !== 'undefined' && this.listeners['show'] instanceof Array) {
                this.emit({type: 'show', target: this.dom});
            }
            // 绑定基础事件
            _this.dom.getElementsByClassName('btn-close')[0].onclick = function () {
                !!_this.def.cancel_fuc ? _this.def.cancel_fuc.call(_this, _this.dom) : _this.close()
            };
            _this.dom.getElementsByClassName('x-close')[0].onclick = function () {
                _this.close()
            };
            _this.dom.getElementsByClassName('btn-confirm')[0].onclick = function () {
                !!_this.def.ok_fuc && _this.def.ok_fuc.call(_this, _this.dom)
            };
            // 弹窗拖动
            let dragEle = _this.dom.getElementsByClassName('ym-dialog-main')[0];
            _this.dom.getElementsByClassName('title')[0].onmousedown = function (event) {
                let disX = event.clientX - dragEle.offsetLeft;
                let disY = event.clientY - dragEle.offsetTop;
                document.onmousemove = function (e) {
                    let l = e.clientX - disX;
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
            // 触发close监听事件
            if (this.listeners['close'] && this.listeners['close'] instanceof Array) {
                this.emit({type: 'close', target: this.dom});
            }
            document.body.removeChild(this.dom);
        },
        on: function (type, handler) {
            if (typeof this.listeners[type] === 'undefined') {
                this.listeners[type] = [];
            }
            this.listeners[type].push(handler);
            return this;
        },
        off: function (type, handler) {
            if (this.listeners[type] instanceof Array) {
                let handlers = this.listeners[type];
                for (let i = 0; i < handlers.length; i++) {
                    if (handlers[i] === handler) {
                        handlers.splice(i, 1);
                        break;
                    }
                }
                return this;
            }
        },
        emit: function (handleObj) {
            if (!handleObj.target) {
                handleObj.target = this;
            }
            if (this.listeners[handleObj.type] instanceof Array) {
                let handlers = this.listeners[handleObj.type];
                for (let i = 0; i < handlers.length; i++) {
                    handlers[i](handleObj.target);
                }
            }
            return false;
        }
    };

    function generatePageTpl(opt) {
        let pageNums = parseInt(opt.pageNums);
        let initPage = parseInt(opt.initPage);
        let end = initPage + 2 > pageNums ? pageNums : initPage + 2;
        let start = end - 4 > 1 ? end - 4 : 1;
        if (typeof pageNums !== "number") {
            pageNums = 1;
        }
        let Tpl = `
            <div class="ym-page-group">
                <ul>
                    <li class="can-click" data-p="${initPage - 1 > 1 ? initPage - 1 : 1}"><span><</span></li>
                    <li class="can-click" data-p="1"><span>首页</span></li>
            `;
        while (start <= end) {
            Tpl += `<li class="${initPage == start ? 'active' : 'can-click'}" data-p="${start}"><span>${start}</span></li>`;
            start++;
        }
        if (end < pageNums) {
            Tpl += `<li class="dont-click"><span>...</span></li>`;
            Tpl += `<li class="can-click" data-p="${pageNums}"><span>${pageNums}</span></li>`;
        }
        Tpl += `
                    <li class="can-click" data-p="${initPage + 1 > pageNums ? pageNums : initPage + 1}"><span>></span></li>
                </ul>`;
        if (opt.openSearch) {
            Tpl += `
                <div class="page-search">
                    <span>到</span>
                    <input type="text"/>
                    <span>页</span>
                    <button class="ym-btn ym-btn-green">确定</button>
                </div>`;
        }
        Tpl += `            
            </div>`;
        let container = document.getElementById(opt.containerId);
        container.innerHTML = Tpl;
    }

    function YMpage(opt) {
        this._initial(opt);
        this.show();
    }

    YMpage.prototype = {
        constructor: this,
        _initial: function (opt = {}) {
            let def = {
                containerId: '',
                pageNums: 1,
                initPage: 1,
                openSearch: true
            };
            this.def = extend(def, opt, true);
            this.dom = document.getElementById(this.def.containerId);
        },
        show: function () {
            let _this = this;
            generatePageTpl(_this.def);

            let canClick = _this.dom.getElementsByClassName('can-click');
            for (let i=0;i<canClick.length;i++) {
                let opt = {
                    containerId: _this.def.containerId,
                    pageNums: _this.def.pageNums,
                    initPage: canClick[i].getAttribute('data-p'),
                    openSearch: _this.def.openSearch
                }
                canClick[i].onclick = function () {
                    generatePageTpl(opt);
                }
            }

        }
    };

    let YMPlugins = {
        dialog: YMDialog,
        page: YMpage
    };

    _global = (function () {
        return this || (0, eval)('this');
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = YMPlugins
    } else {
        !('YMDialog' in _global) && (_global.YMPlugins = YMPlugins);
    }
}());