import "./description.scss";
import React, { useState } from "react";
import { Card, Descriptions, Divider, Radio, Space } from "antd";
import type { RadioChangeEvent, DescriptionsProps } from "antd";

type DescriptionType = "small" | "middle" | "default";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "UserName",
    children: "Zhou Maomao",
  },
  {
    key: "2",
    label: "Telephone",
    children: "1810000000",
  },
  {
    key: "3",
    label: "Live",
    children: "Hangzhou, Zhejiang",
  },
  {
    key: "4",
    label: "Address",
    span: 2,
    children: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
  },
  {
    key: "5",
    label: "Remark",
    children: "empty",
  },
];

const DescriptionComponent: React.FC = () => {
  const [size, setSize] = useState<DescriptionType>("middle");

  const onSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="description-container">
        <Card className="card-container" title="描述列表组件">
          <div>
            <span style={{ marginRight: "18px" }}>尺寸大小(仅在有边框列表生效):</span>
            <Radio.Group onChange={onSizeChange} value={size}>
              <Radio.Button value={"large"}>大</Radio.Button>
              <Radio.Button value={"middle"}>中</Radio.Button>
              <Radio.Button value={"small"}>小</Radio.Button>
            </Radio.Group>
          </div>
          <Divider />
          <div style={{ marginTop: "18px" }}>
            <Space direction="vertical" size={18}>
              <Descriptions title="水平列表" size={size} items={items} bordered />
              <Descriptions title="垂直列表" layout="vertical" items={items} bordered />
              <Descriptions title="无边框水平列表" items={items} />
              <Descriptions title="无边框垂直列表" layout="vertical" items={items} />
            </Space>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DescriptionComponent;
