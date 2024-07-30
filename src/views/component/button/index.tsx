import "./button.scss";
import React, { useState } from "react";
import { Card, Button, Divider, Radio, Space } from "antd";
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";

type ButtonType = "default" | "link" | "text" | "primary" | "dashed" | undefined;
type ButtonSize = "small" | "middle" | "large";
type ButtonShape = "default" | "circle" | "round";

const ButtonComponent: React.FC = () => {
  const [type, setType] = useState<ButtonType>("primary");
  const [size, setSize] = useState<ButtonSize>("middle");
  const [shape, setShape] = useState<ButtonShape>("default");

  const onTypeChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };
  const onSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  const onShapeChange = (e: RadioChangeEvent) => {
    setShape(e.target.value);
  };

  return (
    <>
      <div className="button-container">
        <Card className="card-container" title="按钮组件" bordered={false}>
          <Space direction="vertical">
            <div>
              <span style={{ marginRight: "18px" }}>按钮类型:</span>
              <Radio.Group onChange={onTypeChange} value={type}>
                <Radio value={"default"}>default</Radio>
                <Radio value={"primary"}>primary</Radio>
                <Radio value={"dashed"}>dashed</Radio>
                <Radio value={"link"}>link</Radio>
                <Radio value={"text"}>text</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>按钮大小:</span>
              <Radio.Group onChange={onSizeChange} value={size}>
                <Radio value={"large"}>large</Radio>
                <Radio value={"middle"}>middle</Radio>
                <Radio value={"small"}>small</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>按钮形状:</span>
              <Radio.Group onChange={onShapeChange} value={shape}>
                <Radio value={"default"}>default</Radio>
                <Radio value={"circle"}>circle</Radio>
                <Radio value={"round"}>round</Radio>
              </Radio.Group>
            </div>
          </Space>
          <Divider />
          <div style={{ marginTop: "38px" }}>
            <Space>
              <Button type={type} size={size} shape={shape} icon={<SearchOutlined />}>
                {shape === "circle" ? "" : "Button"}
              </Button>
              <Button type={type} size={size} shape={shape} icon={<DownloadOutlined />}>
                {shape === "circle" ? "" : "Button"}
              </Button>
              <Button type={type} size={size} shape={shape} icon={<PoweroffOutlined />}>
                {shape === "circle" ? "" : "Button"}
              </Button>
            </Space>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ButtonComponent;
