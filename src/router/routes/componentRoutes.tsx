import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "./LoadingComponent";

const ButtonComponent = lazy(() => import("@/views/component/button"));
const TagComponent = lazy(() => import("@/views/component/tag"));

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
      {
        path: "tag",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <TagComponent />
          </Suspense>
        ),
      },
    ],
  },
];

export default chartRoutes;
