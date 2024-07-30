// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "@/styles/index.scss";
import "@/locales/index";

import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";

import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

import "@/types/declaretions.d.ts";

import { RouterProvider } from "react-router-dom";

import router from "@/router/index";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "PingFang",
      },
    }}
    locale={locale}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
  // </React.StrictMode>
);
