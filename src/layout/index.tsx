import React, { useEffect, useState } from "react";
import SideBar from "./sidebar";
import MainHeader from "./header";
import MainContent from "./main";
import { Layout, message, Watermark } from "antd";
import useWatermarkStore from "@/store/watermark";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { watermarkVisible } = useWatermarkStore();

  const handleToCollapse = () => {
    setCollapsed(!collapsed);
  };

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
      <Watermark zIndex={watermarkVisible ? 9 : -1} content={["CAIXUKUN", "JINITAIMEI"]}>
        <div style={{ width: "100vw", height: "100vh" }}>
          {contextHolder}
          <Layout>
            <SideBar collapsed={collapsed} />
            <Layout>
              <MainHeader collapsed={collapsed} handleToCollapse={handleToCollapse} />
              <Content style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                <MainContent collapsed={collapsed} />
              </Content>
            </Layout>
          </Layout>
        </div>
      </Watermark>
    </>
  );
};

export default MainLayout;
