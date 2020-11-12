import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from './Header.js'
import ToDosPage from './ToDosPage.js';
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'
import PrivateRoute from './PrivateRoute.js';
import { TOKEN, USERNAME } from './constants'

export default class App extends Component {
  state = {
    username: localStorage.getItem(USERNAME) || '',
    token: localStorage.getItem(TOKEN) || ''
  }
  logOut = () => {
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('USERNAME', '');

    this.setState({
      username: '',
      token: ''
    })

  }

  changeTokenAndUsername = (email, token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('USERNAME', email);

    this.setState({
      username: email,
      token: token
    })
  }




  render() {
    return (
      <div>
        <Router>
          <Header
            changeTokenAndUsername={this.changeTokenAndUsername}
            token={this.state.token}
            logout={this.logOut}
          />
          <Switch>
            <Route exact path='/loginPage' render={(routerProps) => <LoginPage
              changeTokenAndUsername={this.changeTokenAndUsername}
              {...routerProps} />}
            />
            <Route
              exact path='/signuppage'
              render={(routerProps) => <SignUpPage
                changeTokenAndUsername={this.changeTokenAndUsername}
                {...routerProps} />}
            />
            <PrivateRoute
              exact
              path='/todospage'
              token={this.state.token}
              render={(routerProps) => <ToDosPage
                {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}