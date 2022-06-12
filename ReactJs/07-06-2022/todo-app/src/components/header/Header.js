import React, { Component } from "react";
import "../../styles/header.scss";
import { toast } from "react-toastify";

class Header extends Component {
  state = {
    todos: "",
  };
  handleInputTodos = (e) => {
    this.setState({
      todos: e.target.value,
    });
  };

  handleAdd = () => {
    if (!this.state.todos) {
      toast.error("You must enter input todo!");
      return;
    }
    let id = Math.floor(Math.random() * 1000);
    this.props.addNewTodo({
      id: id,
      todos: this.state.todos,
      status: false,
    });
    toast.success("You add new todo success!");
    this.setState({
      todos: "",
    });
  };

  render() {
    return (
      <div className="header">
        <input
          type="text"
          value={this.state.todos}
          onChange={(e) => this.handleInputTodos(e)}
          placeholder="Enter todo ..."
        />
        <button 
          onClick={() => this.handleAdd()}> Add
        </button>
      </div>
    );
  }
}

export default Header;
