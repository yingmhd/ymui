import React from 'react'

export default class Form extends React.Component {
    render() {
        return (
            <div className='contentWrapper color-green backcolor-green'>
                <div className='ym-content'>
                    <div className="title">
                        <h1>Form</h1>
                    </div>
                    <div className="main">
                        <h2>默认表单</h2>
                        <div className="intro-text">
                            给<code>{'<form>'}</code>加个class<code>ym-form</code>就可以创建默认的表单
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <form className="ym-form">
                                    <label htmlFor="form-username">username</label>
                                    <input id="form-username" type="text" placeholder="username"/>
                                    <label htmlFor="form-password">password</label>
                                    <input id="form-password" type="password" placeholder="password"/>
                                    <label htmlFor="form-state">state</label>
                                    <select id="form-state">
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                    <label htmlFor="form-remember" className="ym-checkbox">
                                        <input id="form-remember" type="checkbox"/> Remember me
                                    </label>
                                    <button type="submit" className="ym-btn ym-btn-green">Sign in
                                    </button>
                                </form>
                            </div>

                            <pre>
                                <code>
                                    <p>{'<form class="ym-form">'}</p>
                                    <p>{'   <label for="form-username">username</label>'}</p>
                                    <p>{'   <input id="form-username" type="text" placeholder="username"/>'}</p>
                                    <p>{'   <label for="form-password">password</label>'}</p>
                                    <p>{'   <input id="form-password" type="password" placeholder="password"/>'}</p>
                                    <p>{'   <label for="form-state">state</label>'}</p>
                                    <p>{'   <select id="form-state">'}</p>
                                    <p>{'       <option>A</option>'}</p>
                                    <p>{'       <option>B</option>'}</p>
                                    <p>{'       <option>C</option>'}</p>
                                    <p>{'   </select>'}</p>
                                    <p>{'   <label for="form-remember" class="ym-checkbox">'}</p>
                                    <p>{'       <input id="form-remember" type="checkbox"/> Remember me'}</p>
                                    <p>{'   </label>'}</p>
                                    <p>{'   <button type="submit" class="ym-btn ym-btn-green">Sign in</button>'}</p>
                                    <p>{'</form>'}</p>
                                </code>
                            </pre>
                        </div>
                        <h2>内联表单</h2>
                        <div className="intro-text">
                            给<code>{'<form>'}</code>再加个class<code>ym-form-inline</code>就可以创建内联表单
                        </div>
                        <div className="show-area">
                            <div className='element'>
                                <form className="ym-form ym-form-inline">
                                    <input id="form-username" type="text" placeholder="username"/>
                                    <input id="form-password" type="password" placeholder="password"/>
                                    <button type="submit" className="ym-btn ym-btn-green">Sign in
                                    </button>
                                </form>
                            </div>

                            <pre>
                                <code>
                                    <p>{'<form class="ym-form">'}</p>
                                    <p>{'   <input id="form-username" type="text" placeholder="username"/>'}</p>
                                    <p>{'   <input id="form-password" type="password" placeholder="password"/>'}</p>
                                    <p>{'   <button type="submit" class="ym-btn ym-btn-green">Sign in</button>'}</p>
                                    <p>{'</form>'}</p>
                                </code>
                            </pre>
                        </div>
                        <h2>对齐式</h2>
                        <div className="intro-text">
                            还是先给<code>{'<form>'}</code>标签加默认class <code>ym-form</code> ，然后再加 <code>ym-form-align</code> 。因为是对齐式表单，label显示在input的左边，
                            还要设置为内联元素，所以需要添加class<code>ym-form-inline</code>
                            另外需要在每行元素上包裹一个<code>{'<div class="ym-group">'}</code>
                        </div>
                        <div className="show-area">
                            <div className="element">
                                <form className="ym-form ym-form-inline ym-form-align">
                                    <div className="ym-group">
                                        <label htmlFor="form-username">username</label>
                                        <input id="form-username" type="text" placeholder="username"/>
                                    </div>
                                    <div className="ym-group">
                                        <label htmlFor="form-password">password</label>
                                        <input id="form-password" type="password" placeholder="password"/>
                                    </div>
                                    <div className="ym-group">
                                        <label htmlFor="form-email">email</label>
                                        <input id="form-email" type="email" placeholder="email"/>
                                    </div>
                                    <div className="ym-control">
                                        <label htmlFor="form-remember" className="ym-checkbox">
                                            <input id="form-remember" type="checkbox"/> Remember me
                                        </label>
                                        <button type="submit" className="ym-btn ym-btn-green">Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <pre>
                                <code>
                                    <p>{'<form class="ym-form ym-form-inline ym-form-align">'}</p>
                                    <p>{'   <div class="ym-group">'}</p>
                                    <p>{'       <label for="form-username">username</label>'}</p>
                                    <p>{'       <input id="form-username" type="text" placeholder="username"/>'}</p>
                                    <p>{'   </div>'}</p>
                                    <p>{'   <div class="ym-group">'}</p>
                                    <p>{'       <label for="form-password">password</label>'}</p>
                                    <p>{'       <input id="form-password" type="password" placeholder="password"/>'}</p>
                                    <p>{'   </div>'}</p>
                                    <p>{'   <div class="ym-group">'}</p>
                                    <p>{'       <label for="form-email">email</label>'}</p>
                                    <p>{'      <input id="form-email" type="email" placeholder="email"/>'}</p>
                                    <p>{'   </div>'}</p>
                                    <p>{'   <div class="ym-control">'}</p>
                                    <p>{'       <label for="form-remember" class="ym-checkbox">'}</p>
                                    <p>{'            <input id="form-remember" type="checkbox"/> Remember me'}</p>
                                    <p>{'       </label>'}</p>
                                    <p>{'       <button type="submit" class="ym-btn ym-btn-green">Sign in</button>'}</p>
                                    <p>{'   </div>'}</p>
                                    <p>{'</form>'}</p>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}