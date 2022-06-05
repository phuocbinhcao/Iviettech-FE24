import React from "react";
import ListTodo from "../ListTodo/ListTodo";
import "./style.css";

const Body = () => {

  return (
    <div className="todo-body">
      <ListTodo title="111111"/>
      <ListTodo title="22222"/>
      <ListTodo title="333333"/>
      <ListTodo title="333333"/>
    </div>
  );
};

export default Body;
