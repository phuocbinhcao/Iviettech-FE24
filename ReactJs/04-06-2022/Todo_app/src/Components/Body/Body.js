import React, { Component } from "react";
import ListTodo from "../ListTodo/ListTodo";
import "./style.css";

class Body extends Component {
  render() {
    return (
      <div className="body-todo">
        <ListTodo title="Công việc 1"/>
        <ListTodo title="Công việc 2"/>
        <ListTodo title="Công việc 3"/>
        <ListTodo title="Công việc 4"/>
        <ListTodo title="Công việc 5"/>
        <ListTodo title="Công việc 6"/>
      </div>
    );
  }
}

export default Body;
