import React, { Component } from "react";
import Layout3 from "./Layout3";

class Layout2 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <Layout3 title={this.props.title} />
      </div>
    );
  }
}

export default Layout2;
