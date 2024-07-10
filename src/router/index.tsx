import { createBrowserRouter } from "react-router-dom";

import baseRoutes from "./routes/baseRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import permissionRoutes from "./routes/permissionRoutes";
import componentRoutes from "./routes/componentRoutes";
import featureRoutes from "./routes/featureRoutes";
import pageRoutes from "./routes/pageRoutes";
import chartRoutes from "./routes/chartRoutes";
import externalRoutes from "./routes/externalRoutes";
import systemRoutes from "./routes/systemRoutes";
import aboutRoutes from "./routes/aboutRoutes";

const router = createBrowserRouter([
  ...baseRoutes,
  ...dashboardRoutes,
  ...permissionRoutes,
  ...componentRoutes,
  ...featureRoutes,
  ...pageRoutes,
  ...chartRoutes,
  ...externalRoutes,
  ...systemRoutes,
  ...aboutRoutes,
]);

export default router;
