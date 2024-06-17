import MainLayout from "@/layout";
import BarChart from "@/views/chart/bar";
import LineChart from "@/views/chart/line";
// import { lazy } from "react";

const chartRoutes = [
  {
    path: "/chart",
    element: <MainLayout />,
    children: [
      {
        path: "bar",
        element: <BarChart />,
      },
      {
        path: "line",
        element: <LineChart />,
      },
    ],
  },
];

export default chartRoutes;
