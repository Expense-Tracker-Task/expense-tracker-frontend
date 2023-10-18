import React from "react";
import { Col, Row } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  TransactionOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export function Navigation() {
  const style = {
    marginTop: "30%",
    textAlignLast: "start",
  };
  const titleStyle = {
    color: "#424242",
    cursor: "pointer",
    marginLeft: "10px",
  };
  return (
    <Col style={style}>
      <Row align="middle" justify="start">
        <HomeOutlined />
        <h4 style={titleStyle}>Home</h4>
      </Row>
      <Row align="middle" justify="start">
        <UnorderedListOutlined />
        <h4 style={titleStyle}>Categories</h4>
      </Row>
      <Row align="middle" justify="start">
        <TransactionOutlined />
        <h4 style={titleStyle}>Transactions</h4>
      </Row>
      <Row align="middle" justify="start">
        <LogoutOutlined />
        <h4 style={titleStyle}>Log out</h4>
      </Row>
    </Col>
  );
}
