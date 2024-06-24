import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "./LoadingComponent";

const WaterMark = lazy(() => import("@/views/feature/watermark"));
const Clipboard = lazy(() => import("@/views/feature/clipboard"));

const featureRoutes = [
  {
    path: "/feature",
    element: <MainLayout />,
    children: [
      {
        path: "watermark",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <WaterMark />
          </Suspense>
        ),
      },
      {
        path: "clipboard",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Clipboard />
          </Suspense>
        ),
      },
    ],
  },
];

export default featureRoutes;
