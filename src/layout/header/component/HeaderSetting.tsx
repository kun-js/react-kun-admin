import "./HeaderSetting.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Drawer, Flex, Switch, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import useDarkModeStore from "@/store/dark";

const { Text } = Typography;

interface HeaderSettingProps {
  showFooter: boolean;
  handleToShowFooter: (value: boolean) => void;
  showMenuLogo: boolean;
  handleToShowMenuLogo: (value: boolean) => void;
  showBreadcrumb: boolean;
  handleToShowBreadcrumb: (value: boolean) => void;
  showBreadcrumbIcon: boolean;
  handleToShowBreadcrumbIcon: (value: boolean) => void;
}

const HeaderSetting: React.FC<HeaderSettingProps> = ({
  showFooter,
  handleToShowFooter,
  showMenuLogo,
  handleToShowMenuLogo,
  showBreadcrumb,
  handleToShowBreadcrumb,
  showBreadcrumbIcon,
  handleToShowBreadcrumbIcon,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const navigate = useNavigate();

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const ClearCacheAndExit = () => {
    navigate("/login");
    localStorage.clear();
    sessionStorage.clear();
  };

  const onClickToSetDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  const onClickToShowFooter = (checked: boolean) => {
    handleToShowFooter(checked);
  };

  const onClickToShowMenuLogo = (checked: boolean) => {
    handleToShowMenuLogo(checked);
  };

  const onClickToShowBreadcrumb = (checked: boolean) => {
    handleToShowBreadcrumb(checked);
  };

  const onClickToShowBreadcrumbIcon = (checked: boolean) => {
    handleToShowBreadcrumbIcon(checked);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    document.documentElement.setAttribute("data-height", showFooter ? "hasFooter" : "noFooter");
  }, [isDarkMode, showFooter]);

  return (
    <>
      <Button className="setting-button" type="text" icon={<SettingOutlined />} onClick={showDrawer} />

      <Drawer title="设置" onClose={onClose} open={drawerOpen}>
        <div className="drawer-container">
          <div className="top-action">
            <Divider>界面展示</Divider>
            <Flex gap="middle" vertical>
              <div className="top-action-item">
                <Text>暗黑模式</Text>
                <Switch checkedChildren="开" unCheckedChildren="关" value={isDarkMode} onClick={onClickToSetDarkMode} />
              </div>
              <div className="top-action-item">
                <Text>页脚</Text>
                <Switch checkedChildren="开" unCheckedChildren="关" value={showFooter} onClick={onClickToShowFooter} />
              </div>
              <div className="top-action-item">
                <Text>Logo</Text>
                <Switch
                  checkedChildren="开"
                  unCheckedChildren="关"
                  value={showMenuLogo}
                  onClick={onClickToShowMenuLogo}
                />
              </div>
              <div className="top-action-item">
                <Text>面包屑</Text>
                <Switch
                  checkedChildren="开"
                  unCheckedChildren="关"
                  value={showBreadcrumb}
                  onClick={onClickToShowBreadcrumb}
                />
              </div>
              <div className="top-action-item">
                <Text>面包屑图标</Text>
                <Switch
                  checkedChildren="开"
                  unCheckedChildren="关"
                  value={showBreadcrumbIcon}
                  onClick={onClickToShowBreadcrumbIcon}
                />
              </div>
            </Flex>
          </div>
          <div className="bottom-action">
            <Divider />
            <Button type="primary" danger onClick={ClearCacheAndExit}>
              清空缓存并退出至登录页
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderSetting;
