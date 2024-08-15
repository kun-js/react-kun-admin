import "./layout.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Layout, message, Watermark } from "antd";
import useWatermarkStore from "@/store/watermark";

import SideBar from "./sidebar";
import MainHeader from "./header";
import MainContent from "./main";
import MainFooter from "./footer";

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [showFooter, setShowFooter] = useState<boolean>(false);
  const [showMenuLogo, setShowMenuLogo] = useState<boolean>(true);
  const [messageApi, contextHolder] = message.useMessage();
  const { watermarkVisible } = useWatermarkStore();

  const handleToCollapse = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const handleToShowFooter = useCallback(
    (value: boolean) => {
      setShowFooter(value);
    },
    [showFooter]
  );

  const handleToShowMenuLogo = useCallback(
    (value: boolean) => {
      setShowMenuLogo(value);
    },
    [showMenuLogo]
  );

  useEffect(() => {
    const message = localStorage.getItem("loginMessage");
    if (message) {
      messageApi.open({
        type: "success",
        content: "登陆成功!跳转至主页!",
        duration: 5,
      });
      localStorage.removeItem("loginMessage");
    }
  }, []);

  return (
    <>
      <Watermark zIndex={watermarkVisible ? 99 : -1} content={["CAIXUKUN", "JINITAIMEI"]}>
        <div className="layout-container">
          {contextHolder}
          <Layout>
            <SideBar collapsed={collapsed} showMenuLogo={showMenuLogo} />
            <Layout
              style={{
                marginLeft: collapsed ? "80px" : "200px",
                transition: collapsed ? "0.35s" : "0.2s",
              }}
            >
              <MainHeader
                collapsed={collapsed}
                handleToCollapse={handleToCollapse}
                showFooter={showFooter}
                handleToShowFooter={handleToShowFooter}
                showMenuLogo={showMenuLogo}
                handleToShowMenuLogo={handleToShowMenuLogo}
              />
              <MainContent showFooter={showFooter} />
              <MainFooter showFooter={showFooter} />
            </Layout>
          </Layout>
        </div>
      </Watermark>
    </>
  );
};

export default MainLayout;
