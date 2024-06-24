import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Avatar, Layout, Popover } from "antd";
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

import { useNavigate, useLocation } from "react-router-dom";
const { Header } = Layout;

type TitleObject = { title: string };

interface MainHeaderProps {
  collapsed: boolean;
  handleToCollapse: () => void;
}

interface UserInfo {
  avatar: string;
  name: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ collapsed, handleToCollapse }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [breadcrumbList, setBreadcrumbList] = useState<TitleObject[]>([]);
  const [fullScreen, setFullScreen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ avatar: "", name: "" });

  const handleToExit = () => {
    localStorage.removeItem("userStore");
    navigate("/login");
  };

  const handleToFullScreen = () => {
    if (!fullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  const transformPathToTitleArray = (path: string): TitleObject[] => {
    // 将路径按 '/' 分割成段，并过滤掉空字符串
    const segments = path.split("/").filter((segment) => segment.length > 0);
    // 使用 map 函数将每个段转换成一个具有 title 属性的对象
    const titleArray = segments.map((segment) => ({ title: segment }));
    return titleArray;
  };

  useEffect(() => {
    const path = location.pathname;
    const titleArray = transformPathToTitleArray(path);
    setBreadcrumbList(titleArray);

    const result = JSON.parse(localStorage.getItem("userStore") || "{}").state.userInfo;
    setUserInfo(result);
  }, [location.pathname]);

  const userContent = (
    <div style={{ padding: 0 }}>
      <Button type="text" onClick={handleToExit}>
        退出系统
      </Button>
    </div>
  );

  return (
    <Header
      className="header-container"
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <div className="left-action">
        <Button
          className="collapse-button"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleToCollapse}
        />
        <Breadcrumb className="breadcrumb" items={breadcrumbList} />
      </div>

      <div className="right-action">
        <Button className="search-button" type="text" icon={<SearchOutlined />} disabled />

        <Button className="language-button" type="text" icon={<TranslationOutlined />} disabled />

        <Button
          className="fullscreen-button"
          type="text"
          icon={fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          onClick={handleToFullScreen}
        />

        <Button className="message-button" type="text" icon={<BellOutlined />} disabled />

        <Popover content={userContent} trigger="hover">
          <div className="user-button">
            <Avatar src={userInfo.avatar} />
            <div className="user-name">{userInfo.name}</div>
          </div>
        </Popover>

        <Button className="setting-button" type="text" icon={<SettingOutlined />} disabled />
      </div>
    </Header>
  );
};

export default MainHeader;
