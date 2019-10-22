import React from 'react'

export default class Buttons extends React.Component {
    render() {
        return (
            <div className='contentWrapper color-green backcolor-green'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Buttons</h1>
                    </div>
                    <div className="main">
                        <h2>标签或元素</h2>
                        <div className="intro-text">
                            为<code>{'<a>'}</code>，<code>{'<button>'}</code>，<code>{'<input>'}</code>元素添加按钮类，即可使用。
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <a className="ym-btn ym-btn-green" href="#" role="button">Link</a>
                                <button className="ym-btn ym-btn-green" type="submit">Button</button>
                                <input className="ym-btn ym-btn-green" type="button" value="Input"/>
                                <input className="ym-btn ym-btn-green" type="submit" value="Submit"/>
                            </div>
                            <code>
                                <p>{'<a class="ym-btn ym-btn-green" href="#" role="button">Link</a>'}</p>
                                <p>{'<button class="ym-btn ym-btn-green" type="submit">Button</button>'}</p>
                                <p>{'<input class="ym-btn ym-btn-green" type="button" value="Input">'}</p>
                                <p>{'<input class="ym-btn ym-btn-green" type="submit" value="Submit">'}</p>
                            </code>
                        </div>
                        <h2>预定义样式</h2>
                        <div className="intro-text">
                            使用下面列出的类可以快速创建一个带有预定义样式的按钮。
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <button className="ym-btn ym-btn-green">Green</button>
                                <button className="ym-btn ym-btn-yellow">Yellow</button>
                                <button className="ym-btn ym-btn-orange">Orange</button>
                                <button className="ym-btn ym-btn-blue">Blue</button>
                                <button className="ym-btn ym-btn-purple">Purple</button>
                                <button className="ym-btn ym-btn-cyan">Cyan</button>
                                <button className="ym-btn ym-btn-disabled">Disabled</button>
                            </div>
                            <code>
                                <p>{'<button class="ym-btn ym-btn-green">Green</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-yellow">Yellow</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-orange">Orange</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-blue">Blue</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-purple">Purple</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-cyan">Cyan</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-disabled">Disabled</button>'}</p>
                            </code>
                        </div>
                        <h2>尺寸</h2>
                        <div className="intro-text">
                            需要让按钮具有不同尺寸吗？只需要添加个类名即可
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <button className="ym-btn ym-btn-green ym-btn-xsmall">Extra Small Button</button>
                                <button className="ym-btn ym-btn-green ym-btn-small">Small Button</button>
                                <button className="ym-btn ym-btn-green">Regular Button</button>
                                <button className="ym-btn ym-btn-green ym-btn-large">Large Button</button>
                                <button className="ym-btn ym-btn-green ym-btn-xlarge">Extra Large Button</button>
                            </div>
                            <code>
                                <p>{'<button class="ym-btn ym-btn-green ym-btn-xsmall">Extra Small Button</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-green ym-btn-small">Small Button</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-green">Regular Button</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-green ym-btn-large">Large Button</button>'}</p>
                                <p>{'<button class="ym-btn ym-btn-green ym-btn-xlarge">Extra Large Button</button>'}</p>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}