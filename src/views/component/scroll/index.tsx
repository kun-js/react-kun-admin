import "./scroll.scss";
import React from "react";
import { Card } from "antd";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import useDarkModeStore from "@/store/dark";

const ScrollComponent: React.FC = () => {
  const { isDarkMode } = useDarkModeStore();
  const items = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <>
      <div className="scroll-container">
        <Card className="card-container" title="滚动组件">
          <OverlayScrollbarsComponent
            element="div"
            options={{
              scrollbars: {
                theme: isDarkMode ? "os-theme-light" : "os-theme-dark",
                autoHide: "move",
                autoHideDelay: 800,
              },
            }}
            defer
          >
            <div style={{ height: "400px" }}>
              {items.map((item) => (
                <p
                  className="scrollbar-item"
                  style={{
                    color: isDarkMode ? "#dcdccf" : "#409eff",
                    background: isDarkMode ? "#383838" : "#ecf5ff",
                  }}
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          </OverlayScrollbarsComponent>
        </Card>
      </div>
    </>
  );
};

export default ScrollComponent;
