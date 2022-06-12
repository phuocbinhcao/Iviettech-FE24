import React, { Component } from "react";
import "../../styles/main.scss";
import {  toast } from 'react-toastify';


class Main extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  handleDelete = (item) => {
    this.props.deleteTodo(item);
    toast.error("Delete success!")
  };

  onChange = (item) => {
    this.props.onChange(item);
  }

  changeEditTodo =(item) => {
    // console.log(item.todos);
  }

  render() {
    let { listTodos } = this.props;
    return (
      <div className="main">
        <div className="body">
        {listTodos.map((item) => {
          return (
            <div className="main__item" key={item.id}>
              <div className="main__item--todo">
                <input type="checkbox" 
                  defaultChecked={item.status}
                  onClick = {()=> this.onChange(item)}
                />
                <p className={`${item.status ? "text-decoration-line-through" : "text-black"}`}>{item.todos}</p>
              </div>
              <div className="main__item--Icon">
                <span 
                className={`${item.status ? "d-none" : "text-black"}`}
                onClick={()=>this.changeEditTodo(item)}
                ><i className="fa-solid fa-pen-to-square"></i></span>
                <span onClick={() => this.handleDelete(item)}><i className="fa-solid fa-trash-can"></i></span>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default Main;
