import React from "react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

interface SideBarProps {
  collapsed: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ collapsed }) => {
  return (
    <Sider breakpoint="lg" collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
    </Sider>
  );
};

export default SideBar;
