import MainLayout from "@/layout/index";
import Analysis from "@/views/dashboard/analysis/index";
import Workbench from "@/views/dashboard/workbench/index";
import Login from "@/views/login/index";

import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
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
    path: "/login",
    element: <Login />,
  },
]);

export default router;
