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

  const categoryList = [
    {
      name: "Housing Loan",
      amount: 145000,
      color: softColors[0],
    },
    {
      name: "Housing Loan",
      amount: 145000,
      color: softColors[1],
    },
    {
      name: "Housing Loan",
      amount: 145000,
      color: softColors[2],
    },
    {
      name: "Others",
      amount: 145000,
      color: softColors[3],
    },
    {
      name: "Add Category",
      amount: 145000,
      color: softColors[4],
    },
  ];

  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <h2>Categories</h2>
      <Row align="middle" justify="space-between">
        {categoryList.map((category) => (
          <Card
            style={{
              background: category.color,
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <h1
              style={{
                margin:
                  category.name == "Others" || category.name == "Add Category"
                    ? "15px"
                    : "unset",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
              }}
            >
              {category.name}
            </h1>
            <h1
              style={{
                display:
                  category.name == "Others" || category.name == "Add Category"
                    ? "none"
                    : "block",
                margin: "unset",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
              }}
            >
              {category.amount}
            </h1>
          </Card>
        ))}
      </Row>
    </Content>
  );
}
