import React, {Component} from 'react'

class TodoItem extends Component {

    handlerComplete(){
      this.props.actions.completeTodo(this.props.todo.id);
    }

    handlerDelete(){
      this.props.actions.deleteTodo(this.props.todo.id);
    }

    render() {
        return (
            <li>
              <div>{this.props.todo.text}</div>
              <button onClick={this.handlerComplete.bind(this)}>Complete</button>
              <button onClick={this.handlerDelete.bind(this)}>Delete</button>
            </li>
        )
    }

}

export default TodoItem
