import "./tag.scss";
import React, { useState } from "react";
import { Card, Divider, Radio, Space, Tag, Flex } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";

const TagComponent: React.FC = () => {
  const [border, setBorder] = useState(false);
  const [icon, setIcon] = useState(true);
  const [closeIcon, setCloseIcon] = useState(false);

  const onBorderChange = (e: RadioChangeEvent) => {
    setBorder(e.target.value);
  };
  const onIconChange = (e: RadioChangeEvent) => {
    setIcon(e.target.value);
  };
  const onCloseIconChange = (e: RadioChangeEvent) => {
    setCloseIcon(e.target.value);
  };

  return (
    <>
      <div className="tag-container">
        <Card className="card-container" title="标签组件" bordered={false}>
          <Space direction="vertical">
            <div>
              <span style={{ marginRight: "18px" }}>边框类型:</span>
              <Radio.Group onChange={onBorderChange} value={border}>
                <Radio value={false}>无边框</Radio>
                <Radio value={true}>有边框</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>设置图标:</span>
              <Radio.Group onChange={onIconChange} value={icon}>
                <Radio value={false}>隐藏</Radio>
                <Radio value={true}>显示</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>关闭按钮:</span>
              <Radio.Group onChange={onCloseIconChange} value={closeIcon}>
                <Radio value={false}>隐藏</Radio>
                <Radio value={true}>显示</Radio>
              </Radio.Group>
            </div>
          </Space>
          <Divider />
          <div style={{ marginTop: "38px" }}>
            <Flex gap="4px 0" wrap>
              <Tag closeIcon={closeIcon} bordered={border} icon={icon && <CheckCircleOutlined />} color="success">
                success
              </Tag>
              <Tag closeIcon={closeIcon} bordered={border} icon={icon && <SyncOutlined spin />} color="processing">
                processing
              </Tag>
              <Tag closeIcon={closeIcon} bordered={border} icon={icon && <CloseCircleOutlined />} color="error">
                error
              </Tag>
              <Tag closeIcon={closeIcon} bordered={border} icon={icon && <ExclamationCircleOutlined />} color="warning">
                warning
              </Tag>
              <Tag closeIcon={closeIcon} bordered={border} icon={icon && <ClockCircleOutlined />} color="default">
                waiting
              </Tag>
              <Tag closeIcon={closeIcon} bordered={border} icon={icon && <MinusCircleOutlined />} color="default">
                stop
              </Tag>
            </Flex>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TagComponent;
