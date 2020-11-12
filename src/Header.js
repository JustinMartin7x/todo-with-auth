import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {

        return (
            <>
                <div>
                    {this.props.token && <div>welcome, user!!!</div>}
                    {this.props.token && <Link to="/todospage"><div>todos</div></Link>}

                </div>
                <div>
                    <Link to="/loginPage"><div>log in</div></Link>
                    <Link to="/signupPage"><div>sign up</div></Link>
                    <Link to="/loginpage"> <button onClick={() => this.props.logout('')}>Logout</button> </Link>
                </div>
            </>
        )
    }
}
