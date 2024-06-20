import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "./LoadingComponent";

const About = lazy(() => import("@/views/about"));

const aboutRoutes = [
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