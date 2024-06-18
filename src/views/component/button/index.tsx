import "./button.scss";
import React, { useState } from "react";
import { Card, Button, Radio, Space } from "antd";
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";

type ButtonType = "default" | "link" | "text" | "primary" | "dashed" | undefined;
type ButtonSize = "small" | "middle" | "large";
type ButtonShape = "default" | "circle" | "round";

const ButtonComponent: React.FC = () => {
  const [type, setType] = useState<ButtonType>("default");
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
              <Radio.Group onChange={onTypeChange} value={type}>
                <Radio value={"default"}>default</Radio>
                <Radio value={"primary"}>primary</Radio>
                <Radio value={"dashed"}>dashed</Radio>
                <Radio value={"link"}>link</Radio>
                <Radio value={"text"}>text</Radio>
              </Radio.Group>
            </div>
            <div>
              <Radio.Group onChange={onSizeChange} value={size}>
                <Radio value={"large"}>large</Radio>
                <Radio value={"middle"}>middle</Radio>
                <Radio value={"small"}>small</Radio>
              </Radio.Group>
            </div>
            <div>
              <Radio.Group onChange={onShapeChange} value={shape}>
                <Radio value={"default"}>default</Radio>
                <Radio value={"circle"}>circle</Radio>
                <Radio value={"round"}>round</Radio>
              </Radio.Group>
            </div>
          </Space>
          <div style={{ marginTop: "38px" }}>
            <Space>
              <Button type={type} size={size} shape={shape}>
                {shape === "circle" ? (
                  <SearchOutlined />
                ) : (
                  <>
                    <SearchOutlined />
                    Button
                  </>
                )}
              </Button>
              <Button type={type} size={size} shape={shape}>
                {shape === "circle" ? (
                  <DownloadOutlined />
                ) : (
                  <>
                    <DownloadOutlined />
                    Button
                  </>
                )}
              </Button>
              <Button type={type} size={size} shape={shape}>
                {shape === "circle" ? (
                  <PoweroffOutlined />
                ) : (
                  <>
                    <PoweroffOutlined />
                    Button
                  </>
                )}
              </Button>
            </Space>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ButtonComponent;
