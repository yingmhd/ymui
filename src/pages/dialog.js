import React from 'react'
import YMDialog from '../ymui'

export default class Dialog extends React.Component {

    openDialog() {
        let ymDialog = new YMDialog({
            theme: 'green',
            title: '标题',
            content: '这里是弹窗内容',
            ok_fuc: function (dom) {
                alert(1);
                this.close();
            }
        });
        ymDialog.show();
    }

    render() {
        return (
            <div className='contentWrapper color-blue backcolor-blue'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Dialog</h1>
                    </div>
                    <div className="main">
                        <h2>实例</h2>
                        <div className="intro-text">
                            首先，我们先看个实例，然后再详细说明
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <button className="ym-btn ym-btn-green" onClick={this.openDialog}>点击</button>
                            </div>
                            <pre>
                            <code>
                                <p className="color-gray">{'// 在按钮的点击事件中初始化弹窗'}</p>
                                <p>{'let ymDialog = new YMDialog({'}</p>
                                <p>{'   title: \'标题\','}</p>
                                <p>{'   content: \'这里是弹窗内容\','}</p>
                                <p>{'   ok_fuc: function (dom) {'}</p>
                                <p>{'       alert(1);'}</p>
                                <p>{'       this.close();'}</p>
                                <p>{'   }'}</p>
                                <p>{'});'}</p>
                                <p className="color-gray">{'// 通过show()方法显示弹窗'}</p>
                                <p>{'ymDialog.show();'}</p>
                            </code>
                            </pre>
                        </div>
                        <h2>参数</h2>
                        <div className="intro-text">
                            初始化弹窗时共可输入9个参数
                        </div>
                        <div className="show-area">
                            <pre>
                            <code>
                                <p className="color-gray">{'// 在按钮的点击事件中初始化弹窗'}</p>
                                <p>{'let ymDialog = new YMDialog({'}</p>
                                <p>{'   title: '}<span className="color-gray">弹窗的标题  </span><span className="color-red">*必填</span></p>
                                <p>{'   content: '}<span className="color-gray">弹窗的主体内容  </span><span className="color-red">*必填</span></p>
                                <p>{'   cancel: '}<span className="color-gray">是否显示取消按钮  </span></p>
                                <p>{'   ok_text: '}<span className="color-gray">确认按钮的文案  </span></p>
                                <p>{'   cancel_text: '}<span className="color-gray">取消按钮的文案  </span></p>
                                <p>{'   ok_fuc: '}<span className="color-gray">点击确认按钮之后的回调函数  </span><span className="color-red">如果不填，默认关闭弹窗</span></p>
                                <p>{'   cancel_fuc: '}<span className="color-gray">点击取消按钮之后的回调函数  </span><span className="color-red">*必填</span></p>
                                <p>{'   theme: '}<span className="color-gray">弹窗的主题  </span><span className="color-red">默认绿色，可填入yellow,red,purple,gray,blue,cyan,orange</span></p>
                                <p>{'   dialogId: '}<span className="color-gray">弹窗的id  </span><span className="color-red">选填，添加id方便额外定义样式或者执行其他操作</span></p>
                                <p>{'});'}</p>
                                <p>{'ymDialog.show();'}</p>
                            </code>
                            </pre>
                        </div>
                        <h2>回调函数</h2>
                        <div className="intro-text">
                            每个初始化时传入的回调函数默认会返回一个参数，指向当前的弹窗DOM元素，你可以通过它做一些你想做的事情，同时，回调函数的<code>this</code>指向你的弹窗，你可以通过<code>this</code>
                            调用弹窗的方法，比如<code>this.close()</code>
                        </div>
                        <div className="show-area">
                            <pre>
                            <code>
                                <p>{'   ...'}</p>
                                <p>{'   ok_fuc: function (dom) {'}</p>
                                <p>{'       console.log(dom);'}</p>
                                <p>{'       this.close();'}</p>
                                <p>{'   }'}</p>
                                <p>{'   ...'}</p>
                            </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}