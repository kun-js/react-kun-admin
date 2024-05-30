import React from "react";
import { theme } from "antd";

const MainContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        height: "calc(100vh - 104px)",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      content
    </div>
  );
};

export default MainContent;
