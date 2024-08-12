import React, { useCallback, useEffect, useState } from "react";
import SideBar from "./sidebar";
import MainHeader from "./header";
import MainContent from "./main";
import { Layout, message, Watermark, FloatButton } from "antd";
import useWatermarkStore from "@/store/watermark";

const { Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showMenuLogo, setShowMenuLogo] = useState(true);
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
        <div style={{ width: "100vw", height: "100vh" }}>
          {contextHolder}
          <Layout hasSider>
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
              <Content>
                <MainContent showFooter={showFooter} />
              </Content>
              {showFooter && (
                <Footer style={{ textAlign: "center" }}>
                  Kun Admin ©{new Date().getFullYear()} Created by Xiao Hei Zi
                </Footer>
              )}
            </Layout>
          </Layout>
          <FloatButton.BackTop tooltip={<span>回到顶部</span>} />
        </div>
      </Watermark>
    </>
  );
};

export default MainLayout;
