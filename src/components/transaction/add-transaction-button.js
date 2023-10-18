import React from "react";
import { Card, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { cardStyle } from "../../assets/styles/card-style";
export function AddTransactionButton() {
  return (
    <Card
      style={{ ...cardStyle, marginTop: "50px", background: "#FF6B6B" }}
      hoverable
    >
      <Row align="middle" justify="center">
        <PlusOutlined
          style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
        />
        <h1
          style={{
            margin: "unset",
            marginLeft: "30px",
            fontSize: "20px",
            fontWeight: "500",
            color: "white",
          }}
        >
          Add Transaction
        </h1>
      </Row>
    </Card>
  );
}
