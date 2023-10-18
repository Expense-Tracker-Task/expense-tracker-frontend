import React from "react";
import { Col, Layout } from "antd";
import { AppName } from "../components/app-name";
import { Navigation } from "../components/navigation";
import { SearchBar } from "../components/search-bar";
import { CategoryList } from "../components/category-list";
import { TransactionList } from "../components/transaction/transaction-list";
import { UserInfo } from "../components/user-info";
import { IncomeChart } from "../components/charts/income-chart";
import { ExpenseChart } from "../components/charts/expense-chart";
import { AddTransactionButton } from "../components/transaction/add-transaction-button";
import { siderStyle } from "../assets/styles/sider-style";
import { backgroundColor } from "../constants/colors";
const { Sider } = Layout;

export const HomePage = () => {
  const [selectedTransactionName, setSelectedTransactionName] =
    React.useState("");
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
        <TransactionList
          selectedTransactionName={selectedTransactionName}
          setSelectedTransactionName={setSelectedTransactionName}
        />
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
