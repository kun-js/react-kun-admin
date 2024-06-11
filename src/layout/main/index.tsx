import React from "react";
import { Link, Outlet } from "react-router-dom";
import { theme } from "antd";

interface MainContentProps {
  collapsed: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ collapsed }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        width: collapsed ? "calc(100vw - 120px)" : "calc(100vw - 240px)",
        height: "calc(100vh - 104px)",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Link to="/analysis">analysis</Link>
      <Link to="/workbench">workbench</Link>
      <Outlet />
    </div>
  );
};

export default MainContent;
