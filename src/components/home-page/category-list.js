import React from "react";
import { Card, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { contentStyle } from "../../assets/styles";
import { Content } from "antd/es/layout/layout";

export function CategoryList() {
  const softColors = [
    "#FF6B6B",
    "#FFD271",
    "#5BC0BE",
    "#6489B1",
    "#FFB547",
    "#808000",
    "#9678B6",
  ];

  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <h2>Categories</h2>
      <Row gutter={16}>
        <Row style={{ width: "75%" }}>
          <Card
            style={{
              background: softColors[0],
              marginRight: "5%",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <Col style={{ color: "white" }}>
              <h2 style={{ margin: "unset", fontWeight: 500 }}>Housing Loan</h2>
              <h4 style={{ margin: "unset" }}>$145,000</h4>
            </Col>
          </Card>
          <Card
            style={{
              background: softColors[1],
              marginRight: "5%",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <Col style={{ color: "white" }}>
              <h2 style={{ margin: "unset", fontWeight: 500 }}>Housing Loan</h2>
              <h4 style={{ margin: "unset" }}>$145,000</h4>
            </Col>
          </Card>
          <Card
            style={{
              background: softColors[2],
              marginRight: "5%",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <Col style={{ color: "white" }}>
              <h2 style={{ margin: "unset", fontWeight: 500 }}>Housing Loan</h2>
              <h4 style={{ margin: "unset" }}>$145,000</h4>
            </Col>
          </Card>
        </Row>
        <Card
          style={{
            background: softColors[3],
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
          }}
          hoverable
        >
          <Row align="middle" justify="center">
            <PlusOutlined
              style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
            />
            <h1
              style={{
                marginLeft: "30px",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
              }}
            >
              Add Category
            </h1>
          </Row>
        </Card>
      </Row>
    </Content>
  );
}
