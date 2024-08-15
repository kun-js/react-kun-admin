import React from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

const getOption = () => {
  return {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "5%",
      left: "0%",
      right: "1%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [3000, 2000, 4000, 5000, 3200, 4200, 3200, 2000, 3000, 5000, 6000, 3000],
        type: "bar",
        smooth: true,
      },
    ],
  };
};

const VisitChart: React.FC = () => {
  const option = getOption();

  return (
    <div className="visit-chart-container">
      <ReactECharts echarts={echarts} option={option} style={{ width: "100%", height: "250px" }} />
    </div>
  );
};

export default VisitChart;
