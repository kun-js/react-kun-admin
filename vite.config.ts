import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "./mock", //mock文件地址
      localEnabled: true, // 开发打包开关
      logger: true, //是否在控制台显示请求日志
      supportTs: true, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
