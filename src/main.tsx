import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "@/styles/index.scss";

import { RouterProvider } from "react-router-dom";

import router from "@/router/index";
import { Spin } from "antd";

// 自定义加载提示组件
const LoadingComponent = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    }}
  >
    <Spin />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
