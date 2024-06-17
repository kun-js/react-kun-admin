import "./detail.scss";
import React from "react";
import { Card, Descriptions, DescriptionsProps } from "antd";

const userInfo: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "用户名",
    children: "张三",
  },
  {
    key: "2",
    label: "手机号",
    children: "12345678910",
  },
  {
    key: "3",
    label: "地址",
    children: "XX省 XX市 XX区 XX街道",
  },
];

const orderInfo: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "订单编号",
    children: "9876543210",
  },
  {
    key: "2",
    label: "订单状态",
    children: "已生效",
  },
  {
    key: "3",
    label: "创建时间",
    children: "2022-10-02 06:11:11",
  },
  {
    key: "4",
    label: "生效时间",
    children: "2018-04-25 21:25:34 ~ 2023-06-26 15:15:15",
  },
  {
    key: "5",
    label: "备注",
    children: "这是一个订单",
  },
];

const Detail: React.FC = () => {
  return (
    <>
      <div className="detail-container">
        <Card className="card-container" title="详情页示例" bordered={true}>
          <Descriptions title="用户信息" bordered items={userInfo} />
          <Descriptions style={{ marginTop: "20px " }} title="订单信息" bordered items={orderInfo} />
        </Card>
      </div>
    </>
  );
};

export default Detail;
