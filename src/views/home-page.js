import React from "react";
import { Card, Col, Collapse, Layout, Row, Space } from "antd";
import Search from "antd/es/input/Search";

const { Sider, Content } = Layout;
const { Meta } = Card;
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
  paddingTop: "2.5%",
  textAlign: "center",
  color: textColor,
  backgroundColor: backgroundColor,
};

export const HomePage = () => {
  return (
    <Layout>
      <Sider style={{ ...siderStyle, marginLeft: "3%" }}>
        <Col
          style={{
            marginLeft: "10%",
            textAlign: "-webkit-left",
          }}
        >
          {appNameMethod()}
          {navigationMethod()}
        </Col>
      </Sider>

      <Layout>
        <Content style={{ ...contentStyle, paddingTop: "6%" }}>
          <Search placeholder="input search loading default" loading />
        </Content>
        <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
          {categoriesMethod()}
        </Content>
        <Content style={{ ...contentStyle, textAlignLast: "justify" }}>
          {transactionsMethod()}
        </Content>
      </Layout>
      <Sider
        style={{
          ...siderStyle,
          marginTop: "2%",
          marginRight: "4%",
          color: backgroundColor,
          backgroundColor: backgroundColor,
        }}
      >
        <Col>{userInfoMethod()}</Col>
      </Sider>
    </Layout>
  );
};

function userInfoMethod() {
  const style = {
    height: "300px",
    width: "100%",
    backgroundColor: "white",
  };
  return (
    <Card style={style} hoverable>
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}

function transactionsMethod() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <div>{text}</div>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <div>{text}</div>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <div>{text}</div>,
    },
    {
      key: "4",
      label: "This is panel header 1",
      children: <div>{text}</div>,
    },
    {
      key: "5",
      label: "This is panel header 2",
      children: <div>{text}</div>,
    },
    {
      key: "6",
      label: "This is panel header 3",
      children: <div>{text}</div>,
    },
    {
      key: "7",
      label: "This is panel header 1",
      children: <div>{text}</div>,
    },
    {
      key: "8",
      label: "This is panel header 2",
      children: <div>{text}</div>,
    },
    {
      key: "9",
      label: "This is panel header 3",
      children: <div>{text}</div>,
    },
    {
      key: "10",
      label: "This is panel header 1",
      children: <div>{text}</div>,
    },
    {
      key: "11",
      label: "This is panel header 2",
      children: <div>{text}</div>,
    },
    {
      key: "12",
      label: "This is panel header 3",
      children: <div>{text}</div>,
    },
  ];
  return (
    <>
      <h1>Transactions</h1>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={() => {}}
        expandIconPosition={"end"}
        items={items}
      />
    </>
  );
}
function categoriesMethod() {
  return (
    <>
      <h1>Categories</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </>
  );
}
function navigationMethod() {
  const titleStyle = {
    color: "#424242",
  };
  return (
    <div>
      <h4 style={titleStyle}>Home</h4>
      <h4 style={titleStyle}>Categories</h4>
      <h4 style={titleStyle}>Transactions</h4>
    </div>
  );
}
function appNameMethod() {
  const style = {
    color: "#424242",
    fontSize: "30px",
  };
  return <h1 style={style}>Tracer</h1>;
}
