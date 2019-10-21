import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import './ymui.css'

import LeftMenu from './layout/leftmenu'
import Main from './main'

ReactDOM.render(
    <Router>
        <div className='ym-outWrapper'>
            <LeftMenu> </LeftMenu>
            <Main> </Main>
        </div>
    </Router>
    ,document.getElementById('root')
);
