import React from 'react'

export default class Left extends React.Component {
    render() {
        let color = '#45b787';
        return (
            <div className='contentWrapper' style={{backgroundColor: color}}>
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
                                <a className="ymBtn ymBtn-green" href="#" role="button">Link</a>
                                <button className="ymBtn ymBtn-green" type="submit">Button</button>
                                <input className="ymBtn ymBtn-green" type="button" value="Input"/>
                                <input className="ymBtn ymBtn-green" type="submit" value="Submit"/>
                            </div>
                            <code>
                                <p>{'<a class="ymBtn ymBtn-green" href="#" role="button">Link</a>'}</p>
                                <p>{'<button class="ymBtn ymBtn-green" type="submit">Button</button>'}</p>
                                <p>{'<input class="ymBtn ymBtn-green" type="button" value="Input">'}</p>
                                <p>{'<input class="ymBtn ymBtn-green" type="submit" value="Submit">'}</p>
                            </code>
                        </div>
                        <h2>预定义样式</h2>
                        <div className="intro-text">
                            使用下面列出的类可以快速创建一个带有预定义样式的按钮。
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <button className="ymBtn ymBtn-green">Green</button>
                                <button className="ymBtn ymBtn-yellow">Yellow</button>
                                <button className="ymBtn ymBtn-orange">Orange</button>
                                <button className="ymBtn ymBtn-blue">Blue</button>
                                <button className="ymBtn ymBtn-purple">Purple</button>
                                <button className="ymBtn ymBtn-cyan">Cyan</button>
                                <button className="ymBtn ymBtn-disabled">Disabled</button>
                            </div>
                            <code>
                                <p>{'<button className="ymBtn ymBtn-green">Green</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-yellow">Yellow</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-orange">Orange</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-blue">Blue</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-purple">Purple</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-cyan">Cyan</button>'}</p>
                                <p>{'<button className="ymBtn ymbtn-disabled">Disabled</button>'}</p>
                            </code>
                        </div>
                        <h2>尺寸</h2>
                        <div className="intro-text">
                            需要让按钮具有不同尺寸吗？只需要添加个类名即可
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <button className="ymBtn ymBtn-green ymBtn-xsmall">Extra Small Button</button>
                                <button className="ymBtn ymBtn-green ymBtn-small">Small Button</button>
                                <button className="ymBtn ymBtn-green">Regular Button</button>
                                <button className="ymBtn ymBtn-green ymBtn-large">Large Button</button>
                                <button className="ymBtn ymBtn-green ymBtn-xlarge">Extra Large Button</button>
                            </div>
                            <code>
                                <p>{'<button className="ymBtn ymBtn-green ymBtn-xsmall">Extra Small Button</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-green ymBtn-small">Small Button</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-green">Regular Button</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-green ymBtn-large">Large Button</button>'}</p>
                                <p>{'<button className="ymBtn ymBtn-green ymBtn-xlarge">Extra Large Button</button>'}</p>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}