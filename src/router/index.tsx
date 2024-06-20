import { createBrowserRouter } from "react-router-dom";

import baseRoutes from "./routes/baseRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import componentRoutes from "./routes/componentRoutes";
import featureRoutes from "./routes/featureRoutes";
import pageRoutes from "./routes/pageRoutes";
import chartRoutes from "./routes/chartRoutes";
import externalRoutes from "./routes/externalRoutes";
import aboutRoutes from "./routes/aboutRoutes";

const router = createBrowserRouter([
  ...baseRoutes,
  ...dashboardRoutes,
  ...componentRoutes,
  ...featureRoutes,
  ...pageRoutes,
  ...chartRoutes,
  ...externalRoutes,
  ...aboutRoutes,
]);

export default router;
