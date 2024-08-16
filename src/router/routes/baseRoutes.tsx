import { Navigate } from "react-router-dom";
import { RouteItemType } from "@/types/route";

import Login from "@/views/login";
import NotFound from "@/components/NotFound";

const baseRoutes: RouteItemType[] = [
  {
    path: "/",
    element: <Navigate replace to="/dashboard/analysis" />, // 使用 Navigate 组件进行重定向，replace 属性表示替换历史记录
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default baseRoutes;
