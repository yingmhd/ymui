import React from 'react'

export default class Table extends React.Component {
    render() {
        return (
            <div className='contentWrapper color-green backcolor-green'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Table</h1>
                    </div>
                    <div className="main">
                        <h2>默认表格</h2>
                        <div className="intro-text">
                            给<code>{'<table>'}</code>加个class<code>ym-table</code>就可以创建默认的表格
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <table className="ym-table">
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>age</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>mark</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>john</td>
                                        <td>18</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <pre>
                                <p>{'<table class="ym-table">'}</p>
                                <p>{'   <thead>'}</p>
                                <p>{'   <tr>'}</p>
                                <p>{'       <th>id</th>'}</p>
                                <p>{'       <th>name</th>'}</p>
                                <p>{'       <th>age</th>'}</p>
                                <p>{'   </tr>'}</p>
                                <p>{'   </thead>'}</p>
                                <p>{'   <tbody>'}</p>
                                <p>{'   <tr>'}</p>
                                <p>{'       <td>1</td>'}</p>
                                <p>{'       <td>mark</td>'}</p>
                                <p>{'       <td>21</td>'}</p>
                                <p>{'   </tr>'}</p>
                                <p>{'   <tr>'}</p>
                                <p>{'       <td>2</td>'}</p>
                                <p>{'       <td>john</td>'}</p>
                                <p>{'       <td>18</td>'}</p>
                                <p>{'   </tr>'}</p>
                                <p>{'   </tbody>'}</p>
                                <p>{'</table>'}</p>
                            </pre>
                        </div>
                        <h2>有竖直边框的表格</h2>
                        <div className="intro-text">
                            给<code>{'<table>'}</code>再加个class<code>ym-table-verb</code>
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <table className="ym-table ym-table-verb">
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>age</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>mark</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>john</td>
                                        <td>18</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <pre>
                                <p>{'<table class="ym-table ym-table-verb">'}</p>
                                <p>{'   ...'}</p>
                                <p>{'</table>'}</p>
                            </pre>
                        </div>
                        <h2>有水平边框的表格</h2>
                        <div className="intro-text">
                            给<code>{'<table>'}</code>再加个class<code>ym-table-horb</code>
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <table className="ym-table ym-table-horb">
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>age</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>mark</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>john</td>
                                        <td>18</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <pre>
                                <p>{'<table class="ym-table ym-table-horb">'}</p>
                                <p>{'   ...'}</p>
                                <p>{'</table>'}</p>
                            </pre>
                        </div>
                        <h2>斑马纹表格</h2>
                        <div className="intro-text">
                            给<code>{'<table>'}</code>再加个class<code>ym-table-stripe</code>
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <table className="ym-table ym-table-stripe">
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>age</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>mark</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>john</td>
                                        <td>18</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>alex</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>kitty</td>
                                        <td>10</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <pre>
                                <p>{'<table class="ym-table ym-table-stripe">'}</p>
                                <p>{'   ...'}</p>
                                <p>{'</table>'}</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}