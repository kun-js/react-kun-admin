import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "./LoadingComponent";

const ButtonComponent = lazy(() => import("@/views/component/button"));

const chartRoutes = [
  {
    path: "/component",
    element: <MainLayout />,
    children: [
      {
        path: "button",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ButtonComponent />
          </Suspense>
        ),
      },
    ],
  },
];

export default chartRoutes;
