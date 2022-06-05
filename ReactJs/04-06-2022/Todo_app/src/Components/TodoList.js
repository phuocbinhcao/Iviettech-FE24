import React from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './style.css'

class TodoList extends React.Component {
    render() {
      return (
            <div className="todoList">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
  }

  export default TodoList;
  