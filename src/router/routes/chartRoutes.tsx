import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "./LoadingComponent";

const BarChart = lazy(() => import("@/views/chart/bar"));
const LineChart = lazy(() => import("@/views/chart/line"));
const PieChart = lazy(() => import("@/views/chart/pie"));

const chartRoutes = [
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
