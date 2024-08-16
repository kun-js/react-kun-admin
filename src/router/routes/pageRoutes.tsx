import { Suspense, lazy } from "react";
import { RouteItemType } from "@/types/route";

import MainLayout from "@/layout";
import LoadingComponent from "@/components/LoadingComponent";

const BasicForm = lazy(() => import("@/views/page/form/basic"));
const StepForm = lazy(() => import("@/views/page/form/step"));
const Detail = lazy(() => import("@/views/page/detail"));
const ListPage = lazy(() => import("@/views/page/list"));
const SuccessPage = lazy(() => import("@/views/page/result/success"));
const FailPage = lazy(() => import("@/views/page/result/fail"));
const Page403 = lazy(() => import("@/views/page/exception/403"));
const Page404 = lazy(() => import("@/views/page/exception/404"));
const Page500 = lazy(() => import("@/views/page/exception/500"));

const pageRoutes: RouteItemType[] = [
  {
    path: "/page",
    element: <MainLayout />,
    children: [
      {
        path: "form/basic-form",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <BasicForm />
          </Suspense>
        ),
      },
      {
        path: "form/step-form",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <StepForm />
          </Suspense>
        ),
      },
      {
        path: "detail",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Detail />
          </Suspense>
        ),
      },
      {
        path: "list",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ListPage />
          </Suspense>
        ),
      },
      {
        path: "result/success",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <SuccessPage />
          </Suspense>
        ),
      },
      {
        path: "result/fail",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <FailPage />
          </Suspense>
        ),
      },
      {
        path: "exception/403",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Page403 />
          </Suspense>
        ),
      },
      {
        path: "exception/404",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Page404 />
          </Suspense>
        ),
      },
      {
        path: "exception/500",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Page500 />
          </Suspense>
        ),
      },
    ],
  },
];

export default pageRoutes;
