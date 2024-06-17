import { createBrowserRouter } from "react-router-dom";

import baseRoutes from "./routes/baseRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import featureRoutes from "./routes/featureRoutes";
import pageRoutes from "./routes/pageRoutes";
import chartRoutes from "./routes/chartRoutes";
import aboutRoutes from "./routes/aboutRoutes";

const router = createBrowserRouter([
  ...baseRoutes,
  ...dashboardRoutes,
  ...featureRoutes,
  ...pageRoutes,
  ...chartRoutes,
  ...aboutRoutes,
]);

export default router;
