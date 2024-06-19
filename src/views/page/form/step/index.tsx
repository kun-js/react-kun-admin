import "./step-form.scss";
import { Card, Col, Form, Input, Row, Steps, InputNumber, Radio, Button, Space, Rate, TimePicker } from "antd";
import type { RadioChangeEvent } from "antd";
import type { TimePickerProps } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const StepForm: React.FC = () => {
  const [currentVal, setCurrentVal] = useState(0);
  const [gender, setGender] = useState("male");

  const onRadioChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };

  const onTimeChange: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(time, timeString);
  };

  const handleToNext = () => {
    setCurrentVal(currentVal + 1);
  };

  const handleToPrev = () => {
    setCurrentVal(currentVal - 1);
  };

  return (
    <>
      <div className="step-form-container">
        <Card className="card-container" title="分布表单示例" bordered={true}>
          <Row>
            <Col span={6} offset={8}>
              <Steps
                current={currentVal}
                items={[
                  {
                    title: "第一步",
                  },
                  {
                    title: "第二步",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "18px" }}>
            <Col span={6} offset={8}>
              <Form layout="horizontal">
                {currentVal === 0 && (
                  <>
                    <Form.Item name="name" label="姓名:">
                      <Input placeholder="请输入你的姓名" />
                    </Form.Item>
                    <Form.Item name="age" label="年龄:">
                      <InputNumber min={1} max={100} defaultValue={20} />
                    </Form.Item>
                    <Form.Item name="gender" label="年龄:">
                      <Radio.Group onChange={onRadioChange} value={gender}>
                        <Radio value={"male"}>男</Radio>
                        <Radio value={"female"}>女</Radio>
                        <Radio value={"unknown"}>不知道</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </>
                )}
                {currentVal === 1 && (
                  <>
                    <Form.Item name="score" label="评分:">
                      <Rate allowHalf defaultValue={2.5} />
                    </Form.Item>
                    <Form.Item name="time" label="时间:">
                      <TimePicker onChange={onTimeChange} defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")} />
                    </Form.Item>
                  </>
                )}
                <Form.Item>
                  <Space>
                    {currentVal === 0 && (
                      <Button type="primary" onClick={handleToNext}>
                        下一步
                      </Button>
                    )}
                    {currentVal === 1 && (
                      <>
                        <Button onClick={handleToPrev}>上一步</Button>
                        <Button type="primary">提交</Button>
                      </>
                    )}
                  </Space>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default StepForm;
