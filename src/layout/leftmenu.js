import React from 'react'
import {Link} from 'react-router-dom'

import './leftmenu.css'
import Logo from '../../public/logo.png'
const menuList = [
    [
        {
            name: "Start",
            path: "/start",
            color: "purple"
        },
        {
            name: "Colors",
            path: "/colors",
            color: "orange"
        },
        {
            name: "Layout",
            path: "/layout",
            color: "red"
        },
        {
            name: "Class",
            path: "/class",
            color: "yellow"
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
            name: "Carousel",
            path: "/carousel",
            color: "blue"
        },
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
        let classname = 'color-' + color + ' canhover';
        if (this.state.pathname === path) {
            classname += ' active';
        }
        return classname;
    }

    componentDidMount() {
        let _this = this;
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('popstate',function () {
            _this.setState({
                pathname: location.pathname
            });
        });
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
                    <Link to='/' className='logo' onClick={this.handleMenuClick.bind(this, '/')}>
                        <img src={Logo} alt="英目UI"/>
                    </Link>
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
                    <div className="feedbak-area">
                        <div className="color-green">©英目花盗</div>
                        <div className="color-purple">dyfself@126.com</div>
                    </div>
                </div>
            </div>
        )
    }
}