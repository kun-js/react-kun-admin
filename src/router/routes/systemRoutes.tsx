import MainLayout from "@/layout";
import { Suspense, lazy } from "react";
import LoadingComponent from "../../components/LoadingComponent";

const Account = lazy(() => import("@/views/system/account"));

const systemRoutes = [
  {
    path: "/system",
    element: <MainLayout />,
    children: [
      {
        path: "account",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Account />
          </Suspense>
        ),
      },
    ],
  },
];

export default systemRoutes;
