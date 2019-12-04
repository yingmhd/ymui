import React from 'react'
import generateCode from "./generateCode";
import lodashData from "./lodashData";
import YMPlugins from '../ymui'
import './lodash.css'

export default class Lodash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curData: {},
            hasData: false,
            curIndex: -1
        }
    }

    componentDidMount() {
    }

    openMenu(index) {
        if(this.state.curIndex === index) {
            this.setState({
                curIndex: -1
            });
        }else {
            this.setState({
                curIndex: index
            });
        }
    }

    openDialog(i, j) {
        let data = lodashData.data[i].child[j];
        this.setState({
            curData: data,
            hasData: true
        });
        setTimeout(function () {
            let ymDialog = new YMPlugins.dialog({
                title: data.name,
                content: document.getElementById('replace').innerHTML,
                cancel: false,
                ok_text: '俺晓得啦',
                theme: 'cyan',
                ok_fuc: function (dom) {
                    this.close();
                }
            });
            ymDialog.show();
        },100);
    }

    render() {
        let curData = this.state.curData;
        return (
            <div className='contentWrapper color-cyan backcolor-cyan'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Lodash中文文档</h1>
                    </div>
                    <div className="menu-area">
                        <ul>
                            {lodashData.data.map((item0, index0) => (
                                <li key={index0}>
                                    <h2 className={this.state.curIndex === index0?'one-level-menu open':'one-level-menu close'} onClick={this.openMenu.bind(this,index0)}>{item0.name}</h2>
                                    <ul className={this.state.curIndex === index0?'':'hide'}>
                                        {item0.child.map((item1, index1) => (
                                            <li key={index0 + '0' + index1}>
                                                <h3 className="two-level-menu" onClick={this.openDialog.bind(this, index0, index1)}>{item1.name}</h3>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div id="replace">
                    {
                        this.state.hasData &&

                        <div className="content-area">
                            <pre>{curData.grammar}</pre>
                            <blockquote>{curData.explain}</blockquote>
                            {curData.argus && <h4>参数</h4>}
                            {curData.argus && curData.argus.split('\n').map((arg, i) => (
                                <p key={i}>
                                    <span>{arg.includes(':') ? arg.split(':')[0] : ''}</span>{arg.includes(':') ? arg.split(':')[1] : arg}
                                </p>
                            ))}
                            <h4>返回</h4>
                            <p>
                                <span>{curData.ret.includes(':') ? curData.ret.split(':')[0] : ''}</span>{curData.ret.includes(':') ? curData.ret.split(':')[1] : curData.ret}
                            </p>
                            <h4>例子</h4>
                            {generateCode(curData.ex)}
                        </div>
                    }
                </div>
            </div>
        )
    }
}