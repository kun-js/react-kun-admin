import "@/types/declaretions.d.ts";
import "@/styles/index.scss";
import "@/locales/index";

import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

import { RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import router from "@/router/index";
import useDarkModeStore from "./store/dark";

const App = () => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "PingFang",
          },
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
        locale={locale}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
};

export default App;
