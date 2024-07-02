import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "../../components/LoadingComponent";

const ButtonPermission = lazy(() => import("@/views/permission/button-permission"));

const permissionRoutes = [
  {
    path: "/permission",
    element: <MainLayout />,
    children: [
      {
        path: "button-permission",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ButtonPermission />
          </Suspense>
        ),
      },
    ],
  },
];

export default permissionRoutes;
