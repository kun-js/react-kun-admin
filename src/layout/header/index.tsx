import "./header.scss";
import React, { useCallback, useRef, useState } from "react";
import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useDarkModeStore from "@/store/dark";

import HeaderBreadcrumb from "./component/HeaderBreadcrumb";
import HeaderSearch from "./component/HeaderSearch";
import FullScreen from "./component/FullScreen";
import Language from "./component/Language";
import HeaderMessage from "./component/HeaderMessage";
import HeaderTour from "./component/HeaderTour";
import UserButton from "./component/UserButton";
import HeaderSetting from "./component/HeaderSetting";

const { Header } = Layout;

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
  const collapseButtonRef = useRef(null);
  const fullScreenButtonRef = useRef(null);
  const [showBreadcrumb, setShowBreadcrumb] = useState(true);
  const [showBreadcrumbIcon, setShowBreadcrumbIcon] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isDarkMode } = useDarkModeStore();

  const handleToShowBreadcrumb = useCallback(
    (value: boolean) => {
      setShowBreadcrumb(value);
    },
    [showBreadcrumb]
  );

  const handleToShowBreadcrumbIcon = useCallback(
    (value: boolean) => {
      setShowBreadcrumbIcon(value);
    },
    [showBreadcrumbIcon]
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
        background: colorBgContainer,
        border: isDarkMode ? "1px solid #303030" : "1px solid #f0f0f0",
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
        <HeaderBreadcrumb showBreadcrumb={showBreadcrumb} showBreadcrumbIcon={showBreadcrumbIcon} />
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
          showBreadcrumb={showBreadcrumb}
          handleToShowBreadcrumb={handleToShowBreadcrumb}
          showBreadcrumbIcon={showBreadcrumbIcon}
          handleToShowBreadcrumbIcon={handleToShowBreadcrumbIcon}
        />
      </div>
    </Header>
  );
};

export default MainHeader;
