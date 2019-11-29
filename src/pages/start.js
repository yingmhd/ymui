import React from 'react'

export default class Start extends React.Component {
    render() {
        return (
            <div className='contentWrapper color-purple backcolor-purple'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Let's Start</h1>
                    </div>
                    <div className="main">
                        <h2>引入YMUI</h2>
                        <div className="intro-text">
                            前往<a href="https://github.com/yingmhd/ymplugins/tree/master/ymplugin" target="_blank" className="color-green">下载地址</a>下载，
                            如果仅是样式展示，可只下载<code>ymui.css</code>，然后引入即可。如果你的项目支持<code>import</code>，<code>ymui.js</code>可通过import引入
                        </div>
                        <div className="show-area">
                            <pre>
                                <p className="color-gray">{'// 引入css'}</p>
                                <p>{'<link rel="stylesheet" type="text/css" href="ymui.css">'}</p>
                                <p className="color-gray">{'// 引入js'}</p>
                                <p>{'<script src="ymui.js" type="text/javascript"></script>'}</p>
                                <p className="color-gray">{'// 如果支持import'}</p>
                                <p>{'import YMPlugins from "ymui.js"'}</p>
                            </pre>
                        </div>
                        <h2>添加 Viewport Meta 元素</h2>
                        <div className="intro-text">
                            Viewport<code>meta</code>元素控制移动端浏览器的宽度和缩放。为了自适应设备的宽度，请将下面一行加入<code>{'<head>'}</code>中
                        </div>
                        <div className="show-area">
                            <pre>
                                <p>{'<meta name="viewport" content="width=device-width, initial-scale=1">'}</p>
                            </pre>
                        </div>
                        <h2>VUE的数据双向绑定</h2>
                        <div className="intro-text">
                            因为该项目是react项目，镶嵌vue的数据绑定会有冲突，可前往<a href="http://blog.ymhd.xyz/posts/2019/09/05/vue%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86.html" target="_blank" className="color-green">我的博客</a>
                             查看具体原理，直接使用可前往<a href="https://github.com/yingmhd/ymplugins/tree/master/ymvue" target="_blank" className="color-green">下载地址</a>下载使用
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}