import React, { Component } from "react";
import Layout2 from "./Layout2";

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <Layout2 title={this.props.title} />
      </div>
    );
  }
}

export default Layout1;
