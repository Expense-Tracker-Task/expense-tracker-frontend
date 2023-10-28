import React, { useState, useEffect } from "react";
import { Col, Layout } from "antd";
import { AppName } from "../components/home-page/app-name";
import { Navigation } from "../components/home-page/navigation";
import { SearchBar } from "../components/home-page/search-bar";
import { CategoryList } from "../components/home-page/category-list";
import { TransactionList } from "../components/home-page/transaction/transaction-list";
import { UserInfo } from "../components/home-page/user-info";
import { IncomeChart } from "../components/home-page/charts/income-chart";
import { ExpenseChart } from "../components/home-page/charts/expense-chart";
import { AddTransactionButton } from "../components/home-page/transaction/add-transaction-button";
import { siderStyle } from "../assets/styles";
import { backgroundColor } from "../constants/colors";
import { getTransactions } from "../services/transaction-services";
const { Sider } = Layout;

export const HomePage = () => {
  const [transactionList, setTransactionList] = useState(null);

  useEffect(() => {
    getTransactionsMethod();
  }, []);

  return (
    <Layout style={{ background: backgroundColor }}>
      <Sider style={{ ...siderStyle, marginLeft: "3%" }}>
        <Col
          style={{
            marginLeft: "10%",
            textAlign: "-webkit-left",
          }}
        >
          <AppName />
          <Navigation />
        </Col>
      </Sider>

      <Layout style={{ alignSelf: "flex-start" }}>
        <SearchBar />
        <CategoryList />
        <TransactionList transactionList={transactionList} />
      </Layout>

      <Sider
        style={{
          ...siderStyle,
          marginRight: "9%",
          color: backgroundColor,
          backgroundColor: backgroundColor,
        }}
      >
        <Col>
          <UserInfo />
          <IncomeChart transactionList={transactionList} />
          <ExpenseChart transactionList={transactionList} />
          <AddTransactionButton />
        </Col>
      </Sider>
    </Layout>
  );

  async function getTransactionsMethod() {
    let response = await getTransactions();

    if (response.status) {
      setTransactionList(response.data);
    } else {
      // alert(response.message);
    }
  }
};
