import React, { useState } from "react";
import { Button, Avatar, Layout, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./header.scss";

const { Header } = Layout;

interface MainHeaderProps {
  collapsed: boolean;
  handleToCollapse: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ collapsed, handleToCollapse }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [fullScreen, setFullScreen] = useState(false);

  const handleToFullScreen = () => {
    if (!fullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  return (
    <Header
      className="header-container"
      style={{
        width: collapsed ? "calc(100vw - 80px)" : "calc(100vw - 200px)",
        background: colorBgContainer,
      }}
    >
      <div className="left-action">
        <Button
          className="collapse-button"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleToCollapse}
        />
      </div>
      <div className="right-action">
        <Button className="search-button" type="text" icon={<SearchOutlined />} />
        <Button
          className="fullscreen-button"
          type="text"
          icon={fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          onClick={handleToFullScreen}
        />
        <Button className="message-button" type="text" icon={<BellOutlined />} />
        <div className="user-button">
          <Avatar icon={<UserOutlined />} />
          <div className="user-name">KunKun</div>
        </div>
        <Button className="setting-button" type="text" icon={<SettingOutlined />} />
      </div>
    </Header>
  );
};

export default MainHeader;
