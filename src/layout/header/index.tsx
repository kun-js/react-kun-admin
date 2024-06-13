import React, { useEffect, useState } from "react";
import { Button, Avatar, Layout, Popover, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  TranslationOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./header.scss";

import { useNavigate } from "react-router-dom";

const { Header } = Layout;

interface MainHeaderProps {
  collapsed: boolean;
  handleToCollapse: () => void;
}

interface UserInfo {
  avatar: string;
  name: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ collapsed, handleToCollapse }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleToExit = () => {
    localStorage.removeItem("userStore");
    navigate("/login");
  };

  const [fullScreen, setFullScreen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ avatar: "", name: "" });

  const handleToFullScreen = () => {
    if (!fullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("userStore")!).state.userInfo;
    setUserInfo(result);
  }, []);

  const userContent = (
    <div style={{ padding: 0 }}>
      <Button style={{ width: "100%" }} type="text" onClick={handleToExit}>
        退出系统
      </Button>
    </div>
  );

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

        <Button className="language-button" type="text" icon={<TranslationOutlined />} />

        <Button
          className="fullscreen-button"
          type="text"
          icon={fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          onClick={handleToFullScreen}
        />

        <Button className="message-button" type="text" icon={<BellOutlined />} />

        <Popover content={userContent} trigger="hover">
          <div className="user-button">
            <Avatar src={userInfo.avatar} />
            <div className="user-name">{userInfo.name}</div>
          </div>
        </Popover>

        <Button className="setting-button" type="text" icon={<SettingOutlined />} />
      </div>
    </Header>
  );
};

export default MainHeader;