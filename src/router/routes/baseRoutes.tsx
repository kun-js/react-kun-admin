import Login from "@/views/login";
import NotFound from "@/components/NotFound";
import { Navigate } from "react-router-dom";

const baseRoutes = [
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
