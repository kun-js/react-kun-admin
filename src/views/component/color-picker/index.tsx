import "./colorpicker.scss";
import React, { useState } from "react";
import { Card, ColorPicker, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";

type ColorPickerType = "small" | "middle" | "large";

const ColorPickerComponent: React.FC = () => {
  const [size, setSize] = useState<ColorPickerType>("middle");

  const onSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="color-picker-container">
        <Card className="card-container" title="取色器组件" bordered={false}>
          <Space direction="vertical">
            <div>
              <span style={{ marginRight: "18px" }}>尺寸大小:</span>
              <Radio.Group onChange={onSizeChange} value={size}>
                <Radio value={"large"}>large</Radio>
                <Radio value={"middle"}>middle</Radio>
                <Radio value={"small"}>small</Radio>
              </Radio.Group>
            </div>
          </Space>
          <div style={{ marginTop: "38px" }}>
            <ColorPicker defaultValue="#1677ff" size={size} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default ColorPickerComponent;
