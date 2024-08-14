import "./scroll.scss";
import React from "react";
import { Card } from "antd";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const ScrollComponent: React.FC = () => {
  const items = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <>
      <div className="scroll-container">
        <Card className="card-container" title="滚动组件">
          <OverlayScrollbarsComponent defer>
            <div style={{ height: "400px" }}>
              {items.map((item) => (
                <p className="scrollbar-item" key={item}>
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
