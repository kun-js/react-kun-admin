import "./AnalysisChart.scss";
import { Card } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import TrafficChart from "./TrafficChart";
import VisitChart from "./VisitChart";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "流量分析",
    children: <TrafficChart />,
  },
  {
    key: "2",
    label: "访问量",
    children: <VisitChart />,
  },
];

const AnalysisChart: React.FC = () => {
  return (
    <>
      <Card>
        <Tabs defaultActiveKey="1" items={items} destroyInactiveTabPane={true} />
      </Card>
    </>
  );
};

export default AnalysisChart;
