import React, { Component } from "react";
import './style.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer-todo">
        <button>
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div className="footer-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <button>
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    );
  }
}

export default Footer;
