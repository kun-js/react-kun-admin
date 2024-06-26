import React, { useCallback, useEffect, useState } from "react";
import SideBar from "./sidebar";
import MainHeader from "./header";
import MainContent from "./main";
import { Layout, message, Watermark } from "antd";
import useWatermarkStore from "@/store/watermark";

const { Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
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
          <Layout>
            <SideBar collapsed={collapsed} />
            <Layout
              style={{
                marginLeft: collapsed ? "80px" : "200px",
                transition: "0.28s",
              }}
            >
              <MainHeader
                handleToShowFooter={handleToShowFooter}
                collapsed={collapsed}
                handleToCollapse={handleToCollapse}
              />
              <Content style={{ width: "100%" }}>
                <MainContent showFooter={showFooter} />
              </Content>
              {showFooter && (
                <Footer style={{ textAlign: "center" }}>
                  Kun Admin ©{new Date().getFullYear()} Created by Xiao Hei Zi
                </Footer>
              )}
            </Layout>
          </Layout>
        </div>
      </Watermark>
    </>
  );
};

export default MainLayout;
