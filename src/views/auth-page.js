import { Space } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { SwitchText } from "../components/auth-page/switch-text";
import { Button } from "../components/auth-page/button";
import { Input } from "../components/auth-page/input";
import { Title } from "../components/auth-page/title";
import { containerStyle, loginContainerStyle } from "../assets/styles";
import { loginService, registerService } from "../services/auth-services";

export const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if(username !==  "" && password !== ""){
        handleLogin();
      }else{
        alert("Missing Info")
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [username, password]);

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

  async function handleLogin() {
    console.log({ username, password });
    if (isLogin) {
      let response = await loginService({ username, password });
      if (response.status) {
        window.location.reload();
      } else {
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
      if (response.status) {
        window.location.reload();
      } else {
        alert(response.message);
      }
    }
  }
};
