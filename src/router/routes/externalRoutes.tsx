import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "@/components/LoadingComponent";
import ExternalLink from "@/components/ExternalLink";

const AntdPage = lazy(() => import("@/views/external/iframe/antd"));
const ReactPage = lazy(() => import("@/views/external/iframe/react"));

const externalRoutes = [
  {
    path: "/external",
    element: <MainLayout />,
    children: [
      {
        path: "iframe/antd-iframe",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <AntdPage />
          </Suspense>
        ),
      },
      {
        path: "iframe/react-iframe",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ReactPage />
          </Suspense>
        ),
      },
      {
        path: "outerchain/antd-outerchain",
        element: <ExternalLink />,
      },
      {
        path: "outerchain/react-outerchain",
        element: <ExternalLink />,
      },
    ],
  },
];

export default externalRoutes;
