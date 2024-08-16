import { Suspense, lazy } from "react";
import { RouteItemType } from "@/types/route";

import MainLayout from "@/layout";
import LoadingComponent from "@/components/LoadingComponent";

const BarChart = lazy(() => import("@/views/chart/bar"));
const LineChart = lazy(() => import("@/views/chart/line"));
const PieChart = lazy(() => import("@/views/chart/pie"));

const chartRoutes: RouteItemType[] = [
  {
    path: "/chart",
    element: <MainLayout />,
    children: [
      {
        path: "bar",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <BarChart />
          </Suspense>
        ),
      },
      {
        path: "line",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <LineChart />
          </Suspense>
        ),
      },
      {
        path: "pie",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <PieChart />
          </Suspense>
        ),
      },
    ],
  },
];

export default chartRoutes;
