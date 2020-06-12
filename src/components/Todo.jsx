import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import ConfirmStatusChange from './Delete-todo';
import "@reach/dialog/styles.css"
import "../index.css"

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "open"
        }
    }

    handleSubmit = () => {
        axios.delete('http://localhost:4000/todos/delete/' + this.props.todo._id)
        .then(res => console.log(res.data));
        window.location.assign('/')
    }

    handleStatusChange = event => {
        this.setState({ select: event.target.value })
    }

    handleReset = event => alert("Resetted")

    render() {
        return (
            <tr>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                <td className="table-action">
                    <Link to={"/edit/" + this.props.todo._id} className="btn btn-success mr-2">Edit</Link>
                    <ConfirmStatusChange title={`"Are you sure delete ${this.props.todo.todo_description}?"`}>
                        {confirm => (
                            <form onSubmit={confirm(this.handleSubmit)}>
                                <button className="btn btn-danger">delete</button>
                            </form>
                        )}
                    </ConfirmStatusChange>
                </td>
            </tr>
        )
    }
}

export default Todo;
