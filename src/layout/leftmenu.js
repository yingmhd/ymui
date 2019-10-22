import React from 'react'
import {Link} from 'react-router-dom'

import './leftmenu.css'

const menuList = [
    [
        {
            name: "Start",
            path: "/",
            color: "purple"
        },
        {
            name: "Colors",
            path: "/colors",
            color: "orange"
        }
    ],
    [
        {
            name: "Button",
            path: "/buttons",
            color: "green"
        },
        {
            name: "Form",
            path: "/form",
            color: "green"
        },
        {
            name: "Table",
            path: "/table",
            color: "green"
        }
    ],
    [
        {
            name: "Dialog",
            path: "/dialog",
            color: "blue"
        },
        {
            name: "Tip",
            path: "/tip",
            color: "blue"
        },
        {
            name: "Page",
            path: "/page",
            color: "blue"
        }
    ]
]
export default class Left extends React.Component {
    constructor(props) {
        super(props);
        let w_width = document.body.offsetWidth;
        this.state = {
            pathname: location.pathname,
            menuShow: w_width >= 950,
            hidePlace: w_width < 950
        };
        this.getClassName = this.getClassName.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    getClassName(color, path) {
        let classname = 'color-' + color;
        if (this.state.pathname === path) {
            classname += ' active';
        }
        return classname;
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize(e) {
        let wWidth = e.target.innerWidth;
        if (wWidth < 950) {
            if (this.state.menuShow) {
                this.setState({
                    menuShow: false,
                    hidePlace: true
                })
            }
        } else {
            if (!this.state.menuShow) {
                this.setState({
                    menuShow: true,
                    hidePlace: false
                })
            }
        }
    }

    showMainMenu() {
        this.setState({
            menuShow: true
        })
    }

    handleMenuClick(path) {
        this.setState({
            pathname: path
        });
        if (this.state.hidePlace) {
            this.setState({
                menuShow: false
            })
        }
    }

    render() {
        let mclass = this.state.menuShow ? '' : 'hide-main';
        mclass += this.state.hidePlace ? ' hide-place' : '';
        return (
            <div className={'ym-menu ' + mclass}>
                <div className='menu-place'>
                </div>
                <div className='menu-btn' onClick={this.showMainMenu.bind(this)}>
                    <span> </span>
                </div>
                <div className='menu-main' id='menuMain'>
                    <div className='logo'>
                        <span className='color-green'>Y</span><span className='color-blue'>M</span><span
                        className='color-red'>UI</span>
                    </div>
                    {
                        menuList.map((navItem, ii) =>
                            <nav key={ii}>
                                {
                                    navItem.map((item, i) =>
                                        <Link to={item.path} className={this.getClassName(item.color, item.path)}
                                              key={ii + "0" + i}
                                              onClick={this.handleMenuClick.bind(this, item.path)}>{item.name}</Link>
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