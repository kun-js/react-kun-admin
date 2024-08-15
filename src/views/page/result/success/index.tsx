import "./success.scss";
import React from "react";
import { Button, Result } from "antd";

const SuccessPage: React.FC = () => {
  return (
    <>
      <div className="success-container">
        <Result
          status="success"
          title="云服务器ECS购买成功!"
          subTitle="订单号:2017182818828182881,云服务器配置需要1-5分钟,请稍候。"
          extra={[
            <Button type="primary" key="console">
              查看结果
            </Button>,
            <Button key="buy">再次购买</Button>,
          ]}
        />
      </div>
    </>
  );
};

export default SuccessPage;
