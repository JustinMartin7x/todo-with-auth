import React, { Component } from 'react'
import { fetchTodos, createTodo, completeTask } from './fetchcalls.js'

export default class ToDosPage extends Component {
    state = {
        todos: [],
        todo: '',
        loading: false
    }
    fetchAll = async () => {
        this.setState({
            loading: true
        })
        const response = await fetchTodos()
        this.setState({
            todos: response.body,
            loaing: false
        })
    }
    componentDidMount = () => {
        this.fetchAll()
    }

    handleSubmit = async (e) => {

        e.preventDefault()
        const newItem = {
            todo: this.state.todo,
        }
        await createTodo(newItem)
        await this.fetchAll()
    }
    handleCompleted = async (someId) => {
        await completeTask(someId)
        await this.fetchAll()

    }
    render() {
        const {
            todos,
            loading,
        } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="new todo" onChange={(e) => this.setState({ todo: e.target.value })}></input>
                    <button>Add</button>
                </form>
                {
                    !loading
                        ? 'LOADING!!!!!'
                        : todos.map(todos => <div style={{
                            textDecoration: todos.is_completed ? 'line-through' : 'none'
                        }
                        }>
                            {todos.todo}
                            {
                                todos.is_completed ? '' : <button
                                    onClick={() => this.handleCompleted(todos.id)}>
                                    Complete
                            </button>
                            }
                        </div>)
                }



            </div >
        )

    }
}
