import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

interface MainContentProps {
  showFooter: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ showFooter }) => {
  const [contentHeight, setContentHeight] = useState("calc(100vh - 48px)");

  useEffect(() => {
    setContentHeight(showFooter ? "calc(100vh - 118px)" : "calc(100vh - 48px)");
  }, [showFooter]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: contentHeight,
      }}
    >
      <Outlet />
    </div>
  );
};

export default MainContent;
