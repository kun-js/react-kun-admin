import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import "./FullScreen.scss";

const HeaderSetting: React.FC = () => {
  const [fullScreen, setFullScreen] = useState(false);

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
