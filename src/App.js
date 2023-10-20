import { Space } from "antd";
import "./App.css";
import { HomePage } from "./views/home-page";
import { Authentication } from "./views/auth-page";
import { getCookie } from "./helpers/cookie_helper";

function App() {
  let isTokenNull =
    getCookie("access_token") === null ||
    getCookie("access_token") === undefined;
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        height: "100%",
      }}
      size={[0, 48]}
    >
      {isTokenNull ? <Authentication /> : <HomePage />}
    </Space>
  );
}

export default App;
