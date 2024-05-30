import React from "react";
import SideBar from "./sidebar";
import MainHeader from "./header";
import { Layout } from "antd";
import MainContent from "./main";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <MainHeader />
        <Content style={{ margin: "20px" }}>
          <MainContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
