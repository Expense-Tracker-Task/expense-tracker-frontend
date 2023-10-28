import React, { useState } from "react";
import { Button, Card, Modal, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { cardStyle } from "../../../assets/styles";
export function AddTransactionButton() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
