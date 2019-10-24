import React from 'react'

export default class Buttons extends React.Component {
    render() {
        return (
            <div className='contentWrapper color-red backcolor-red'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Layout</h1>
                    </div>
                    <div className="main">
                        <h2>网格视图</h2>
                        <div className="intro-text">
                            将屏幕（或父元素）等分成12列，根据需求给元素添加相应的类名<code>ym-col-</code>加数字，但是数字总合不能超过12，同时要给父元素添加类名<code>ym-row</code>
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div className="ym-row">
                                    <div className="ym-col-3 backcolor-orange color-default">
                                        占据3列
                                    </div>
                                    <div className="ym-col-9 backcolor-cyan color-default">
                                        占据9列
                                    </div>
                                </div>
                                <div className="ym-row">
                                    <div className="ym-col-4 backcolor-green color-default">
                                        占据4列
                                    </div>
                                    <div className="ym-col-8 backcolor-purple color-default">
                                        占据8列
                                    </div>
                                </div>
                                <div className="ym-row">
                                    <div className="ym-col-6 backcolor-yellow color-default">
                                        占据6列
                                    </div>
                                    <div className="ym-col-6 backcolor-gray color-default">
                                        占据6列
                                    </div>
                                </div>
                            </div>
                            <pre>
                                    <p>{'<div class="ym-row">'}</p>
                                    <p>{'   <div class="ym-col-3 backcolor-orange color-default">占据3列</div>'}</p>
                                    <p>{'   <div class="ym-col-9 backcolor-cyan color-default">占据9列</div>'}</p>
                                    <p>{'</div>'}</p>
                            </pre>
                        </div>
                        <h2>列自适应</h2>
                        <div className="intro-text">
                            如果布局中有一列需要自适应宽度，其他列保持固定宽度，那么首先给父元素添加类名<code>ym-stream</code>,给需要自适应的列添加类名<code>ym-auto-width</code>
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div className="ym-stream">
                                    <div className="backcolor-orange color-default" style={{width:100+'px'}}>
                                        固定宽度
                                    </div>
                                    <div className="ym-auto-width backcolor-cyan color-default">
                                        自适应宽度
                                    </div>
                                </div>
                            </div>
                            <pre>
                                    <p>{'<div class="ym-stream">'}</p>
                                    <p>{'   <div class="backcolor-orange color-default" style="width:100px;">固定宽度</div>'}</p>
                                    <p>{'   <div class="ym-auto-width backcolor-cyan color-default">自适应宽度</div>'}</p>
                                    <p>{'</div>'}</p>
                            </pre>
                        </div>
                        <h2>行自适应</h2>
                        <div className="intro-text">
                            跟列自适应相同道理，只不过要在父元素上再添加个类名<code>stream-row</code>
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div className="ym-stream stream-row" style={{height:100+'px'}}>
                                    <div className="ym-auto-width backcolor-cyan color-default">
                                        自适应高度
                                    </div>
                                    <div className="backcolor-orange color-default" style={{height:30+'px'}}>
                                        固定高度
                                    </div>
                                </div>
                            </div>
                            <pre>
                                    <p className="color-gray">{'// 可以实现页脚一直处于屏幕底部'}</p>
                                    <p>{'<div class="ym-stream stream-row"  style="height:100px;">'}</p>
                                    <p>{'   <div class="ym-auto-width backcolor-cyan color-default" style="height:30px;">自适应高度</div>'}</p>
                                    <p>{'   <div class="backcolor-orange color-default">固定高度</div>'}</p>
                                    <p>{'</div>'}</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}