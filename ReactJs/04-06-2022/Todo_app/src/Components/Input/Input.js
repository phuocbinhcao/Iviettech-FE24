import React from "react";
import "./style.css";

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        name="todoList"
        id="todoList"
        placeholder="Enter to do ..."
      />
    );
  }
}

export default Input;
