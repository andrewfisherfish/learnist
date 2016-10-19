import React, {Component} from 'react'

class UserInfo extends Component {

    handlerNewId(){
      this.props.createNewUserId();
    }

    handlerNewIdIfAsync(){
      this.props.createNewUserIdIfAsync();
    }

    handlerNewIdIfOdd(){
      this.props.createNewUserIdIfOdd();
    }
    render() {
        return (
            <li>
              <div>Username: {this.props.user.username}</div>
              <div>id: {this.props.user.id}</div>
              <button onClick={this.handlerNewId.bind(this)}>Update user id</button>
              <button onClick={this.handlerNewIdIfOdd.bind(this)}>Update user id if Odd</button>
              <button onClick={this.handlerNewIdIfAsync.bind(this)}>Update user id if Async</button>
            </li>
        )
    }

}

export default UserInfo
