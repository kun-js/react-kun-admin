import "./watermark.scss";
import React from "react";
import { Card, Button, Space } from "antd";
import useWatermarkStore from "@/store/watermark";

const WaterMark: React.FC = () => {
  const { watermarkVisible, setWatermarkVisible } = useWatermarkStore();

  const toggleWatermark = () => {
    setWatermarkVisible(!watermarkVisible);
  };

  return (
    <>
      <div className="watermark-container">
        <Card title="水印功能示例" bordered={false} style={{ width: "100%", height: "100%" }}>
          <Space>
            <Button type="primary" onClick={toggleWatermark} disabled={watermarkVisible}>
              显示水印
            </Button>
            <Button type="default" onClick={toggleWatermark} disabled={!watermarkVisible}>
              隐藏水印
            </Button>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default WaterMark;
