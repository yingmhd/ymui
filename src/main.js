import React from 'react';
import {Route} from 'react-router-dom'
import './ymui.css'

import Index from "./pages";
import Colors from "./pages/colors";
import Button from './pages/buttons'
import Form from "./pages/form";


export default class Main extends React.Component {
    render() {
        return (
            <div className='ym-container'>
                <Route exact path='/' component={Index}/>
                <Route exact path='/colors' component={Colors}/>
                <Route exact path='/buttons' component={Button}/>
                <Route exact path='/form' component={Form}/>
            </div>
        )
    }
}