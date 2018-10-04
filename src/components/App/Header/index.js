import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./index.css";

export default class index extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <header className="header">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="Top">
            <Link to="/top">Top</Link>
          </Menu.Item>
        </Menu>
      </header>
    );
  }
}
