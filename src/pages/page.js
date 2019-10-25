import React from 'react'
import YMPlugins from '../ymui'

export default class Page extends React.Component {
    componentDidMount() {
        new YMPlugins.page({
            containerId: 'pageWrapper',
            pageNums: 10,
            initPage: 3,
            openSearch: true
        })
    }

    render() {
        return (
            <div className='contentWrapper color-blue backcolor-blue'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Page</h1>
                    </div>
                    <div className="main">
                        <h2>实例</h2>
                        <div className="intro-text">
                            首先，我们先看个实例，然后再详细说明
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div id="pageWrapper"> </div>
                            </div>
                            <pre>
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
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}