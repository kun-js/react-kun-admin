import React, { useState } from "react";
import SideBar from "./sidebar";
import MainHeader from "./header";
import MainContent from "./main";
import { Layout } from "antd";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <Layout>
        <MainHeader collapsed={collapsed} handleToCollapse={handleToCollapse} />
        <Content style={{ margin: "20px" }}>
          <MainContent collapsed={collapsed} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
