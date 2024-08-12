import "./HeaderBreadcrumb.scss";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Flex } from "antd";
import { useLocation } from "react-router-dom";
import {
  HomeOutlined,
  KeyOutlined,
  BookOutlined,
  NodeIndexOutlined,
  PictureOutlined,
  PieChartOutlined,
  DesktopOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface HeaderBreadcrumbProps {
  showBreadcrumb: boolean;
  showBreadcrumbIcon: boolean;
}

type TitleObject = { title: JSX.Element };

type IconMap = {
  [key: string]: React.ReactElement;
};

const HeaderBreadcrumb: React.FC<HeaderBreadcrumbProps> = ({ showBreadcrumb, showBreadcrumbIcon }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [breadcrumbList, setBreadcrumbList] = useState<TitleObject[]>([]);

  const iconMap: IconMap = {
    dashboard: <HomeOutlined />,
    permission: <KeyOutlined />,
    component: <BookOutlined />,
    feature: <NodeIndexOutlined />,
    page: <PictureOutlined />,
    chart: <PieChartOutlined />,
    external: <DesktopOutlined />,
    system: <SettingOutlined />,
    about: <UserOutlined />,
  };

  const transformPathToTitleArray = (path: string): TitleObject[] => {
    let currentPath = path;
    if (path === "/about/index") {
      currentPath = "/about";
    }
    // 将路径按 '/' 分割成段，并过滤掉空字符串
    const segments = currentPath.split("/").filter((segment) => segment.length > 0);
    // 使用 map 函数将每个段转换成一个具有 title 属性的对象
    const titleArray = segments.map((segment) => {
      const titleKey = `menu.${segment}`;
      const title = t(titleKey);
      const Icon = iconMap[segment] || null;
      return {
        title: (
          <>
            <Flex gap="small">
              {showBreadcrumbIcon && Icon}
              {title}
            </Flex>
          </>
        ),
      };
    });
    return titleArray;
  };

  useEffect(() => {
    const path = location.pathname;
    const titleArray = transformPathToTitleArray(path);
    setBreadcrumbList(titleArray);
  }, [location.pathname, showBreadcrumbIcon]);

  return <>{showBreadcrumb && <Breadcrumb className="breadcrumb" items={breadcrumbList} />}</>;
};

export default HeaderBreadcrumb;
