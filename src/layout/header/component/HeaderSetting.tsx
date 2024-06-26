import { SettingOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";
import React, { useState } from "react";
import "./HeaderSetting.scss";

const HeaderSetting: React.FC = () => {
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

  return (
    <>
      <Button className="setting-button" type="text" icon={<SettingOutlined />} onClick={showDrawer} />

      <Drawer title="设置" onClose={onClose} open={drawerOpen}>
        <div className="drawer-container">
          <div className="top-action">
            <Divider>界面展示</Divider>
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
