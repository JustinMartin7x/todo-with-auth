import React, { Component } from 'react'
import { fetchTodos, createTodo } from './servers.js'

export default class ToDosPage extends Component {
    state = {
        todos: [],
        todo: '',
        loading: false
    }



    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        const response = await fetchTodos()
        this.setState({
            todos: response.body,
            loaing: false
        })

    }
    handleSubmit = async (e) => {

        e.preventDefault()
        const newItem = {
            todo: this.state.todo,
        }
        await createTodo(newItem)
        await fetchTodos()
        console.log(this.state.todos)
    }
    // handleCompleted = async () => {
    //     const { token } = this.props
    // }





    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="new todo" onChange={(e) => this.setState({ todo: e.target.value })}></input>
                    <button>Add</button>
                </form>


            </div >
        )

    }
}
