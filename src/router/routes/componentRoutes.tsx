import { Suspense, lazy } from "react";

import MainLayout from "@/layout";
import LoadingComponent from "@/components/LoadingComponent";

const ButtonComponent = lazy(() => import("@/views/component/button"));
const TagComponent = lazy(() => import("@/views/component/tag"));
const ColorPickerComponent = lazy(() => import("@/views/component/color-picker"));
const DescriptionComponent = lazy(() => import("@/views/component/description"));
const StatisticComponent = lazy(() => import("@/views/component/statistic"));
const MessageComponent = lazy(() => import("@/views/component/message"));
const NotificationComponent = lazy(() => import("@/views/component/notification"));
const TreeComponent = lazy(() => import("@/views/component/tree"));
const ScrollComponent = lazy(() => import("@/views/component/scroll"));
const CollapsePanel = lazy(() => import("@/views/component/collapse-panel"));
const DataPickerComponent = lazy(() => import("@/views/component/date-picker"));

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
      {
        path: "color-picker",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ColorPickerComponent />
          </Suspense>
        ),
      },
      {
        path: "description",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <DescriptionComponent />
          </Suspense>
        ),
      },
      {
        path: "statistic",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <StatisticComponent />
          </Suspense>
        ),
      },
      {
        path: "message",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <MessageComponent />
          </Suspense>
        ),
      },
      {
        path: "notification",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <NotificationComponent />
          </Suspense>
        ),
      },
      {
        path: "tree",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <TreeComponent />
          </Suspense>
        ),
      },
      {
        path: "scroll",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ScrollComponent />
          </Suspense>
        ),
      },
      {
        path: "collapse-panel",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <CollapsePanel />
          </Suspense>
        ),
      },
      {
        path: "date-picker",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <DataPickerComponent />
          </Suspense>
        ),
      },
    ],
  },
];

export default chartRoutes;
