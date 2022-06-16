import React, { Component } from "react";
import Layout1 from "./components/Layout1";
import { CommonContext } from "./contexts";

class Context extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hello world",
    };
  }
  handleOnClick = () => {
    this.setState({
      name: "Hello " + Math.floor(Math.random() * 1001),
    });
  };
  render() {
    return (
      <div>
        <CommonContext.Provider
          value={{
            ...this.state,
            handleOnClick: this.handleOnClick,
          }}
        >
          <Layout1 title="layout 1" />
        </CommonContext.Provider>
      </div>
    );
  }
}

export default Context;
