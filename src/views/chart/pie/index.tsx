import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { Card } from "antd";
import "./pie-chart.scss";

const getOption = () => {
  return {
    title: {
      text: "饼图",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "right",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
};

const PieChart: React.FC = () => {
  const option = getOption();

  return (
    <div className="pie-chart-container">
      <Card className="card-container" bordered={true}>
        <ReactECharts echarts={echarts} option={option} style={{ width: "100%", height: "100%" }} />
      </Card>
    </div>
  );
};

export default PieChart;
