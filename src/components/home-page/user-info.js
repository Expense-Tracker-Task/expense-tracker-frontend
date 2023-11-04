import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { cardStyle } from "../../assets/styles";
import { formatMoney } from "../../helpers/formats/currency-format";
import { getCurrentUser } from "../../services/user-services";

export function UserInfo(props) {
  const { transactionList } = props;
  const [userName, setUsername] = useState("");
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    getUserInfoMethod();
  }, [transactionList]);
  return (
    <Card style={cardStyle} hoverable>
      <Col style={{ textAlignLast: "center" }}>
        <Row align="middle" justify="center">
          <UserOutlined style={{ fontSize: "30px" }} />
        </Row>
        <h4 style={{ margin: "unset", marginTop: "5px" }}>
          Welcome, {userName}
        </h4>
        <Row align="middle" justify="center">
          <h4
            style={{ margin: "unset", marginTop: "5px", fontWeight: "lighter" }}
          >
            Current Wallet Balance:
          </h4>
          <h4 style={{ margin: "unset", marginTop: "5px", marginLeft: "5px" }}>
            {userBalance}
          </h4>
        </Row>
      </Col>
    </Card>
  );

  async function getUserInfoMethod() {
    const currentUser = await getCurrentUser();
    setUsername(currentUser.data.username);
    setUserBalance(formatMoney(currentUser.data.balance));
  }
}
