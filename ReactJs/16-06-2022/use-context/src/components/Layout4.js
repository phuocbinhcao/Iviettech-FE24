import React, { Component } from "react";
import { CommonContext } from "../contexts";

class Layout4 extends Component {
  render() {
    return (
      <div>
        <p>{this.context.name}</p>
        <button onClick={this.context.handleOnClick}>Click me</button>
      </div>
    );
  }
}

export default Layout4;

Layout4.contextType = CommonContext;
