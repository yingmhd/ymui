import React from 'react'
import YMPlugins from '../ymui'

export default class Page extends React.Component {
    componentDidMount() {
        new YMPlugins.carousel({
            containerId: 'ymCarousel',
            width: '600',
            height: '400',
            hoverHideItems: false,
            hoverStopMove: true,
            hasBtn: true
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
                        <h2>默认</h2>
                        <div className="intro-text">
                            首先必须在页面上存在如下DOM结构，<code>id</code>自定义，然后在<code>li</code>标签内添加自定义内容（图片，文字等）,最后在js中初始化插件
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
                                <p className="color-gray">{'// 基本结构'}</p>
                                <p>{'<div class="ym-carousel-container" id="ymCarousel">'}</p>
                                <p>{'   <ul class="ym-carousel">'}</p>
                                <p>{'       <li>Carousel One</li>'}</p>
                                <p>{'       <li>Carousel Two</li>'}</p>
                                <p>{'       <li>Carousel Three</li>'}</p>
                                <p>{'       <li>Carousel Four</li>'}</p>
                                <p>{'   </ul>'}</p>
                                <p>{'</div>'}</p>
                                <p className="color-gray">{'// js初始化插件'}</p>
                                <p>{'new YMPlugins.carousel({'}</p>
                                <p>{'   containerId: \'ymCarousel\','}</p>
                                <p>{'   width: \'600\','}</p>
                                <p>{'   height: \'400\''}</p>
                                <p>{'   hoverHideItems: false,'}<span className="color-gray">   // 默认情况下是否显示左右按钮以及显示点，鼠标移入的时候显示，默认为true</span></p>
                                <p>{'   hoverStopMove: true,'}<span className="color-gray">   // 当鼠标移入的时候，是否停止动画，默认true</span></p>
                                <p>{'   hasBtn: true'}<span className="color-gray">   // 是否开启左右操作按钮，默认false</span></p>
                                <p>{'})'}</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}