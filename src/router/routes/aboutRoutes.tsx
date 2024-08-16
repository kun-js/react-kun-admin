import { Suspense, lazy } from "react";
import { RouteItemType } from "@/types/route";

import MainLayout from "@/layout";
import LoadingComponent from "@/components/LoadingComponent";

const About = lazy(() => import("@/views/about"));

const aboutRoutes: RouteItemType[] = [
  {
    path: "/about",
    element: <MainLayout />,
    children: [
      {
        path: "index",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];

export default aboutRoutes;
