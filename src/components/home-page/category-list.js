import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Row } from "antd";
import { contentStyle } from "../../assets/styles";
import { Content } from "antd/es/layout/layout";
import { getCategories } from "../../services/category-services";
import { softColors } from "../../constants/colors";
import { formatMoney } from "../../helpers/formats/currency-format";

export function CategoryList({
  searchText,
  selectedCategory,
  setSelectedCategory,
}) {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const staticAddCategoryCardContent = {
    name: "Add Category",
    amount: 0,
    color: softColors[4],
  };
  useEffect(() => {
    getCategoriesMethod();
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  if (searchText != "") return;
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
              border:
                category.name == selectedCategory ? "2px solid black" : "",
            }}
            onClick={() => {
              if (category.name !== "Add Category") {
                setSelectedCategory(category.name);
              } else {
                showModal();
              }
            }}
            hoverable
          >
            <h1
              style={{
                margin: category.name == "Add Category" ? "15px" : "unset",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
              }}
            >
              {category.name}
            </h1>
            <h1
              style={{
                display: category.name == "Add Category" ? "none" : "block",
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
      <Modal
        open={open}
        title="Add Category"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Content>
  );

  async function getCategoriesMethod() {
    let response = await getCategories();

    if (response.status) {
      response.data = getFourCategoriesHasMostValue(response.data);
      response.data = manipulateCategoryParameters(response.data);
      response.data.push(staticAddCategoryCardContent);
      setCategoryList(response.data);
    } else {
      // alert(response.message);
    }
  }

  function getFourCategoriesHasMostValue(categories) {
    categories.sort((a, b) => b.amount - a.amount);
    categories = categories.slice(0, 4); // Only show 4 categories
    return categories;
  }

  function manipulateCategoryParameters(categories) {
    return categories.map((category, index) => {
      category.amount = formatMoney(category.amount);
      category.color = softColors[index];
      return category;
    });
  }
}
