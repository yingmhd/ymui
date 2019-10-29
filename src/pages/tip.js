import React from 'react'
import YMPlugins from '../ymui'

export default class Page extends React.Component {
    componentDidMount() {
        new YMPlugins.tip();
        new YMPlugins.tip({
            element: '#openTip',
            position: 'up',
            content: '这里是提示内容'
        });
    }

    render() {
        return (
            <div className='contentWrapper color-blue backcolor-blue'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Tip</h1>
                    </div>
                    <div className="main">
                        <h2>快速绑定</h2>
                        <div className="intro-text">
                            在触发元素上绑定class<code>ym-tip</code>，属性<code>data-tip</code>（提示内容）和<code>data-position</code>（提示框位置）之后，js初始化插件即可使用。
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <button className="ym-btn ym-btn-blue ym-tip" data-tip="tip on left" data-position="left">提示在左边</button>
                                <button className="ym-btn ym-btn-blue ym-tip" data-tip="tip on up" data-position="up">提示在上边</button>
                                <button className="ym-btn ym-btn-blue ym-tip" data-tip="tip on bottom" data-position="bottom">提示在下边</button>
                                <button className="ym-btn ym-btn-blue ym-tip" data-tip="tip on right" data-position="right">提示在右边</button>
                            </div>
                            <pre>
                                <p>{'<button class="ym-btn ym-btn-blue ym-tip" data-tip="tip on left" data-position="left">提示在左边</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-blue ym-tip" data-tip="tip on up" data-position="up">提示在上边</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-blue ym-tip" data-tip="tip on bottom" data-position="bottom">提示在下边</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-blue ym-tip" data-tip="tip on right" data-position="right">提示在右边</button>'}</p>
                                <p className="color-gray">{'// js初始化'}</p>
                                <p>{'new YMPlugins.tip();'}</p>
                            </pre>
                        </div>
                        <h2>带参数初始化</h2>
                        <div className="intro-text">
                            也可以在触发元素上不绑定任何东西，只需要在初始化插件的时候带入相应的参数，这样内容也更灵活
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <button className="ym-btn ym-btn-blue" id="openTip">提示触发按钮</button>
                            </div>
                            <pre>
                                <p>{'<button class="ym-btn ym-btn-blue" id="openTip">提示触发按钮</button>'}</p>
                                <p className="color-gray">{'// js带参数初始化'}</p>
                                <p>{'new YMPlugins.tip({'}</p>
                                <p>{'   element: \'#openTip\','}<span className="color-gray"> //元素的id或者class</span></p>
                                <p>{'   position: \'up\','}</p>
                                <p>{'   content: \'这里是提示内容\''}</p>
                                <p>{'});'}</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}