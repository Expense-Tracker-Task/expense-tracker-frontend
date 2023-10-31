import React, { useState, useEffect } from "react";
import { Button, Card, Input, Modal, Row, message } from "antd";
import { contentStyle } from "../../assets/styles";
import { Content } from "antd/es/layout/layout";
import { getCategories, saveCategory } from "../../services/category-services";
import { softColors } from "../../constants/colors";
import { formatMoney } from "../../helpers/formats/currency-format";
import { AppstoreAddOutlined } from "@ant-design/icons";

export function CategoryList({
  searchText,
  selectedCategory,
  setSelectedCategory,
}) {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    getCategoriesMethod();
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [categoryName]);

  if (searchText != "") return;
  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <Row align={"middle"} justify={"space-between"}>
        <h2>Categories</h2>
        <AppstoreAddOutlined
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setOpen(true)}
        />
      </Row>
      <div
        style={{
          display: "-webkit-inline-box",
          overflow: "auto",
          width: "-webkit-fill-available",
        }}
      >
        {categoryList.map((category, index) => (
          <Card
            key={index}
            style={{
              background: category.color,
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
              marginLeft: "8px",
              marginRight: "8px",
              border:
                category.name == selectedCategory ? "2px solid black" : "",
            }}
            onClick={() => setSelectedCategory(category.name)}
            hoverable
          >
            <h1
              style={{
                margin: "unset",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
              }}
            >
              {category.name}
            </h1>
            <h1
              style={{
                display: "block",
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
      </div>
      {modalForAddingCategory()}
    </Content>
  );

  function modalForAddingCategory() {
    return (
      <Modal
        open={open}
        title="Add Category"
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="back" onClick={() => setOpen(false)}>
            Back
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
        <div style={{ marginTop: "24px", marginBottom: "24px" }}>
          <Input
            addonBefore="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
      </Modal>
    );
  }

  async function getCategoriesMethod() {
    let response = await getCategories();

    if (response.status) {
      response.data = sortCategoriesByAmount(response.data);
      response.data = manipulateCategoryParameters(response.data);
      setCategoryList(response.data);
    } else {
      // alert(response.message);
    }
  }

  async function addCategoryMethod() {
    let response = await saveCategory(categoryName);

    if (response.status) {
      message.success("Category has been added successfully");
    } else {
      message.error("Category has not been added");
    }
  }

  function sortCategoriesByAmount(categories) {
    categories.sort((a, b) => b.amount - a.amount);
    return categories;
  }

  function manipulateCategoryParameters(categories) {
    return categories.map((category, index) => {
      category.amount = formatMoney(category.amount);
      category.color = softColors[index % 6];
      return category;
    });
  }

  function handleOk() {
    setLoading(true);
    addCategoryMethod().then(() => {
      getCategoriesMethod();
      setLoading(false);
      setOpen(false);
      setCategoryName("");
    });
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      if (categoryName !== "") {
        handleOk();
      } else {
        alert("Missing Info");
      }
    }
  }
}
