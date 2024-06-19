import "./basic-form.scss";
import { Card, Cascader, Col, Form, Input, Row, Select, DatePicker, Checkbox, Space, Button } from "antd";
import React from "react";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}

const BasicForm: React.FC = () => {
  const selectAfter = (
    <Select defaultValue="@qq.com">
      <Option value="@qq.com">@qq.com</Option>
      <Option value="@163.com">@163.com</Option>
      <Option value="@gmail.com">@gmail.com</Option>
    </Select>
  );

  const regionOptions: Option[] = [
    {
      value: "guangdong",
      label: "广东",
      children: [
        {
          value: "shenzhen",
          label: "深圳",
          children: [
            {
              value: "nanshan",
              label: "南山",
            },
            {
              value: "baoan",
              label: "宝安",
            },
          ],
        },
        {
          value: "gaungzhou",
          label: "广州",
          children: [
            {
              value: "panyu",
              label: "番禺",
            },
            {
              value: "tianhe",
              label: "天河",
            },
          ],
        },
      ],
    },
    {
      value: "beijing",
      label: "北京",
      children: [
        {
          value: "dongcheng",
          label: "东城",
        },
        {
          value: "xicheng",
          label: "西城",
        },
        {
          value: "chaoyang",
          label: "朝阳",
        },
      ],
    },
    {
      value: "shanghai",
      label: "上海",
      children: [
        {
          value: "huangpu",
          label: "黄浦",
        },
      ],
    },
  ];

  const languageOptions = [
    { label: "JavaScript", value: "JavaScript" },
    { label: "Java", value: "Java" },
    { label: "C++", value: "C++" },
    { label: "C", value: "C" },
    { label: "Python", value: "Python" },
  ];

  return (
    <>
      <div className="basic-form-container">
        <Card className="card-container" title="基础表单示例" bordered={true}>
          <Form layout="horizontal">
            <Row gutter={[16, 24]}>
              <Col span={8}>
                <Form.Item name="name" label="姓名:">
                  <Input placeholder="请输入你的姓名" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="tel" label="电话:">
                  <Input placeholder="请输入你的联系方式" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="email" label="邮箱:">
                  <Input placeholder="请输入你的邮箱" addonAfter={selectAfter} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="job" label="岗位:">
                  <Select
                    placeholder="请选择你的岗位"
                    options={[
                      { value: "qianduan", label: "前端开发工程师" },
                      { value: "houduan", label: "后端开发工程师" },
                      { value: "ceshi", label: "测试工程师" },
                      { value: "quanzhan", label: "全栈工程师", disabled: true },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="region" label="地区:">
                  <Cascader options={regionOptions} placeholder="请选择你的地区" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="date" label="起止日期:">
                  <RangePicker placeholder={["开始日期", "结束日期"]} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="language" label="语言:">
                  <Checkbox.Group options={languageOptions} defaultValue={["Apple"]} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="remark" label="备注:">
                  <TextArea allowClear />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      提交
                    </Button>
                    <Button htmlType="button">重置</Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default BasicForm;
