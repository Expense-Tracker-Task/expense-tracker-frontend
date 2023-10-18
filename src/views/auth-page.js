import { Space } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import { SwitchText } from "../components/auth-page/switch-text";
import { Button } from "../components/auth-page/button";
import { Input } from "../components/auth-page/input";
import { Title } from "../components/auth-page/title";
import { containerStyle, loginContainerStyle } from "../assets/styles";
import { loginService } from "../services/auth/login-service";
import { registerService } from "../services/auth/register-service";

export const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (isLogin) {
      let response = await loginService({ username, password });
      if (response.status !== "success") {
        alert(response.message);
      }
    } else {
      let response = await registerService({
        username,
        email,
        password,
        firstName: "-",
        lastName: "-",
      });
      if (response.status !== "success") {
        alert(response.message);
      }
    }
    window.location.reload();
  };

  return (
    <Space style={containerStyle}>
      <Content style={loginContainerStyle}>
        {Title(isLogin)}
        {Input(username, setUsername, "User Name", isLogin)}
        {Input(email, setEmail, "Email", isLogin)}
        {Input(password, setPassword, "Password", isLogin, "password")}
        {Button(isLogin, handleLogin)}
        {SwitchText(setIsLogin, isLogin)}
      </Content>
    </Space>
  );
};
