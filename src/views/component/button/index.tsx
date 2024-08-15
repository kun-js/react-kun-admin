import "./button.scss";
import React, { useState } from "react";
import { Card, Button, Divider, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";

type ButtonType = "default" | "link" | "text" | "primary" | "dashed";
type ButtonSize = "small" | "middle" | "large";
type ButtonShape = "default" | "circle" | "round";
type ButtonDanger = true | false;

const ButtonComponent: React.FC = () => {
  const [type, setType] = useState<ButtonType>("primary");
  const [size, setSize] = useState<ButtonSize>("middle");
  const [shape, setShape] = useState<ButtonShape>("default");
  const [danger, setDanger] = useState<ButtonDanger>(false);

  const onTypeChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };
  const onSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  const onShapeChange = (e: RadioChangeEvent) => {
    setShape(e.target.value);
  };
  const onDangerChange = (e: RadioChangeEvent) => {
    setDanger(e.target.value);
  };

  return (
    <>
      <div className="button-container">
        <Card className="card-container" title="按钮组件">
          <Space direction="vertical">
            <div>
              <span style={{ marginRight: "18px" }}>按钮类型:</span>
              <Radio.Group onChange={onTypeChange} value={type}>
                <Radio value={"default"}>默认</Radio>
                <Radio value={"primary"}>主要</Radio>
                <Radio value={"dashed"}>虚线</Radio>
                <Radio value={"link"}>链接</Radio>
                <Radio value={"text"}>文本</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>按钮大小:</span>
              <Radio.Group onChange={onSizeChange} value={size}>
                <Radio value={"large"}>大</Radio>
                <Radio value={"middle"}>中</Radio>
                <Radio value={"small"}>小</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>按钮形状:</span>
              <Radio.Group onChange={onShapeChange} value={shape}>
                <Radio value={"default"}>默认</Radio>
                <Radio value={"circle"}>圆形</Radio>
                <Radio value={"round"}>环形</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否为危险按钮:</span>
              <Radio.Group onChange={onDangerChange} value={danger}>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </div>
          </Space>
          <Divider />
          <div style={{ marginTop: "38px" }}>
            <Space>
              <Button type={type} size={size} shape={shape} danger={danger} icon={<SearchOutlined />}>
                {shape === "circle" ? "" : "Button"}
              </Button>
              <Button type={type} size={size} shape={shape} danger={danger} icon={<DownloadOutlined />}>
                {shape === "circle" ? "" : "Button"}
              </Button>
              <Button type={type} size={size} shape={shape} danger={danger} icon={<PoweroffOutlined />}>
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
