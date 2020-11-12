import React, { Component } from 'react'
import { fetch } from 'superagent'
import { createUser } from './fetchcalls.js'


export default class SignUpPage extends Component {
    state = {
        email: '',
        password: '',
        loading: false
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        console.log(this.state);

        this.setState({ loading: true })
        const info = {
            email: this.state.email,
            password: this.state.password
        }
        const user = await createUser(info)

        this.setState({ loading: false })


        this.props.changeTokenAndUsername(user.body.email, user.body.token);
        console.log(this.state)

        this.props.history.push('/ToDosPage');
    }

    render() {

        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </label>
                    <label>
                        <input type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                    </label>
                    <button>Sign Up</button>
                </form>

            </div>
        )
    }
}
