import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <UserInfo user={this.props.user} createNewUserIdIfOdd={this.props.actions.createNewUserIdIfOdd}
                  createNewUserIdIfAsync={this.props.actions.createNewUserIdIfAsync}  createNewUserId={this.props.actions.createNewUserId} />
                <TodoInput addTodo={this.props.actions.addTodo}/>
                <TodoList actions={this.props.actions} todos={this.props.todos}/>
            </div>
        )
    }

}

function mapStateToProp(state) {
    return state;
}

function mapDispatchToProp(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(App)
