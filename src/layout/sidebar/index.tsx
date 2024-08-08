import "./sidebar.scss";
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { getMenuList } from "@/api/index";
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
import { useNavigate } from "react-router-dom";
import useMenuStore from "@/store/menu";

import { useTranslation } from "react-i18next";

const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
  showMenuLogo: boolean;
}

// 菜单项接口，包括子菜单
interface MenuItem {
  id: number;
  title: string;
  iconName: string;
  routeName: string;
  children?: SubMenuItem[];
}

// 子菜单项接口，与 MenuItem 相同结构
interface SubMenuItem extends MenuItem {}

// 用于 Ant Design Menu 的菜单项类型
interface MenuListItem {
  key: string;
  label: string;
  icon?: React.ReactElement;
  children?: MenuListItem[];
}

// 定义图标映射类型，用于映射图标名称到图标组件
type IconMap = {
  [key: string]: React.ComponentType;
};

const SideBar: React.FC<SideBarProps> = ({ collapsed, showMenuLogo }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setDefaultSelectedKey, setDefaultOpenKey } = useMenuStore();
  const [menuList, setMenuList] = useState<MenuListItem[]>([]);

  const iconMap: IconMap = {
    HomeOutlined: HomeOutlined,
    KeyOutlined: KeyOutlined,
    BookOutlined: BookOutlined,
    NodeIndexOutlined: NodeIndexOutlined,
    PictureOutlined: PictureOutlined,
    PieChartOutlined: PieChartOutlined,
    DesktopOutlined: DesktopOutlined,
    SettingOutlined: SettingOutlined,
    UserOutlined: UserOutlined,
  };

  const [defaultSelectedKey] = useState(() => {
    const result = JSON.parse(localStorage.getItem("menuStore")!).state.defaultSelectedKey;
    return result;
  });

  const [defaultOpenKey] = useState(() => {
    const result = JSON.parse(localStorage.getItem("menuStore")!).state.defaultOpenKey;
    return result;
  });

  const arrayToPath = (array: string[]): string => {
    return "/" + array.reverse().join("/");
  };

  const backToDashboard = () => {
    navigate("/dashboard/analysis");
    setDefaultSelectedKey(["analysis"]);
    setDefaultOpenKey(["dashboard"]);
  };

  const fetchData = async () => {
    try {
      const result = await getMenuList();
      const list = result.menus.map((item: MenuItem) => ({
        key: item.routeName,
        // label: item.title,
        label: t(`menu.${item.routeName}`),
        icon: item.iconName ? React.createElement(iconMap[item.iconName]) : null,
        // 只有当存在子菜单时才添加 children 属性
        children: item.children ? item.children.map((child) => transformMenuItem(child)) : null,
      }));

      setMenuList(list);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // 递归转换函数
  const transformMenuItem = (item: MenuItem): MenuListItem => {
    // 确定图标组件是否存在，使用 React.createElement 创建图标元素
    const iconElement = item.iconName ? React.createElement(iconMap[item.iconName]) : undefined;

    const menu: MenuListItem = {
      key: item.routeName,
      // label: item.title,
      label: t(`menu.${item.routeName}`),
      icon: iconElement, // 使用 iconElement 而不是直接从 iconMap 获取的组件
    };

    // 如果存在子菜单，递归处理
    if (item.children && item.children.length > 0) {
      menu.children = item.children.map(transformMenuItem);
    }

    return menu;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMenuClick = (info: { key: string; keyPath: string[] }) => {
    const selectKey = [info.key];
    const openKey = info.keyPath.length === 2 ? [info.keyPath[1]] : [info.keyPath[1], info.keyPath[2]];
    setDefaultSelectedKey(selectKey);
    setDefaultOpenKey(openKey);
    const path = arrayToPath(info.keyPath);
    if (info.key === "about") {
      navigate(`${path}/index`);
    } else {
      navigate(path);
    }
  };

  return (
    <Sider
      style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }}
      breakpoint="xs"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      {showMenuLogo && (
        <div className="logo" onClick={backToDashboard}>
          <div className="logo-container">
            <div className="logo-pic"></div>
            {!collapsed && <span className="logo-text">Kun Admin</span>}
          </div>
        </div>
      )}
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={defaultOpenKey}
        defaultSelectedKeys={defaultSelectedKey}
        onClick={handleMenuClick}
        items={menuList}
      />
    </Sider>
  );
};

export default SideBar;
