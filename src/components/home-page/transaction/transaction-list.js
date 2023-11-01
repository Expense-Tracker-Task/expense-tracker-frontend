import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Content } from "antd/es/layout/layout";
import { contentStyle } from "../../../assets/styles";
import { formatDate } from "../../../helpers/formats/date-format";
import { formatMoney } from "../../../helpers/formats/currency-format";
import { CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteTransaction } from "../../../services/transaction-services";
export const TransactionList = ({
  searchText,
  transactionList,
  selectedCategory,
  setSelectedCategory,
  getTransactionsMethod,
}) => {
  const [selectedTransactionName, setSelectedTransactionName] = useState("");

  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <Row align={"middle"} justify={"space-between"}>
        <h2>Transactions</h2>
        {selectedCategory != "" ? (
          <Row align={"middle"}>
            <CloseCircleOutlined
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory("")}
            />
            <p style={{ marginLeft: "5px", fontWeight: "500" }}>
              Filter(selected category): {selectedCategory}
            </p>
          </Row>
        ) : (
          ""
        )}
      </Row>
      {
        <Col>
          {transactionList.map((transaction, index) => {
            if (searchText && !transaction.name.includes(searchText)) return;

            if (
              selectedCategory &&
              selectedCategory !== transaction.category.name
            ) {
              return;
            }

            return transactionComponent(transaction, index);
          })}
        </Col>
      }
    </Content>
  );

  function transactionComponent(transaction, index) {
    const formattedTransactionAmount = formatMoney(transaction.amount);
    const indicator = transaction.expense ? "-" : "+";
    const amountColor = transaction.expense ? "red" : "green";
    return (
      <Card
        style={{ marginTop: "20px", boxShadow: "0 2px 3px rgba(0, 0, 0, 0.2)" }}
        key={index}
        hoverable
      >
        <Col>
          <Row align="middle" justify="space-between">
            <Col style={{ marginLeft: "1%" }}>
              <h2 style={{ margin: "unset", textAlignLast: "start" }}>
                {transaction.name}
              </h2>
              <p style={{ display: "inline-flex" }}>
                {formatDate(transaction.date)}
              </p>
            </Col>
            <Row
              align="middle"
              justify="center"
              onClick={() => setSelectedTransactionName(transaction.name)}
            >
              <h2 style={{ margin: "unset", color: amountColor }}>
                {indicator + formattedTransactionAmount}
              </h2>
              <ExpandMoreIcon style={{ fontSize: "30px" }} />
            </Row>
          </Row>
          {selectedTransactionName === transaction.name && (
            <Col style={{ marginLeft: "1%" }}>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "#424242",
                  margin: "10px 0",
                }}
              ></div>
              <h3 style={{ margin: "unset" }}>Description</h3>
              <Row align={"middle"} justify={"space-between"}>
                <p style={{ textAlignLast: "start" }}>
                  {transaction.description ?? ""}
                </p>
                <DeleteOutlined
                  style={{ fontSize: "20px", color: "red" }}
                  onClick={() => deleteTransactionMethod(transaction.id)}
                />
              </Row>
            </Col>
          )}
        </Col>
      </Card>
    );
  }

  async function deleteTransactionMethod(id) {
    let response = await deleteTransaction(id);

    if (response.status) {
      getTransactionsMethod();
    } else {
      alert("An issue occured once delete transaction");
    }
  }
};
