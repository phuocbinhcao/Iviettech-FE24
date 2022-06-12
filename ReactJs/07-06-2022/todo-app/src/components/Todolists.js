import React, { Component } from "react";
import Main from "./body/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import '../styles/todolist.scss'
import { Data, LIMIT_TASK_IN_PAGE } from './Data';
import Pagination from '../components/pagination/Pagination'


class Todolists extends Component {
  constructor(){
    super()
    this.state = {
      listTodos: Data,
      currentPage: 1,
    };
    this.handleSetCurrentPage=this.handleSetCurrentPage.bind(this)
  }

  addNewTodo = (Todo) => {
   this.setState({
        listTodos: [Todo,...this.state.listTodos ]
    })
  }
  deleteTodo = (Todo) => {
      let currentTodos = this.state.listTodos
      currentTodos= currentTodos.filter(item=> item.id !== Todo.id)
      this.setState({
          listTodos: currentTodos
      })
  }

  deleteAll = () => {
    this.setState({
      listTodos: []
    })
  }

  onChange = (todo) => {
    let listTodosCopy = this.state.listTodos
     listTodosCopy = listTodosCopy.map((item) =>item.id === todo.id ? { ...item, status: !item.status } : item)
    this.setState({
      listTodos: listTodosCopy,
    });
  };

  editTodos = (todo) => {
    this.setState({
      todos: todo
    })
  }

  getTaskCurrentPage = () => {
    const startIndex = this.state.currentPage*LIMIT_TASK_IN_PAGE - LIMIT_TASK_IN_PAGE;
    return [...this.state.listTodos.slice(startIndex, startIndex+LIMIT_TASK_IN_PAGE)]
  }

  handleSetCurrentPage(page) {
    this.setState({
        currentPage: page
    })
  }

  render() {
    return (
      <div className="todolist">
        <h1>Todolists application</h1>
        <Header addNewTodo={this.addNewTodo}/>
        <Main 
          listTodos={this.getTaskCurrentPage()}
          deleteTodo={this.deleteTodo} 
          onChange={this.onChange}
        />
        <Pagination 
          currentPage = {this.state.currentPage}
          listTodos={this.state.listTodos}
          limit={LIMIT_TASK_IN_PAGE}
          handleSetCurrentPage={this.handleSetCurrentPage}
        />

        <Footer listTodos={this.state.listTodos} deleteAll={this.deleteAll}/>
      </div>
    );
  }
}

export default Todolists;
