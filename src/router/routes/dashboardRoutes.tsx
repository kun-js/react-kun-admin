import PrivateRoute from "./PrivateRoute";
import MainLayout from "@/layout/index";

import Analysis from "@/views/dashboard/analysis/index";
import Workbench from "@/views/dashboard/workbench/index";

const dashboardRoutes = [
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
];

export default dashboardRoutes;
