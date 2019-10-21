import React from 'react'
import {Link} from 'react-router-dom'

import './leftmenu.css'

const menuList = [
    [
        {
            name: "起步",
            path: "/",
            color: "purple"
        },
        {
            name: "取色",
            path: "/colors",
            color: "orange"
        }
    ],
    [
        {
            name: "按钮",
            path: "/buttons",
            color: "green"
        },
        {
            name: "输入框",
            path: "/input",
            color: "green"
        },
        {
            name: "表格",
            path: "/table",
            color: "green"
        }
    ],
    [
        {
            name: "弹窗",
            path: "/dialog",
            color: "blue"
        },
        {
            name: "提示",
            path: "/tip",
            color: "blue"
        },
        {
            name: "分页",
            path: "/page",
            color: "blue"
        }
    ]
]
export default class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: location.pathname
        };
        this.getClassName = this.getClassName.bind(this);
    }

    getClassName(color, path) {
        let classname = 'color-' + color;
        if (this.state.pathname === path) {
            classname += ' active';
        }
        return classname;
    }

    render() {
        return (
            <div className='ym-menu'>
                <div className='placeDiv'>
                </div>
                <div className='actDiv'>
                    <div className='logo'>
                        <span className='color-green'>英</span><span className='color-blue'>目</span><span
                        className='color-red'>UI</span>
                    </div>
                    {
                        menuList.map((navItem, ii) =>
                            <nav key={ii}>
                                {
                                    navItem.map((item, i) =>
                                        <Link to={item.path} className={this.getClassName(item.color, item.path)}
                                              key={ii + "0" + i}
                                              onClick={()=>this.setState({pathname: item.path})}>{item.name}</Link>
                                    )
                                }
                            </nav>
                        )
                    }
                </div>
            </div>
        )
    }
}