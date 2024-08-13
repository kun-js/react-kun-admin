import "./sensitive.scss";
import React, { useState } from "react";
import { Card, Input, Typography, Flex } from "antd";
import useSensitiveWordFilter from "@/hooks/useSensitiveWordFilter";

const { Text } = Typography;
const { TextArea } = Input;

const Sensitive: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    const filteredValue = useSensitiveWordFilter(value);
    setInputValue(filteredValue); // 更新状态以反映过滤后的文本
  };

  return (
    <>
      <div className="sensitive-container">
        <Card className="card-container" title="敏感词过滤功能示例">
          <Flex vertical gap={32}>
            <Text>过滤词(可自定义):脑残,弱智,白痴</Text>
            <TextArea
              style={{ height: 100, resize: "none" }}
              value={inputValue}
              showCount
              placeholder="请输入敏感词"
              onChange={handleChange}
            />
          </Flex>
        </Card>
      </div>
    </>
  );
};

export default Sensitive;
