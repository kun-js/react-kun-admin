import React from "react";
import { Outlet } from "react-router-dom";

const MainContent: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "calc(100vh - 48px)",
      }}
    >
      <Outlet />
    </div>
  );
};

export default MainContent;
