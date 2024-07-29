import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "@/components/LoadingComponent";

const ButtonComponent = lazy(() => import("@/views/component/button"));
const TagComponent = lazy(() => import("@/views/component/tag"));
const ColorPickerComponent = lazy(() => import("@/views/component/color-picker"));
const DescriptionComponent = lazy(() => import("@/views/component/description"));
const StatisticComponent = lazy(() => import("@/views/component/statistic"));
const MessageComponent = lazy(() => import("@/views/component/message"));

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
    ],
  },
];

export default chartRoutes;
