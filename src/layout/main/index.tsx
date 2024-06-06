import React from "react";
import { Link, Outlet } from "react-router-dom";
import { theme } from "antd";

const MainContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        width: "calc(100vw - 240px)",
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
