import { createBrowserRouter } from "react-router-dom";
import { RouteItemType } from "@/types/route";

// 引入所有路由模块
const routeFiles = import.meta.glob("./routes/*Routes.tsx", { eager: true });

const routeModuleList: RouteItemType[] = Object.values(routeFiles).flatMap((module) => {
  if (typeof module === "object" && module !== null && "default" in module) {
    const mod = module.default || [];
    return Array.isArray(mod) ? mod : [mod];
  }
});

const router = createBrowserRouter(routeModuleList);

export default router;
