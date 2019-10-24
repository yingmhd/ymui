import React from 'react'
import {Link} from 'react-router-dom'

export default class Index extends React.Component{
    render() {
        return(
            <div className='contentWrapper'>
                <div className='ym-content index-page'>
                    <h1><span className='color-green'>Y</span><span className='color-blue'>M</span><span
                        className='color-red'>UI</span></h1>
                    <h2>简单，但不失精彩</h2>
                    <Link to='/start'>
                        <button className="ym-btn ym-btn-green ym-btn-xlarge">开始使用</button>
                    </Link>
                </div>
            </div>
        )
    }
}