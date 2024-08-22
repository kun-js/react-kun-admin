import "./debounce.scss";
import React from "react";
import { Button, Card, Space, Typography, message } from "antd";

import { useDebouncedCallback, useThrottledCallback } from "use-debounce";
// import { debounce } from "@/utils/debounce";
// import { throttle } from "@/utils/throttle";

const { Text } = Typography;

const Debounce: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const clickEventDebounce = useDebouncedCallback(() => {
    messageApi.success("防抖");
  }, 1000);

  const clickEventThrottle = useThrottledCallback(() => {
    messageApi.success("节流");
  }, 1000);

  return (
    <>
      {contextHolder}
      <div className="debounce-container">
        <Card className="card-container" title="防抖节流功能示例">
          <Space direction="vertical">
            <Text>
              防抖的原理是当持续触发事件后，在一定时间内（例如半秒或一秒）如果没有再次触发事件，则事件处理函数只会执行一次，如果在设定的时间内再次被触发，则重新计算时间间隔，防抖适用于用户停止操作后才执行的场景，如搜索建议、输入框验证等。
            </Text>
            <Button type="primary" onClick={clickEventDebounce}>
              防抖
            </Button>
            <Text>
              节流的原理是即使事件被频繁触发，也能保证在一定间隔内（例如每秒）只执行一次事件处理函数，节流适用于需要限制事件频率的场景，如滚动事件、mousemove事件等。
            </Text>
            <Button type="primary" onClick={clickEventThrottle}>
              节流
            </Button>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default Debounce;
