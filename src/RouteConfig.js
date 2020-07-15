import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import NavBar from './components/NavBar';

function RouteConfig() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/products" component={Products} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </div >
    );
}

export default RouteConfig



