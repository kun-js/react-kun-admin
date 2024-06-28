import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "./LoadingComponent";

const ButtonComponent = lazy(() => import("@/views/component/button"));
const TagComponent = lazy(() => import("@/views/component/tag"));
const ColorPickerComponent = lazy(() => import("@/views/component/color-picker"));
const DescriptionComponent = lazy(() => import("@/views/component/description"));

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
    ],
  },
];

export default chartRoutes;
