import { Space } from "antd";
import "./App.css";
import { HomePage } from "./views/home-page";

function App() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        height: "100%",
      }}
      size={[0, 48]}
    >
      <HomePage />
    </Space>
  );
}

export default App;
