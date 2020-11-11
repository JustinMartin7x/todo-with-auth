import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LoginPage from './LoginPage.js'




export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <LoginPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
