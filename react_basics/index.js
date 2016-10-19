import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './sample.scss'
//import 'css!./styles/sample.scss' as alternative

class HelloWorld extends Component {

    clickHandler() {
        console.log(this);
    }

    render() {
        return <h1 onClick={this.clickHandler.bind(this)} className="test-style">{'Hello world from React component'}</h1>
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('react-target'));
