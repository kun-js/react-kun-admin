import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "@/components/LoadingComponent";

const DownloadFeature = lazy(() => import("@/views/feature/download"));
const WaterMark = lazy(() => import("@/views/feature/watermark"));
const Clipboard = lazy(() => import("@/views/feature/clipboard"));
const Signature = lazy(() => import("@/views/feature/signature"));
const DraggableFeature = lazy(() => import("@/views/feature/draggable"));
const PrintFeature = lazy(() => import("@/views/feature/print"));
const BarcodeFeature = lazy(() => import("@/views/feature/barcode"));
const QRcodeFeature = lazy(() => import("@/views/feature/qrcode"));
const PDFPreview = lazy(() => import("@/views/feature/pdf-preview"));
const WordPreview = lazy(() => import("@/views/feature/word-preview"));
const ExcelPreview = lazy(() => import("@/views/feature/excel-preview"));
const MarkDownEditor = lazy(() => import("@/views/feature/markdown-editor"));
const TextEditor = lazy(() => import("@/views/feature/text-editor"));
const JSONEditor = lazy(() => import("@/views/feature/json-editor"));
const FlowChart = lazy(() => import("@/views/feature/flow-chart"));
const ImageCropper = lazy(() => import("@/views/feature/image-cropper"));
const VideoPlayer = lazy(() => import("@/views/feature/video-player"));
const MusicPlayer = lazy(() => import("@/views/feature/music-player"));
const Debounce = lazy(() => import("@/views/feature/debounce"));
const Sensitive = lazy(() => import("@/views/feature/sensitive"));

const featureRoutes = [
  {
    path: "/feature",
    element: <MainLayout />,
    children: [
      {
        path: "download",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <DownloadFeature />
          </Suspense>
        ),
      },
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
        path: "draggable",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <DraggableFeature />
          </Suspense>
        ),
      },
      {
        path: "print",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <PrintFeature />
          </Suspense>
        ),
      },
      {
        path: "barcode",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <BarcodeFeature />
          </Suspense>
        ),
      },
      {
        path: "qrcode",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <QRcodeFeature />
          </Suspense>
        ),
      },
      {
        path: "pdf-preview",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <PDFPreview />
          </Suspense>
        ),
      },
      {
        path: "word-preview",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <WordPreview />
          </Suspense>
        ),
      },
      {
        path: "excel-preview",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ExcelPreview />
          </Suspense>
        ),
      },
      {
        path: "markdown-editor",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <MarkDownEditor />
          </Suspense>
        ),
      },
      {
        path: "text-editor",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <TextEditor />
          </Suspense>
        ),
      },
      {
        path: "json-editor",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <JSONEditor />
          </Suspense>
        ),
      },
      {
        path: "flow-chart",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <FlowChart />
          </Suspense>
        ),
      },
      {
        path: "image-cropper",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ImageCropper />
          </Suspense>
        ),
      },
      {
        path: "video-player",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <VideoPlayer />
          </Suspense>
        ),
      },
      {
        path: "music-player",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <MusicPlayer />
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
