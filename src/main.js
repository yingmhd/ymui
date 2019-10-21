import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './ymui.css'

import Index from "./pages";
import Colors from "./pages/colors";
import Button from './pages/buttons'


export default class Main extends React.Component{
    render() {
        return(
            <div className='ym-container'>
                <Route exact path='/' component={Index}/>
                <Route exact path='/colors' component={Colors}/>
                <Route exact path='/buttons' component={Button}/>
            </div>
        )
    }
}