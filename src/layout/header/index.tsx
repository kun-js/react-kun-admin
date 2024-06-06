import React from "react";
import { Layout, theme } from "antd";

const { Header } = Layout;

const MainHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        width: "calc(100vw - 200px)",
        paddingLeft: 20,
        background: colorBgContainer,
      }}
    >
      header
    </Header>
  );
};

export default MainHeader;
