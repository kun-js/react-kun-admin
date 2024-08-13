import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
// import viteCompression from "vite-plugin-compression";
// import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "./mock", //mock文件地址
      localEnabled: true, // 开发打包开关
      logger: false, //是否在控制台显示请求日志
      supportTs: true, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
    }),

    // viteCompression({
    //   verbose: true, // 是否在控制台中输出压缩结果
    //   disable: false,
    //   threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
    //   algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
    //   ext: ".gz",
    //   deleteOriginFile: true, // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
    // }),

    // 打包体积分析
    // visualizer({
    //   open: true, // 注意这里要设置为true，否则无效，如果存在本地服务端口，将在打包后自动展示
    //   gzipSize: true,
    //   file: "stats.html", //分析图生成的文件名
    //   brotliSize: true
    // }),

    // 图片资源优化
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      // 定义全局 SCSS 变量
      scss: {
        javascriptEnabled: true,
        additionalData: `
          @use "./src/styles/variables.scss" as *;
        `,
      },
    },
  },
  build: {
    assetsDir: "assets", // 构建输出的静态资源目录
    assetsInlineLimit: 0, // 将所有文件作为静态资源包含
    minify: "terser", // 启用 terser 压缩
    terserOptions: {
      compress: {
        drop_console: true, // 删除所有 console
        drop_debugger: true, // 删除 debugger
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
        entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
        assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
        // 最小化拆分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.docx", "**/*.xlsx"],
});
