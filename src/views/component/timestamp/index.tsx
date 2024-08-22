import "./timestamp.scss";
import React, { useEffect, useState } from "react";
import { Card, Divider, Space, Typography } from "antd";
import { format } from "timeago.js";

const { Text } = Typography;

const Timestamp: React.FC = () => {
  const [initialTime] = useState<string>(new Date().toLocaleString());
  const [enterTime] = useState<number>(Date.now());
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());
  const [diffTime, setDiffTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  const timeChange = () => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
      setDiffTime(new Date(currentTime).getTime() - enterTime);
    }, 1000);
  };

  const getTime = () => {
    setTime(Date.now() - diffTime);
  };

  useEffect(() => {
    timeChange();
    getTime();
  }, []);

  return (
    <>
      <div className="timestamp-container">
        <Card className="card-container" title="相对时间组件">
          <Space direction="vertical">
            <Text strong>基础示例</Text>
            {format(Date.now() - 7620000, "zh_CN")}
            {format(Date.now() - 874350000, "zh_CN")}
            {format(Date.now() - 915420000000, "zh_CN")}
          </Space>
          <Divider />
          <Space direction="vertical">
            <Text strong>定时更新</Text>
            <div>进入页面的时间：{initialTime}</div>
            <div>实时时间：{currentTime}</div>
            <div>相对时间：{format(time, "zh_CN")}</div>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default Timestamp;
