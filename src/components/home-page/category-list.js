import React, { useState, useEffect } from "react";
import { Card, Row } from "antd";
import { contentStyle } from "../../assets/styles";
import { Content } from "antd/es/layout/layout";
import { getCategories } from "../../services/category-services";
import { softColors } from "../../constants/colors";
import { formatMoney } from "../../helpers/formats/currency-format";

export function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const staticAddCategoryCardContent = {
    name: "Add Category",
    amount: 0,
    color: softColors[4],
  };
  useEffect(() => {
    getCategoriesMethod();
  }, []);

  async function getCategoriesMethod() {
    let response = await getCategories();

    if (response.status) {
      response.data = response.data.slice(0, 4); // Only show 4 categories
      response.data.map((category, index) => {
        category.amount = formatMoney(category.amount);
        category.color = softColors[index];
      });
      response.data.push(staticAddCategoryCardContent);
      setCategoryList(response.data);
    } else {
      // alert(response.message);
    }
  }
  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <h2>Categories</h2>
      <Row align="middle" justify="space-between">
        {categoryList.map((category, index) => (
          <Card
            key={index}
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
