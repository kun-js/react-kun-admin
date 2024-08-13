import "./datepicker.scss";
import React, { useState } from "react";
import { Card, DatePicker, Radio, Row, Col, Space, Divider } from "antd";
import type { RadioChangeEvent } from "antd";

const { RangePicker } = DatePicker;

type DatePickerSizeType = "small" | "middle" | "large";
type DatePickerPlacementType = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

const DatePickerComponent: React.FC = () => {
  const [size, setSize] = useState<DatePickerSizeType>("middle");
  const [placement, setPlacement] = useState<DatePickerPlacementType>("bottomRight");
  const [disabled, setDisabled] = useState<boolean>(false);

  const onSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const onPlacementChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onDisabledChange = (e: RadioChangeEvent) => {
    setDisabled(e.target.value);
  };

  return (
    <>
      <div className="date-picker-container">
        <Card className="card-container" title="时间选择器组件">
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
              <span style={{ marginRight: "18px" }}>弹出位置:</span>
              <Radio.Group onChange={onPlacementChange} value={placement}>
                <Radio value={"bottomLeft"}>bottomLeft</Radio>
                <Radio value={"bottomRight"}>bottomRight</Radio>
                <Radio value={"topLeft"}>topLeft</Radio>
                <Radio value={"topRight"}>topRight</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否禁用:</span>
              <Radio.Group onChange={onDisabledChange} value={disabled}>
                <Radio value={false}>否</Radio>
                <Radio value={true}>是</Radio>
              </Radio.Group>
            </div>
          </Space>
          <Divider />
          <Row>
            <Col span={12}>
              <Space direction="vertical">
                <span>基本选择器:</span>
                <DatePicker size={size} placement={placement} picker="date" disabled={disabled} />
                <DatePicker size={size} placement={placement} picker="week" disabled={disabled} />
                <DatePicker size={size} placement={placement} picker="month" disabled={disabled} />
                <DatePicker size={size} placement={placement} picker="quarter" disabled={disabled} />
                <DatePicker size={size} placement={placement} picker="year" disabled={disabled} />
              </Space>
            </Col>
            <Col span={12}>
              <Space direction="vertical">
                <span>范围选择器:</span>
                <RangePicker size={size} placement={placement} disabled={disabled} />
                <RangePicker size={size} placement={placement} showTime disabled={disabled} />
                <RangePicker size={size} placement={placement} picker="week" disabled={disabled} />
                <RangePicker size={size} placement={placement} picker="month" disabled={disabled} />
                <RangePicker size={size} placement={placement} picker="quarter" disabled={disabled} />
                <RangePicker size={size} placement={placement} picker="year" disabled={disabled} />
              </Space>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default DatePickerComponent;
