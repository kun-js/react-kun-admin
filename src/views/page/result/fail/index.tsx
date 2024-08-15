import "./fail.scss";
import React from "react";
import { Button, Result, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

const FailPage: React.FC = () => {
  return (
    <>
      <div className="fail-container">
        <Result
          status="error"
          title="提交失败"
          subTitle="请在重新提交之前检查并修改以下信息。"
          extra={[
            <Button type="primary" key="console">
              查看结果
            </Button>,
            <Button key="buy">再次购买</Button>,
          ]}
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                您提交的内容存在以下错误：
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" /> 您的帐户已被冻结。{" "}
              <a href="/">立即解冻 &gt;</a>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" /> 您的帐户还没有资格申请。{" "}
              <a href="/">申请解锁 &gt;</a>
            </Paragraph>
          </div>
        </Result>
      </div>
    </>
  );
};

export default FailPage;
