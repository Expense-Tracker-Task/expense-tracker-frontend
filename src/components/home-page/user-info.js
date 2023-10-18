import React from "react";
import { Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { cardStyle } from "../../assets/styles";

export function UserInfo() {
  return (
    <Card style={cardStyle} hoverable>
      <Col style={{ textAlignLast: "center" }}>
        <Row align="middle" justify="center">
          <UserOutlined style={{ fontSize: "30px" }} />
        </Row>
        <h4 style={{ margin: "unset", marginTop: "5px" }}>
          Welcome, User Name
        </h4>
        <Row align="middle" justify="center">
          <h4
            style={{ margin: "unset", marginTop: "5px", fontWeight: "lighter" }}
          >
            Current Wallet Balance:
          </h4>
          <h4 style={{ margin: "unset", marginTop: "5px", marginLeft: "5px" }}>
            $145,000
          </h4>
        </Row>
      </Col>
    </Card>
  );
}
