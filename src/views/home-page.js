import React from "react";
import { Button, Card, Col, Dropdown, Layout, Row, Space } from "antd";
import Search from "antd/es/input/Search";
import { LineChart } from "@mui/x-charts/LineChart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  HomeOutlined,
  UnorderedListOutlined,
  TransactionOutlined,
  LogoutOutlined,
  PlusOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
const backgroundColor = "#f7f7f7";
const textColor = "#424242";
const contentStyle = {
  textAlign: "center",
  lineHeight: "50px",
  color: textColor,
  backgroundColor: backgroundColor,
  padding: "0 10%",
};

const siderStyle = {
  paddingTop: "3.5%",
  textAlign: "center",
  color: textColor,
  backgroundColor: backgroundColor,
};

const cardStyle = {
  backgroundColor: "white",
  width: "160%",
  textAlignLast: "start",
};

export const HomePage = () => {
  const [selectedTransactionName, setSelectedTransactionName] =
    React.useState("");
  return (
    <Layout>
      <Sider style={{ ...siderStyle, marginLeft: "3%" }}>
        <Col
          style={{
            marginLeft: "10%",
            textAlign: "-webkit-left",
          }}
        >
          {appNameComponent()}
          {navigationComponent()}
        </Col>
      </Sider>

      <Layout style={{ alignSelf: "flex-start" }}>
        {searchComponent()}
        {categoriesComponent()}
        {transactionsComponent(
          selectedTransactionName,
          setSelectedTransactionName
        )}
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
          {userInfoComponent()}
          {incomeChartComponent()}
          {expenseChartComponent()}
          {addingTransactionComponent()}
        </Col>
      </Sider>
    </Layout>
  );
};

function addingTransactionComponent() {
  return (
    <Card style={{ ...cardStyle, marginTop: "50px" }} hoverable>
      <Row align="middle" justify="center">
        <PlusOutlined style={{ fontSize: "20px", fontWeight: "bold" }} />
        <h1
          style={{
            margin: "unset",
            marginLeft: "30px",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Add Transaction
        </h1>
      </Row>
    </Card>
  );
}
function searchComponent() {
  return (
    <Content style={{ ...contentStyle, paddingTop: "6%" }}>
      <Search placeholder="Search transactions" size="large" />
    </Content>
  );
}
function userInfoComponent() {
  return (
    <Card style={cardStyle} hoverable>
      <Col style={{ textAlignLast: "center" }}>
        <Row align="middle" justify="center">
          <UserOutlined style={{ fontSize: "30px" }} />
        </Row>
        <h4 style={{ margin: "unset", marginTop: "5px" }}>
          Welcome, User Name
        </h4>
        <Row align="middle" justify="center">
          <h4
            style={{ margin: "unset", marginTop: "5px", fontWeight: "lighter" }}
          >
            Current Wallet Balance:
          </h4>
          <h4 style={{ margin: "unset", marginTop: "5px", marginLeft: "5px" }}>
            $145,000
          </h4>
        </Row>
      </Col>
    </Card>
  );
}
function incomeChartComponent() {
  const items = [
    {
      label: "Bu Ay",
      key: "1",
    },
    {
      label: "Bu Yıl",
      key: "2",
    },
  ];
  const menuProps = {
    items,
  };
  return (
    <Card style={{ ...cardStyle, marginTop: "50px" }} hoverable>
      <Row align="middle" justify="space-between">
        <Col style={{ marginLeft: "10%" }}>
          <h1 style={{ margin: "unset" }}>Income</h1>
          <h4 style={{ margin: "unset" }}>$145,000</h4>
        </Col>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Row>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 9, 12] }]}
        series={[
          {
            data: [2, 6, 8, 3, 5.5, 8, 4],
          },
        ]}
        width={300}
        height={200}
      />
    </Card>
  );
}
function expenseChartComponent() {
  const items = [
    {
      label: "Bu Ay",
      key: "1",
    },
    {
      label: "Bu Yıl",
      key: "2",
    },
  ];
  const menuProps = {
    items,
  };
  return (
    <Card style={{ ...cardStyle, marginTop: "50px" }} hoverable>
      <Row align="middle" justify="space-between">
        <Col style={{ marginLeft: "10%" }}>
          <h1 style={{ margin: "unset" }}>Expense</h1>
          <h4 style={{ margin: "unset" }}>$145,000</h4>
        </Col>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Row>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={300}
        height={200}
      />
    </Card>
  );
}
function transactionsComponent(
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
    <Card style={{ marginTop: "20px" }} hoverable>
      <Col>
        <Row align="middle" justify="space-between">
          <Col style={{ marginLeft: "1%" }}>
            <h2 style={{ margin: "unset" }}>Headphones</h2>
            <p>29 Feb 2020</p>
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
        {selectedTransactionName == transaction.name && (
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
function categoriesComponent() {
  const softColors = [
    "#5968A8",
    "#6EBD45",
    "#FF6B6B",
    "#FFD271",
    "#5BC0BE",
    "#B33A3A",
    "#6489B1",
    "#FFB547",
    "#808000",
    "#9678B6",
  ];

  return (
    <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
      <h2>Categories</h2>
      <Row gutter={16}>
        <Row style={{ width: "75%" }}>
          <Card
            style={{
              background: softColors[0],
              marginRight: "5%",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <Col style={{ color: "white" }}>
              <h2 style={{ margin: "unset", fontWeight: 500 }}>Housing Loan</h2>
              <h4 style={{ margin: "unset" }}>$145,000</h4>
            </Col>
          </Card>
          <Card
            style={{
              background: softColors[1],
              marginRight: "5%",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <Col style={{ color: "white" }}>
              <h2 style={{ margin: "unset", fontWeight: 500 }}>Housing Loan</h2>
              <h4 style={{ margin: "unset" }}>$145,000</h4>
            </Col>
          </Card>
          <Card
            style={{
              background: softColors[2],
              marginRight: "5%",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            }}
            hoverable
          >
            <Col style={{ color: "white" }}>
              <h2 style={{ margin: "unset", fontWeight: 500 }}>Housing Loan</h2>
              <h4 style={{ margin: "unset" }}>$145,000</h4>
            </Col>
          </Card>
        </Row>
        <Card
          style={{
            background: softColors[3],
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
          }}
          hoverable
        >
          <Row align="middle" justify="center">
            <PlusOutlined
              style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
            />
            <h1
              style={{
                marginLeft: "30px",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
              }}
            >
              Add Category
            </h1>
          </Row>
        </Card>
      </Row>
    </Content>
  );
}
function navigationComponent() {
  const style = {
    marginTop: "30%",
    textAlignLast: "start",
  };
  const titleStyle = {
    color: "#424242",
    cursor: "pointer",
    marginLeft: "10px",
  };
  return (
    <Col style={style}>
      <Row align="middle" justify="start">
        <HomeOutlined />
        <h4 style={titleStyle}>Home</h4>
      </Row>
      <Row align="middle" justify="start">
        <UnorderedListOutlined />
        <h4 style={titleStyle}>Categories</h4>
      </Row>
      <Row align="middle" justify="start">
        <TransactionOutlined />
        <h4 style={titleStyle}>Transactions</h4>
      </Row>
      <Row align="middle" justify="start">
        <LogoutOutlined />
        <h4 style={titleStyle}>Log out</h4>
      </Row>
    </Col>
  );
}
function appNameComponent() {
  const style = {
    color: "#424242",
    fontSize: "30px",
    margin: "unset",
  };
  return <h1 style={style}>Tracer</h1>;
}
