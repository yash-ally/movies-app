import React, {Component, PureComponent} from 'react';

import Axios from 'axios'

import './index.css'
import axios from 'axios';

class Parent extends Component{
    state = {value: "", todos: []};

    componentDidMount(){

        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then((res)=> {
            // debugger;
            this.setState({todos: res.data});
        });

    }


    render(){

        console.log("render called")

        return (
            <div>
            <input type="text" placeholder="Search"
            onChange={(e) => this.setState({ value: e.target.value })}></input>
            <button>Submit</button>

            {/* console.log("PureComponent") */}
            <h3 id="output">{this.state.value}</h3>

            {this.state.todos.length && this.state.todos.map((item)=> <h1>{item.Title}</h1> )}
            </div>
        )
        
    }
}

export default Parent;

// class Child extends PureComponent