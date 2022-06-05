import React from "react";

const ListTodo = (props) => {
  return (
    <div>
      <div className="list-todo">
        <div className="check">
          <input type="checkbox" />
          <p>{props.title}</p>
        </div>
        <div className="list-icon">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
