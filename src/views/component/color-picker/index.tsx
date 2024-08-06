import "./colorpicker.scss";
import React, { useState } from "react";
import { Card, ColorPicker, Divider, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";

type ColorPickerType = "small" | "middle" | "large";

const ColorPickerComponent: React.FC = () => {
  const [size, setSize] = useState<ColorPickerType>("middle");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(true);

  const onSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const onDisabledChange = (e: RadioChangeEvent) => {
    setDisabled(e.target.value);
  };

  const onShowTextChange = (e: RadioChangeEvent) => {
    setShowText(e.target.value);
  };

  return (
    <>
      <div className="color-picker-container">
        <Card className="card-container" title="取色器组件" bordered={false}>
          <Space direction="vertical">
            <div>
              <span style={{ marginRight: "18px" }}>尺寸大小:</span>
              <Radio.Group onChange={onSizeChange} value={size}>
                <Radio value={"large"}>大</Radio>
                <Radio value={"middle"}>中</Radio>
                <Radio value={"small"}>小</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否禁用:</span>
              <Radio.Group onChange={onDisabledChange} value={disabled}>
                <Radio value={false}>否</Radio>
                <Radio value={true}>是</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否显示颜色值:</span>
              <Radio.Group onChange={onShowTextChange} value={showText}>
                <Radio value={false}>否</Radio>
                <Radio value={true}>是</Radio>
              </Radio.Group>
            </div>
          </Space>
          <Divider />
          <div style={{ marginTop: "18px" }}>
            <ColorPicker defaultValue="#1677ff" size={size} disabled={disabled} showText={showText} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default ColorPickerComponent;
