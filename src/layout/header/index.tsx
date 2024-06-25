import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Avatar, Layout, Popover } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
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

import useLanguageStore from "@/store/language";
import "./header.scss";

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
  const { changeLanguage } = useLanguageStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [breadcrumbList, setBreadcrumbList] = useState<TitleObject[]>([]);
  const [fullScreen, setFullScreen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ avatar: "", name: "" });

  const handleToChangeLang = (lang: string) => {
    changeLanguage(lang);
    window.location.reload();
  };

  const langButtonDisabled = JSON.parse(localStorage.getItem("languageStore")!).state.lang === "zh";

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

  const langContent = (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button type="text" onClick={() => handleToChangeLang("zh")} disabled={langButtonDisabled}>
          简体中文
        </Button>
        <Button type="text" onClick={() => handleToChangeLang("en")} disabled={!langButtonDisabled}>
          English
        </Button>
      </div>
    </>
  );

  const userContent = (
    <Button type="text" onClick={handleToExit}>
      退出系统
    </Button>
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

        <Popover content={langContent} trigger="click">
          <Button className="language-button" type="text" icon={<TranslationOutlined />} />
        </Popover>

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
