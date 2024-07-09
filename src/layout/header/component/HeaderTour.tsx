import { FlagOutlined } from "@ant-design/icons";
import { Button, Tour } from "antd";
import type { TourProps } from "antd";
import { useState } from "react";
import "./HeaderTour.scss";

const HeaderTour: React.FC = () => {
  const [tourOpen, setTourOpen] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "你好!",
      description: "欢迎使用Kun Admin!",
    },
    {
      title: "折叠按钮",
      description: "点击此处可以折叠或展开侧边栏",
    },
  ];

  return (
    <>
      <Button className="tour-button" type="text" icon={<FlagOutlined />} onClick={() => setTourOpen(true)} disabled />
      <Tour open={tourOpen} onClose={() => setTourOpen(false)} steps={steps} />
    </>
  );
};

export default HeaderTour;
