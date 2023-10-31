import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Input,
  Modal,
  Radio,
  Row,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { cardStyle } from "../../../assets/styles";
import { getCookie } from "../../../helpers/cookie_helper";
import { getCategories } from "../../../services/category-services";
import { saveTransaction } from "../../../services/transaction-services";
export function AddTransactionButton(props) {
  const { getTransactionsMethod } = props;
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);
  const [selectedDate, setSelectedDate] = useState({ label: "", value: "" });
  const [isExpense, setIsExpense] = useState(false);
  const [description, setDescription] = useState("");
  const [userId] = useState(getCookie("user_id"));
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    getCategoriesMethod();
  }, []);

  return (
    <>
      <Card
        style={{ ...cardStyle, marginTop: "50px", background: "#FF6B6B" }}
        onClick={showModal}
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
      <Modal
        open={open}
        title="Add Transaction"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
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
        <Col>
          <div id="spacer" style={{ margin: "30px" }}></div>
          <Input
            addonBefore="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div id="spacer" style={{ margin: "20px" }}></div>
          <Input
            addonBefore="Amount"
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          <div id="spacer" style={{ margin: "20px" }}></div>
          <Input
            addonBefore="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div id="spacer" style={{ margin: "20px" }}></div>
          <DatePicker
            value={selectedDate.label}
            onChange={(date) => {
              const _date = new Date(date);
              const isoString = _date.toISOString();
              setSelectedDate({ label: date, value: isoString });
            }}
            placeholder="Select Date"
            style={{
              width: "100%",
            }}
          />
          <div id="spacer" style={{ margin: "20px" }}></div>
          <Select
            placeholder="Select Category"
            value={selectedCategoryId}
            onChange={setSelectedCategoryId}
            style={{
              width: "100%",
            }}
            options={categories.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
          />
          <div id="spacer" style={{ margin: "20px" }}></div>
          <Radio.Group
            value={isExpense}
            onChange={(e) => setIsExpense(e.target.value)}
          >
            <Radio.Button value={true}>Expense</Radio.Button>
            <Radio.Button value={false}>Income</Radio.Button>
          </Radio.Group>
        </Col>
      </Modal>
    </>
  );

  async function getCategoriesMethod() {
    let response = await getCategories();

    if (response.status) {
      response.data = response.data.sort((a, b) => a.name - b.name);
      setCategories(response.data);
    } else {
      // alert(response.message);
    }
  }

  function resetFormValues() {
    setName("");
    setAmount(null);
    setSelectedDate("");
    setIsExpense(false);
    setDescription("");
    setSelectedCategoryId(null);
  }

  function showModal() {
    resetFormValues();
    setOpen(true);
  }

  async function handleOk() {
    setLoading(true);
    let response = await saveTransaction(
      name,
      amount,
      description,
      selectedDate.value,
      userId,
      selectedCategoryId,
      isExpense
    );

    if (response.status) {
      setLoading(false);
      setOpen(false);
      getTransactionsMethod();
    } else {
      setLoading(false);
      alert("Please insert all fields");
    }
  }

  function handleCancel() {
    setOpen(false);
  }
}
