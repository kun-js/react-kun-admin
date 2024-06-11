import React from "react";
import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./header.scss";

const { Header } = Layout;

interface MainHeaderProps {
  collapsed: boolean;
  handleToCollapse: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ collapsed, handleToCollapse }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      className="header-container"
      style={{
        width: collapsed ? "calc(100vw - 80px)" : "calc(100vw - 200px)",
        background: colorBgContainer,
      }}
    >
      <Button
        className="collapse-button"
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleToCollapse}
      />
    </Header>
  );
};

export default MainHeader;
