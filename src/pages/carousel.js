import React from 'react'
import YMPlugins from '../ymui'

export default class Page extends React.Component {
    componentDidMount() {
        new YMPlugins.carousel({
            containerId: 'ymCarousel',
            width: '600',
            height: '400'
        })
    }

    render() {
        return (
            <div className='contentWrapper color-blue backcolor-blue'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Carousel</h1>
                    </div>
                    <div className="main">
                        <h2>快速绑定</h2>
                        <div className="intro-text">
                            在触发元素上绑定class<code>ym-tip</code>，属性<code>data-tip</code>（提示内容）和<code>data-position</code>（提示框位置）之后，js初始化插件即可使用。
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div className="ym-carousel-container" id="ymCarousel">
                                    <ul className="ym-carousel">
                                        <li>Carousel One</li>
                                        <li>Carousel Two</li>
                                        <li>Carousel Three</li>
                                        <li>Carousel Four</li>
                                    </ul>
                                </div>
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
                    </div>
                </div>
            </div>
        )
    }
}