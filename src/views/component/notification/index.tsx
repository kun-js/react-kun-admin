import "./notification.scss";
import React, { useState } from "react";
import { Card, Button, notification, Space, Radio, RadioChangeEvent, Divider } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

type PlacementPropsType = "topRight" | "top" | "topLeft" | "bottom" | "bottomLeft" | "bottomRight" | undefined;

const NotificationComponent: React.FC = () => {
  const [placement, setPlacement] = useState<PlacementPropsType>("topRight");
  const [api, contextHolder] = notification.useNotification();

  const onPlacementChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "通知提醒标题",
      description: "这是一条通知提醒!",
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <div className="notification-component-container">
        <Card className="card-container" title="通知提醒组件" bordered={false}>
          <div style={{ marginBottom: "18px" }}>
            <span style={{ marginRight: "18px" }}>显示位置:</span>
            <Radio.Group onChange={onPlacementChange} value={placement}>
              <Radio value={"top"}>top</Radio>
              <Radio value={"topLeft"}>topLeft</Radio>
              <Radio value={"topRight"}>topRight</Radio>
              <Radio value={"bottom"}>bottom</Radio>
              <Radio value={"bottomLeft"}>bottomLeft</Radio>
              <Radio value={"bottomRight"}>bottomRight</Radio>
            </Radio.Group>
          </div>
          <Divider />
          <div>
            <Space>
              <Button
                type="primary"
                style={{ background: "#52c41a" }}
                onClick={() => openNotificationWithIcon("success")}
              >
                Success
              </Button>
              <Button type="primary" onClick={() => openNotificationWithIcon("info")}>
                Info
              </Button>
              <Button
                type="primary"
                style={{ background: "#faad14" }}
                onClick={() => openNotificationWithIcon("warning")}
              >
                Warning
              </Button>
              <Button
                type="primary"
                style={{ background: "#ff4d4f" }}
                onClick={() => openNotificationWithIcon("error")}
              >
                Error
              </Button>
            </Space>
          </div>
        </Card>
      </div>
    </>
  );
};

export default NotificationComponent;
