import React, { useEffect, useState } from "react";
import SideBar from "./sidebar";
import MainHeader from "./header";
import MainContent from "./main";
import { Layout, message } from "antd";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

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
      {contextHolder}
      <Layout>
        <SideBar collapsed={collapsed} />
        <Layout>
          <MainHeader collapsed={collapsed} handleToCollapse={handleToCollapse} />
          <Content style={{ margin: "20px" }}>
            <MainContent collapsed={collapsed} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
