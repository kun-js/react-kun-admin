import "./HeaderTour.scss";
import { RefObject, useState } from "react";
import { Button, Tour } from "antd";
import type { TourProps } from "antd";
import { FlagOutlined } from "@ant-design/icons";

interface HeaderTourProps {
  collapseButtonRef: RefObject<HTMLButtonElement>;
  fullScreenButtonRef: RefObject<HTMLButtonElement>;
}

const HeaderTour: React.FC<HeaderTourProps> = ({ collapseButtonRef, fullScreenButtonRef }) => {
  const [tourOpen, setTourOpen] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "你好!",
      description: "欢迎使用Kun Admin!",
    },
    {
      title: "折叠按钮",
      description: "点击此处可以折叠或展开侧边栏",
      target: collapseButtonRef.current,
    },
    {
      title: "多语言切换按钮",
      description: "点击此处可以切换语言",
      target: fullScreenButtonRef.current,
    },
  ];

  return (
    <>
      <Button className="tour-button" type="text" icon={<FlagOutlined />} onClick={() => setTourOpen(true)} />
      <Tour open={tourOpen} onClose={() => setTourOpen(false)} steps={steps} />
    </>
  );
};

export default HeaderTour;
