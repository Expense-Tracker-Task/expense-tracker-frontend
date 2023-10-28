import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Content } from "antd/es/layout/layout";
import { contentStyle } from "../../../assets/styles";
import { getTransactions } from "../../../services/transaction-services";
import { softColors } from "../../../constants/colors";
import { formatDate } from "../../../helpers/formats/date-format";
import { formatMoney } from "../../../helpers/formats/currency-format";

export const TransactionList = () => {
  const [selectedTransactionName, setSelectedTransactionName] = useState("");
  const [transactionList, setTransactionList] = useState(null);

  useEffect(() => {
    getTransactionsMethod();
  }, []);

  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <h2>Transactions</h2>
      {transactionList != null ? (
        <Col>
          {transactionList.map((transaction, index) =>
            transactionComponent(transaction, index)
          )}
        </Col>
      ) : (
        <p>There are no transactions</p>
      )}
    </Content>
  );

  async function getTransactionsMethod() {
    let response = await getTransactions();

    if (response.status) {
      setTransactionList(response.data);
    } else {
      // alert(response.message);
    }
  }

  function transactionComponent(transaction, index) {
    const formattedTransactionAmount = formatMoney(transaction.amount);
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
              <h2 style={{ margin: "unset" }}>{formattedTransactionAmount}</h2>
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
              <p style={{ textAlignLast: "start" }}>
                {transaction.description ?? ""}
              </p>
            </Col>
          )}
        </Col>
      </Card>
    );
  }
};
