import { Spin } from "antd";

const LoadingComponent: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh", // 使用视口高度确保垂直居中
      position: "fixed", // 固定定位，覆盖整个屏幕
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <Spin size="large" />
  </div>
);

export default LoadingComponent;
