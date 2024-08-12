import { SettingOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Flex, Switch } from "antd";
import React, { useState } from "react";
import "./HeaderSetting.scss";

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

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const ClearCacheAndExit = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
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

  return (
    <>
      <Button className="setting-button" type="text" icon={<SettingOutlined />} onClick={showDrawer} />

      <Drawer title="设置" onClose={onClose} open={drawerOpen}>
        <div className="drawer-container">
          <div className="top-action">
            <Divider>界面展示</Divider>
            <Flex gap="middle" vertical>
              <div className="top-action-item">
                <span>页脚</span>
                <Switch checkedChildren="开" unCheckedChildren="关" value={showFooter} onClick={onClickToShowFooter} />
              </div>
              <div className="top-action-item">
                <span>Logo</span>
                <Switch
                  checkedChildren="开"
                  unCheckedChildren="关"
                  value={showMenuLogo}
                  onClick={onClickToShowMenuLogo}
                />
              </div>
              <div className="top-action-item">
                <span>面包屑</span>
                <Switch
                  checkedChildren="开"
                  unCheckedChildren="关"
                  value={showBreadcrumb}
                  onClick={onClickToShowBreadcrumb}
                />
              </div>
              <div className="top-action-item">
                <span>面包屑图标</span>
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
              清空缓存并退出
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderSetting;
