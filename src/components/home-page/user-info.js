import React from "react";
import { Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { cardStyle } from "../../assets/styles";
import { getCookie } from "../../helpers/cookie_helper";
import { formatMoney } from "../../helpers/formats/currency-format";

export function UserInfo() {
  const userName = getCookie("username");
  const currentBalance = getCookie("current_balance") ?? 145000;
  const formattedCurrentBalance = formatMoney(currentBalance);
  return (
    <Card style={cardStyle} hoverable>
      <Col style={{ textAlignLast: "center" }}>
        <Row align="middle" justify="center">
          <UserOutlined style={{ fontSize: "30px" }} />
        </Row>
        <h4 style={{ margin: "unset", marginTop: "5px" }}>
          Welcome, {userName}
        </h4>
        <Row align="middle" justify="center">
          <h4
            style={{ margin: "unset", marginTop: "5px", fontWeight: "lighter" }}
          >
            Current Wallet Balance:
          </h4>
          <h4 style={{ margin: "unset", marginTop: "5px", marginLeft: "5px" }}>
            {formattedCurrentBalance}
          </h4>
        </Row>
      </Col>
    </Card>
  );
}
