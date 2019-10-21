import React from 'react'

export default class Left extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let color = '#2bae85';
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
                            <code>
                                <p>{'<a class="ymBtn ymBtn-default" href="#" role="button">Link</a>'}</p>
                                <p>{'<button class="ymBtn ymBtn-default" type="submit">Button</button>'}</p>
                                <p>{'<input class="ymBtn ymBtn-default" type="button" value="Input">'}</p>
                                <p>{'<input class="ymBtn ymBtn-default" type="submit" value="Submit">'}</p>
                            </code>
                        </div>
                        <h2>预定义样式</h2>
                        <div className="show-area">

                        </div>
                        <h2>尺寸</h2>
                        <div className="show-area">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}