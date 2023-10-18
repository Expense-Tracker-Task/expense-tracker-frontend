import React from "react";
import { Card, Col, Row } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Content } from "antd/es/layout/layout";
import { contentStyle } from "../../assets/styles/content-style";

export function TransactionList(
  selectedTransactionName,
  setSelectedTransactionName
) {
  let transactionList = [
    {
      name: "panel1",
      title: "Headphones",
      date: "29 Feb 2020",
      amount: "$145,000",
    },
    {
      name: "panel2",
      title: "Headphones",
      date: "29 Feb 2020",
      amount: "$145,000",
    },
    {
      name: "panel3",
      title: "Headphones",
      date: "29 Feb 2020",
      amount: "$145,000",
    },
    {
      name: "panel4",
      title: "Headphones",
      date: "29 Feb 2020",
      amount: "$145,000",
    },
    {
      name: "panel5",
      title: "Headphones",
      date: "29 Feb 2020",
      amount: "$145,000",
    },
  ];
  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <h2>Transactions</h2>
      <Col>
        {transactionComponent(
          transactionList[0],
          selectedTransactionName,
          setSelectedTransactionName
        )}
        {transactionComponent(
          transactionList[1],
          selectedTransactionName,
          setSelectedTransactionName
        )}
        {transactionComponent(
          transactionList[2],
          selectedTransactionName,
          setSelectedTransactionName
        )}
        {transactionComponent(
          transactionList[3],
          selectedTransactionName,
          setSelectedTransactionName
        )}
        {transactionComponent(
          transactionList[4],
          selectedTransactionName,
          setSelectedTransactionName
        )}
      </Col>
    </Content>
  );
}

function transactionComponent(
  transaction,
  selectedTransactionName,
  setSelectedTransactionName
) {
  return (
    <Card
      style={{ marginTop: "20px", boxShadow: "0 2px 3px rgba(0, 0, 0, 0.2)" }}
      hoverable
    >
      <Col>
        <Row align="middle" justify="space-between">
          <Col style={{ marginLeft: "1%" }}>
            <h2 style={{ margin: "unset" }}>Headphones</h2>
            <p style={{ display: "inline-flex" }}>29 Feb 2020</p>
          </Col>
          <Row
            align="middle"
            justify="center"
            onClick={() => setSelectedTransactionName(transaction.name)}
          >
            <h2 style={{ margin: "unset" }}>$145,000</h2>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </Col>
        )}
      </Col>
    </Card>
  );
}
