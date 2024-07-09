import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "@/components/LoadingComponent";

const WaterMark = lazy(() => import("@/views/feature/watermark"));
const Clipboard = lazy(() => import("@/views/feature/clipboard"));
const Signature = lazy(() => import("@/views/feature/signature"));
const PDFPreview = lazy(() => import("@/views/feature/pdf"));
const Debounce = lazy(() => import("@/views/feature/debounce"));
const Sensitive = lazy(() => import("@/views/feature/sensitive"));

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
      {
        path: "signature",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Signature />
          </Suspense>
        ),
      },
      {
        path: "pdf",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <PDFPreview />
          </Suspense>
        ),
      },
      {
        path: "debounce",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Debounce />
          </Suspense>
        ),
      },
      {
        path: "sensitive",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Sensitive />
          </Suspense>
        ),
      },
    ],
  },
];

export default featureRoutes;
