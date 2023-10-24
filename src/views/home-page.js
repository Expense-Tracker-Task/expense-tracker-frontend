import React from "react";
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
const { Sider } = Layout;

export const HomePage = () => {
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
        <TransactionList />
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
          <IncomeChart />
          <ExpenseChart />
          <AddTransactionButton />
        </Col>
      </Sider>
    </Layout>
  );
};
