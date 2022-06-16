import React, { Component } from "react";
import Layout4 from "./Layout4";

class Layout3 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <Layout4 title={this.props.title} />
      </div>
    );
  }
}

export default Layout3;
