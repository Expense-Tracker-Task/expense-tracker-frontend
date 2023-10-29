import React from "react";
import { Col, Row } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { setCookie } from "../../helpers/cookie_helper";
import { logoutService } from "../../services/auth-services";

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
      {/* 
      <Row align="middle" justify="start">
        <UnorderedListOutlined />
        <h4 style={titleStyle}>Categories</h4>
      </Row>
      <Row align="middle" justify="start">
        <TransactionOutlined />
        <h4 style={titleStyle}>Transactions</h4>
      </Row> */}
      <Row align="middle" justify="start">
        <LogoutOutlined />
        <h4
          style={titleStyle}
          onClick={logoutService}
        >
          Log out
        </h4>
      </Row>
    </Col>
  );
}
