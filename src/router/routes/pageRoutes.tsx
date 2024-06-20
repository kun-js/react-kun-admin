import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "./LoadingComponent";

const BasicForm = lazy(() => import("@/views/page/form/basic"));
const StepForm = lazy(() => import("@/views/page/form/step"));
const Detail = lazy(() => import("@/views/page/detail"));
const ListPage = lazy(() => import("@/views/page/list"));
const SuccessPage = lazy(() => import("@/views/page/result/success"));
const FailPage = lazy(() => import("@/views/page/result/fail"));

const pageRoutes = [
  {
    path: "/page",
    element: <MainLayout />,
    children: [
      {
        path: "form/basic",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <BasicForm />
          </Suspense>
        ),
      },
      {
        path: "form/step",
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
    ],
  },
];

export default pageRoutes;
