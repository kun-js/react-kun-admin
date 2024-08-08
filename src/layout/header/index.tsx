import React, { useEffect, useRef, useState } from "react";
import { Breadcrumb, Button, Layout } from "antd";
import { useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import "./header.scss";

import HeaderSearch from "./component/HeaderSearch";
import FullScreen from "./component/FullScreen";
import Language from "./component/Language";
import HeaderMessage from "./component/HeaderMessage";
import HeaderTour from "./component/HeaderTour";
import UserButton from "./component/UserButton";
import HeaderSetting from "./component/HeaderSetting";

const { Header } = Layout;

type TitleObject = { title: string };

interface MainHeaderProps {
  collapsed: boolean;
  handleToCollapse: () => void;
  showFooter: boolean;
  handleToShowFooter: (value: boolean) => void;
  showMenuLogo: boolean;
  handleToShowMenuLogo: (value: boolean) => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({
  collapsed,
  handleToCollapse,
  showFooter,
  handleToShowFooter,
  showMenuLogo,
  handleToShowMenuLogo,
}) => {
  const { t } = useTranslation();
  const collapseButtonRef = useRef(null);
  const fullScreenButtonRef = useRef(null);
  const location = useLocation();
  const [breadcrumbList, setBreadcrumbList] = useState<TitleObject[]>([]);

  const transformPathToTitleArray = (path: string): TitleObject[] => {
    let currentPath = path;
    if (path === "/about/index") {
      currentPath = "/about";
    }
    // 将路径按 '/' 分割成段，并过滤掉空字符串
    const segments = currentPath.split("/").filter((segment) => segment.length > 0);
    // 使用 map 函数将每个段转换成一个具有 title 属性的对象
    const titleArray = segments.map((segment) => ({ title: t(`menu.${segment}`) }));
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
          ref={collapseButtonRef}
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
        <HeaderTour collapseButtonRef={collapseButtonRef} fullScreenButtonRef={fullScreenButtonRef} />
        <Language fullScreenButtonRef={fullScreenButtonRef} />
        <FullScreen />
        <UserButton />
        <HeaderSetting
          showFooter={showFooter}
          handleToShowFooter={handleToShowFooter}
          showMenuLogo={showMenuLogo}
          handleToShowMenuLogo={handleToShowMenuLogo}
        />
      </div>
    </Header>
  );
};

export default MainHeader;
