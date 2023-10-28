import React, { useState, useEffect } from "react";
import { Button, Card, Col, Dropdown, Row, Space } from "antd";
import { LineChart } from "@mui/x-charts/LineChart";
import { DownOutlined } from "@ant-design/icons";
import { cardStyle } from "../../assets/styles";
import { formatMoney } from "../../helpers/formats/currency-format";
import { returnDayNumber } from "../../helpers/formats/date-format";

export const CustomLineChart = ({ name, transactionList }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("This Month");
  const [xAxis, setXAxis] = useState([]);
  const [series, setSeries] = useState([]);
  const formattedTotalAmount = formatMoney(totalAmount);
  const menuProps = {
    items: [
      {
        label: menuComponent("This Month"),
      },
    ],
  };

  useEffect(() => {
    calculcateTotalAmount(selectedTimePeriod);
    setXAxisAndSeries(selectedTimePeriod);
  }, [transactionList]);

  return (
    <Card style={{ ...cardStyle, marginTop: "50px" }} hoverable>
      <Row align="middle" justify="space-between">
        <Col style={{ marginLeft: "10%" }}>
          <h1 style={{ margin: "unset" }}>{name}</h1>
          <h4 style={{ margin: "unset" }}>{formattedTotalAmount}</h4>
        </Col>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              {selectedTimePeriod}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Row>
      <LineChart
        xAxis={[{ data: xAxis.length == 0 ? [1, 2] : xAxis }]}
        series={[{ data: series.length == 0 ? [1, 2] : series }]}
        width={300}
        height={200}
      />
    </Card>
  );

  function calculcateTotalAmount(_selectedPeriodTime) {
    let _totalAmount = 0;
    if (_selectedPeriodTime == "This Month") {
      transactionList = getThisMonthTransactions(transactionList);
    }
    for (let i = 0; i < transactionList.length; i++) {
      _totalAmount += transactionList[i].amount;
    }
    setTotalAmount(_totalAmount);
  }

  function menuComponent(name) {
    return (
      <div
        onClick={() => {
          setSelectedTimePeriod(name);
          setXAxisAndSeries(name);
          calculcateTotalAmount(name);
        }}
      >
        {name}
      </div>
    );
  }

  function setXAxisAndSeries(_selectedPeriodTime) {
    setXAxis([]);
    setSeries([]);
    transactionList.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (_selectedPeriodTime == "This Month") {
      let transactionsForThisMonth = getThisMonthTransactions(transactionList);
      iterateInTransactionAndSet(transactionsForThisMonth);
    }
  }

  function iterateInTransactionAndSet(transactions) {
    for (let i = 0; i < transactions.length; i++) {
      let dayNumber = returnDayNumber(transactions[i].date);
      let amount = transactions[i].amount;
      setXAxis((xAxis) => [...xAxis, dayNumber]);
      setSeries((series) => [...series, amount]);
    }
    console.log({ xAxis, series });
  }

  function getThisMonthTransactions(transactionList) {
    const currentDate = new Date();
    return transactionList.filter(
      (e) => new Date(e.date).getMonth() === currentDate.getMonth()
    );
  }

  // function getThisYearTransactions(transactionList) {
  //   const currentDate = new Date();
  //   return transactionList.filter(
  //     (e) => new Date(e.date).getFullYear() === currentDate.getFullYear()
  //   );
  // }
};
