import React, { Component } from "react";
import "../../styles/pagination.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  //   handleSetCurrentPage = (currentPage) => {
  //       this.props.handleSetCurrentPage(currentPage)
  //   }

  render() {
    const { currentPage, limit, listTodos, handleSetCurrentPage } = this.props;
    const endPage = listTodos.length / limit;
    return (
      <div className="pagin">
        {currentPage !== 1 && (
          <button onClick={() => handleSetCurrentPage(currentPage - 1)}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
        )}
        <div className="pagin__number">
          {currentPage - 1 > 0 && (
            <span onClick={() => handleSetCurrentPage(currentPage - 1)}>
              {currentPage - 1}
            </span>
          )}
          <span className="btn--active">{currentPage}</span>
          {currentPage < endPage && (
            <span onClick={() => handleSetCurrentPage(currentPage + 1)}>
              {currentPage + 1}
            </span>
          )}
        </div>
        {currentPage < endPage && (
          <button onClick={() => handleSetCurrentPage(currentPage + 1)}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        )}
      </div>
    );
  }
}

export default Pagination;
