import "./FullScreen.scss";
import React, { useState } from "react";
import { Button } from "antd";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";

const HeaderSetting: React.FC = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const handleToFullScreen = () => {
    if (!fullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  return (
    <>
      <Button
        className="fullscreen-button"
        type="text"
        icon={fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        onClick={handleToFullScreen}
      />
    </>
  );
};

export default HeaderSetting;
