import React from 'react'

export default class Buttons extends React.Component {
    render() {
        return (
            <div className='contentWrapper color-yellow backcolor-yellow'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Class</h1>
                    </div>
                    <div className="main">
                        <h2>文字颜色</h2>
                        <div className="intro-text">
                            为元素添加类名<code>color-</code>加颜色英文即可，共提供7种颜色
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <p className="color-green">color-green</p>
                                <p className="color-gray">color-gray</p>
                                <p className="color-red">color-red</p>
                                <p className="color-orange">color-orange</p>
                                <p className="color-purple">color-purple</p>
                                <p className="color-yellow">color-yellow</p>
                                <p className="color-blue">color-blue</p>
                                <p className="color-cyan">color-cyan</p>
                            </div>
                        </div>
                        <h2>背景颜色</h2>
                        <div className="intro-text">
                            为元素添加类名<code>backcolor-</code>加颜色英文即可，共提供7种颜色
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <div className="color-default backcolor-green">backcolor-green</div>
                                <div className="color-default backcolor-gray">backcolor-gray</div>
                                <div className="color-default backcolor-red">backcolor-red</div>
                                <div className="color-default backcolor-orange">backcolor-orange</div>
                                <div className="color-default backcolor-purple">backcolor-purple</div>
                                <div className="color-default backcolor-yellow">backcolor-yellow</div>
                                <div className="color-default backcolor-blue">backcolor-blue</div>
                                <div className="color-default backcolor-cyan">backcolor-cyan</div>
                            </div>
                        </div>
                        <h2>边框颜色</h2>
                        <div className="intro-text">
                            为元素添加类名<code>bordercolor-</code>加颜色英文即可，共提供7种颜色
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <div className="color-green bordercolor-green">bordercolor-green</div>
                                <div className="color-gray bordercolor-gray">bordercolor-gray</div>
                                <div className="color-red bordercolor-red">bordercolor-red</div>
                                <div className="color-orange bordercolor-orange">bordercolor-orange</div>
                                <div className="color-purple bordercolor-purple">bordercolor-purple</div>
                                <div className="color-yellow bordercolor-yellow">bordercolor-yellow</div>
                                <div className="color-blue bordercolor-blue">bordercolor-blue</div>
                                <div className="color-cyan bordercolor-cyan">bordercolor-cyan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}