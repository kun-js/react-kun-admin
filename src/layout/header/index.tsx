import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Layout } from "antd";
import { useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./header.scss";

import HeaderSearch from "./component/HeaderSearch";
import FullScreen from "./component/FullScreen";
import Language from "./component/Language";
import HeaderMessage from "./component/HeaderMessage";
import UserButton from "./component/UserButton";
import HeaderSetting from "./component/HeaderSetting";

const { Header } = Layout;

type TitleObject = { title: string };

interface MainHeaderProps {
  handleToShowFooter: (value: boolean) => void;
  collapsed: boolean;
  handleToCollapse: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ handleToShowFooter, collapsed, handleToCollapse }) => {
  const location = useLocation();
  const [breadcrumbList, setBreadcrumbList] = useState<TitleObject[]>([]);

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
  }, [location.pathname]);

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
        <HeaderSearch />
        <HeaderMessage />
        <Language />
        <FullScreen />
        <UserButton />
        <HeaderSetting handleToShowFooter={handleToShowFooter} />
      </div>
    </Header>
  );
};

export default MainHeader;
