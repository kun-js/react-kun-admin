import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { Card } from "antd";
import "./line-chart.scss";

const getOption = () => {
  return {
    title: {
      text: "折线图",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "line",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
};

const BarChart: React.FC = () => {
  const option = getOption();

  return (
    <div className="line-chart-container">
      <Card className="card-container" bordered={true}>
        <ReactECharts echarts={echarts} option={option} style={{ width: "100%", height: "100%" }} />
      </Card>
    </div>
  );
};

export default BarChart;
