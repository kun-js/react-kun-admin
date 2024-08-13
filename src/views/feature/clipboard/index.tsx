import "./clipboard.scss";
import React, { useState } from "react";
import { Button, Card, Input, Space, message } from "antd";
import { CopyOutlined, SnippetsOutlined } from "@ant-design/icons";

const WaterMark: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [copyText, setCopyText] = useState("");
  const [pasteText, setPasteText] = useState("");

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setCopyText(e.target.value);
  };

  const handleToCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      messageApi.success("已复制到剪贴板!");
    } catch (err) {
      messageApi.error("复制失败");
    }
  };

  const handleToPaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPasteText(text);
      messageApi.success("粘贴成功!");
    } catch (err) {
      messageApi.error("粘贴错误");
    }
  };

  return (
    <>
      {contextHolder}
      <div className="clipboard-container">
        <Card className="card-container" title="剪贴板功能示例">
          <Space direction="vertical">
            <div>
              <Input
                className="copy-input"
                placeholder="输入内容以复制"
                prefix={<CopyOutlined style={{ color: "rgba(0,0,0,.40)" }} />}
                value={copyText}
                onChange={onChange}
              />
              <Button className="action-button" type="primary" onClick={handleToCopy}>
                复制文本
              </Button>
            </div>
            <div>
              <Input
                className="paste-input"
                placeholder="点击右侧按钮以粘贴"
                prefix={<SnippetsOutlined style={{ color: "rgba(0,0,0,.40)" }} />}
                value={pasteText}
              />
              <Button className="action-button" type="primary" onClick={handleToPaste}>
                粘贴文本
              </Button>
            </div>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default WaterMark;
