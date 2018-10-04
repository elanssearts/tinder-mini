import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Top from "../Top";
import Header from "./Header";

import { Row, Col } from "antd";

export default class App extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Header />
          <Row>
            <Col span={24}>
              <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/top" component={Top} />
              </main>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
