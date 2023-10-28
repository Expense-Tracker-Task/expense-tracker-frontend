import React, { useState, useEffect } from "react";
import { Col, Layout } from "antd";
import { AppName } from "../components/home-page/app-name";
import { Navigation } from "../components/home-page/navigation";
import { SearchBar } from "../components/home-page/search-bar";
import { CategoryList } from "../components/home-page/category-list";
import { TransactionList } from "../components/home-page/transaction/transaction-list";
import { UserInfo } from "../components/home-page/user-info";
import { AddTransactionButton } from "../components/home-page/transaction/add-transaction-button";
import { siderStyle } from "../assets/styles";
import { backgroundColor } from "../constants/colors";
import { getTransactions } from "../services/transaction-services";
import { CustomLineChart } from "../components/home-page/custom-line-chart";
const { Sider } = Layout;

export const HomePage = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [expenseTransactionList, setExpenseTransactionList] = useState([]);
  const [incomeTransactionList, setIncomeTransactionList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
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
        <SearchBar setSearchText={setSearchText} />
        <CategoryList
          searchText={searchText}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <TransactionList
          searchText={searchText}
          transactionList={transactionList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
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
          <CustomLineChart
            name={"Expense"}
            transactionList={expenseTransactionList}
          />
          <CustomLineChart
            name={"Income"}
            transactionList={incomeTransactionList}
          />
          <AddTransactionButton />
        </Col>
      </Sider>
    </Layout>
  );

  async function getTransactionsMethod() {
    let response = await getTransactions();

    if (response.status) {
      setTransactionList(response.data);
      setExpenseTransactionList(response.data.filter((e) => e.expense == true));
      setIncomeTransactionList(response.data.filter((e) => e.expense == false));
    } else {
      // alert(response.message);
    }
  }
};
