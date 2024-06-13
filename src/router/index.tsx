import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "@/layout/index";

import { lazy } from "react";

const Analysis = lazy(() => import("@/views/dashboard/analysis/index"));
const Workbench = lazy(() => import("@/views/dashboard/workbench/index"));
const Login = lazy(() => import("@/views/login/index"));
const WaterMark = lazy(() => import("@/views/feature/watermark"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/dashboard" />, // 使用 Navigate 组件进行重定向，replace 属性表示替换历史记录
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
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
    children: [
      {
        path: "watermark",
        element: <WaterMark />,
      },
    ],
  },
  {
    path: "/page",
    element: <MainLayout />,
  },
  {
    path: "/chart",
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
