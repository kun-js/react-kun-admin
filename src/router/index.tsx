import MainLayout from "@/layout/index";
import Analysis from "@/views/dashboard/analysis/index";
import Workbench from "@/views/dashboard/workbench/index";
import Login from "@/views/login/index";

import { createHashRouter, Navigate } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate replace to="/dashboard" />, // 使用 Navigate 组件进行重定向，replace 属性表示替换历史记录
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "analysis",
        element: <Analysis />,
      },
      {
        path: "workbench",
        element: <Workbench />,
      },
    ],
  },
  {
    path: "/feature",
    element: <MainLayout />,
  },
  {
    path: "/page",
    element: <MainLayout />,
  },
  {
    path: "/about",
    element: <MainLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
