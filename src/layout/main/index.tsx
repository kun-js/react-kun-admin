import React from "react";
import { Outlet } from "react-router-dom";

interface MainContentProps {
  collapsed: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ collapsed }) => {
  return (
    <div
      style={{
        width: collapsed ? "calc(100vw - 80px)" : "calc(100vw - 200px)",
        height: "calc(100vh - 48px)",
        background: "#f5f5f5",
      }}
    >
      <Outlet />
    </div>
  );
};

export default MainContent;
