import React from 'react';
import {Route} from 'react-router-dom'
import './ymui.css'

import Index from "./pages";
import Colors from "./pages/colors";
import Button from './pages/buttons'
import Form from "./pages/form";
import Start from "./pages/start";
import Table from "./pages/table";
import Dialog from "./pages/dialog";
import Classes from './pages/classes';
import Layout from './pages/layout';

export default class Main extends React.Component {
    render() {
        return (
            <div className='ym-container'>
                <Route exact path='/' component={Index}/>
                <Route exact path='/colors' component={Colors}/>
                <Route exact path='/layout' component={Layout}/>
                <Route exact path='/class' component={Classes}/>
                <Route exact path='/buttons' component={Button}/>
                <Route exact path='/form' component={Form}/>
                <Route exact path='/start' component={Start}/>
                <Route exact path='/table' component={Table}/>
                <Route exact path='/dialog' component={Dialog}/>
            </div>
        )
    }
}