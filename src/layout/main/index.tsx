import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import useDarkModeStore from "@/store/dark";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const { Content } = Layout;

interface MainContentProps {
  showFooter: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ showFooter }) => {
  const { isDarkMode } = useDarkModeStore();
  const [contentHeight, setContentHeight] = useState<string>("calc(100vh - 48px)");

  useEffect(() => {
    setContentHeight(showFooter ? "calc(100vh - 118px)" : "calc(100vh - 48px)");
  }, [showFooter]);

  return (
    <Content>
      <OverlayScrollbarsComponent
        element="div"
        options={{
          scrollbars: {
            theme: isDarkMode ? "os-theme-light" : "os-theme-dark",
            autoHide: "scroll",
            autoHideDelay: 800,
          },
        }}
        defer
      >
        <div
          style={{
            width: "100%",
            height: contentHeight,
          }}
        >
          <Outlet />
        </div>
      </OverlayScrollbarsComponent>
    </Content>
  );
};

export default MainContent;
