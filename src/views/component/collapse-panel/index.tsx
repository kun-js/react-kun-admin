import "./collapsepanel.scss";
import React, { useState } from "react";
import { Card, Collapse, Divider, Radio, Space } from "antd";
import type { RadioChangeEvent, CollapseProps } from "antd";

type CollapsePanelSize = "small" | "middle" | "large";
type CollapsePanelAccordion = true | false;
type CollapsePanelBorder = true | false;
type CollapsePanelGhost = true | false;
type CollapsePanelShowArrow = true | false;
type CollapsePanelExpandIconPosition = "start" | "end";

const CollapsePanel: React.FC = () => {
  const [size, setSize] = useState<CollapsePanelSize>("middle");
  const [accordion, setAccordion] = useState<CollapsePanelAccordion>(false);
  const [border, serBorder] = useState<CollapsePanelBorder>(true);
  const [ghost, serGhost] = useState<CollapsePanelGhost>(false);
  const [showArrow, serShowArrow] = useState<CollapsePanelShowArrow>(true);
  const [expandIconPosition, setExpandIconPosition] = useState<CollapsePanelExpandIconPosition>("start");

  const text = `内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容`;

  const itemsNest: CollapseProps["items"] = [
    {
      key: "1",
      label: "这是签到进去的面板",
      children: <p>{text}</p>,
    },
  ];

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "这是面板1的标题",
      children: <p>{text}</p>,
      showArrow: showArrow,
    },
    {
      key: "2",
      label: "这是面板2的标题",
      children: <p>{text}</p>,
      showArrow: showArrow,
    },
    {
      key: "3",
      label: "这是面板3的标题(嵌套折叠面板)",
      children: <Collapse defaultActiveKey="1" items={itemsNest} />,
      showArrow: showArrow,
    },
  ];

  const onSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  const onAccordionChange = (e: RadioChangeEvent) => {
    setAccordion(e.target.value);
  };
  const onBorderChange = (e: RadioChangeEvent) => {
    serBorder(e.target.value);
  };
  const onGhostChange = (e: RadioChangeEvent) => {
    serGhost(e.target.value);
  };
  const onExpandIconPositionChange = (e: RadioChangeEvent) => {
    setExpandIconPosition(e.target.value);
  };
  const onShowArrowChange = (e: RadioChangeEvent) => {
    serShowArrow(e.target.value);
  };

  return (
    <>
      <div className="collapse-panel-container">
        <Card className="card-container" title="按钮组件" bordered={false}>
          <Space direction="vertical">
            <div>
              <span style={{ marginRight: "18px" }}>尺寸大小:</span>
              <Radio.Group onChange={onSizeChange} value={size}>
                <Radio value={"large"}>large</Radio>
                <Radio value={"middle"}>middle</Radio>
                <Radio value={"small"}>small</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否为手风琴模式(只展开一个面板):</span>
              <Radio.Group onChange={onAccordionChange} value={accordion}>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否设置边框:</span>
              <Radio.Group onChange={onBorderChange} value={border}>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否设置透明(无边框):</span>
              <Radio.Group onChange={onGhostChange} value={ghost}>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>展开图标位置:</span>
              <Radio.Group onChange={onExpandIconPositionChange} value={expandIconPosition}>
                <Radio value={"start"}>左边</Radio>
                <Radio value={"end"}>右边</Radio>
              </Radio.Group>
            </div>
            <div>
              <span style={{ marginRight: "18px" }}>是否显示展开图标:</span>
              <Radio.Group onChange={onShowArrowChange} value={showArrow}>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </div>
          </Space>
          <Divider />
          <div style={{ marginTop: "38px" }}>
            <Collapse
              items={items}
              defaultActiveKey={["1"]}
              size={size}
              accordion={accordion}
              bordered={border}
              ghost={ghost}
              expandIconPosition={expandIconPosition}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default CollapsePanel;
