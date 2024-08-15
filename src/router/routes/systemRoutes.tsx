import { Suspense, lazy } from "react";

import MainLayout from "@/layout";
import LoadingComponent from "../../components/LoadingComponent";

const AccountManagement = lazy(() => import("@/views/system/account"));
const RoleManagement = lazy(() => import("@/views/system/role"));

const systemRoutes = [
  {
    path: "/system",
    element: <MainLayout />,
    children: [
      {
        path: "account",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <AccountManagement />
          </Suspense>
        ),
      },
      {
        path: "role",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <RoleManagement />
          </Suspense>
        ),
      },
    ],
  },
];

export default systemRoutes;
