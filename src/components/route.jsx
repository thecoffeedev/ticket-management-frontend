import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App'

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' render = {(props) => {
                    return (
                        <App page='tickets' />
                    );
                }} />
                <Route exact path='/agents' render = {(props) => {
                    return (
                        <App page='agents' />
                    )
                }} />
                <Route exact path='/contacts' render = {(props) => {
                    return (
                        <App page='contacts' />
                    )
                }} />
                <Route exact path='/newTicket' render = {(props) => {
                    return (
                        <App page='newTicket' />
                    )
                }} />
                <Route exact path='/newAgent' render = {(props) => {
                    return (
                        <App page='newAgent' />
                    )
                }} />
                <Route exact path='/newContact' render = {(props) => {
                    return (
                        <App page='newContact' />
                    )
                }} />
            </Switch>
        </Router>
    );
}

export default Routes;