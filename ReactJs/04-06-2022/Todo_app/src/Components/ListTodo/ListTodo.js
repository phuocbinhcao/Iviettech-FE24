import React, { Component } from "react";
import './style.css'

class ListTodo extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
  render() {
    return (
        <div className="list-todo">
          <div className="check">
            <input type="checkbox" />
            <p>{this.props.title}</p>
          </div>
          <div className="list-icon">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
      </div>
    );
  }
}

export default ListTodo;
