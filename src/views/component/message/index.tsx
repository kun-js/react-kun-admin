import "./message.scss";
import React from "react";
import { Card, Button, message, Space } from "antd";

const MessageComponent: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const messageInfo = () => {
    messageApi.info("这是普通的信息!");
  };

  const messageSuccess = () => {
    messageApi.open({
      type: "success",
      content: "这是成功的信息",
    });
  };

  const messageError = () => {
    messageApi.open({
      type: "error",
      content: "这是错误的信息",
    });
  };

  const messageWarning = () => {
    messageApi.open({
      type: "warning",
      content: "这是警告的信息",
    });
  };

  const messageLoading = () => {
    messageApi.open({
      type: "loading",
      content: "加载中...",
      duration: 0,
    });
    setTimeout(messageApi.destroy, 2000);
  };

  return (
    <>
      {contextHolder}
      <div className="message-component-container">
        <Card className="card-container" title="消息提示组件" bordered={false}>
          <Space>
            <Button type="primary" onClick={messageInfo}>
              Info
            </Button>
            <Button style={{ background: "#52c41a" }} type="primary" onClick={messageSuccess}>
              Success
            </Button>
            <Button type="primary" onClick={messageError} danger>
              Error
            </Button>
            <Button style={{ background: "#faad14" }} type="primary" onClick={messageWarning}>
              Warning
            </Button>
            <Button onClick={messageLoading}>Loading</Button>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default MessageComponent;
