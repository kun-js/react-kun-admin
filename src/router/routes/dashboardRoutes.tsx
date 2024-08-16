import { RouteItemType } from "@/types/route";

import MainLayout from "@/layout/index";
import PrivateRoute from "@/components/PrivateRoute";

import Analysis from "@/views/dashboard/analysis/index";
import Workbench from "@/views/dashboard/workbench/index";

const dashboardRoutes: RouteItemType[] = [
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
