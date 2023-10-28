import React from "react";
import Search from "antd/es/input/Search";
import { Content } from "antd/es/layout/layout";
import { contentStyle } from "../../assets/styles";

export function SearchBar({ setSearchText }) {
  return (
    <Content style={{ ...contentStyle, paddingTop: "6%" }}>
      <Search
        placeholder="Search transactions"
        size="large"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </Content>
  );
}
