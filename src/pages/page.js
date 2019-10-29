import React from 'react'
import YMPlugins from '../ymui'

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curPage: ""
        }
    }

    componentDidMount() {
        let _this = this;
        new YMPlugins.page({
            containerId: 'pageWrapper1',
            pageNums: 10,
            initPage: 1
        })
        new YMPlugins.page({
            containerId: 'pageWrapper2',
            pageNums: 23,
            initPage: 1,
            openSearch: true
        })
        new YMPlugins.page({
            containerId: 'pageWrapper3',
            pageNums: 10,
            initPage: 1,
            callback: function (page) {
                _this.setState({
                    curPage: page
                })
            }
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
                        <h2>默认分页</h2>
                        <div className="intro-text">
                            默认分页不包含页码输入功能
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div id="pageWrapper1"> </div>
                            </div>
                            <pre>
                                <p>{'new YMPlugins.page({'}</p>
                                <p>{'   containerId: \'pageWrapper\','}<span className="color-gray">{' // 容器的id'}</span></p>
                                <p>{'   pageNums: 10,'}<span className="color-gray">{' // 总页数'}</span></p>
                                <p>{'   initPage: 1,'}<span className="color-gray">{' // 当前页'}</span></p>
                                <p>{'})'}</p>
                            </pre>
                        </div>

                        <h2>页码输入</h2>
                        <div className="intro-text">
                            初始化分页时，添加<code>openSearch: true</code>即可开启输入
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div id="pageWrapper2"> </div>
                            </div>
                        </div>

                        <h2>回调</h2>
                        <div className="intro-text">
                            初始化分页的时候，传入回调函数，默认返回当前页码
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <div id="pageWrapper3"> </div>
                                <div className="color-red">当前页： {this.state.curPage}</div>
                            </div>
                            <pre>
                                <p>{'new YMPlugins.page({'}</p>
                                <p>{'   ...'}</p>
                                <p>{'   callback: function(page) {,'}<span className="color-gray">{' // 当前页'}</span></p>
                                <p className="color-gray">{'       // do something'}</p>
                                <p>{'   }'}</p>
                                <p>{'})'}</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}