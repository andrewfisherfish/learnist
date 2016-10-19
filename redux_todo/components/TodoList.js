import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: 'initial text'
        }
    }

    handleChange(event) {
        this.setState({inputText: event.target.value});
    }

    render() {
        return (
            <ul>
                {
                  this.props.todos.map((todo) => {
                    return <TodoItem actions={this.props.actions} key={todo.id} todo={todo} />
                  })
                }
            </ul>
        )
    }

}

export default TodoList
