import React from "react";
import { Button, Card, Col, Dropdown, Row, Space } from "antd";
import { LineChart } from "@mui/x-charts/LineChart";
import { DownOutlined } from "@ant-design/icons";
import { cardStyle } from "../../assets/styles/card-style";

export function IncomeChart() {
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
