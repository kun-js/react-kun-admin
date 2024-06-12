import "./sidebar.scss";
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { getMenuList } from "@/api/index";
import { HomeOutlined, NodeIndexOutlined, PictureOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useMenuStore from "@/store/menu";

const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
}

interface MenuItem {
  id: number;
  title: string;
  routeName: string;
  iconName: string;
  children?: SubMenuItem[];
}

interface SubMenuItem {
  id: number;
  title: string;
  routeName: string;
}

// 定义图标映射类型，用于映射图标名称到图标组件
type IconMap = {
  [key: string]: React.ComponentType;
};

const SideBar: React.FC<SideBarProps> = ({ collapsed }) => {
  const navigate = useNavigate();
  const { setDefaultSelectedKey, setDefaultOpenKey } = useMenuStore();
  const [menuList, setMenuList] = useState([]);

  const iconMap: IconMap = {
    HomeOutlined: HomeOutlined,
    NodeIndexOutlined: NodeIndexOutlined,
    PictureOutlined: PictureOutlined,
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

  const fetchData = async () => {
    try {
      const result = await getMenuList();
      const list = result.menus.map((item: MenuItem) => ({
        key: item.routeName,
        label: item.title,
        icon: item.iconName ? React.createElement(iconMap[item.iconName]) : null,
        children: item.children?.map((child: SubMenuItem) => ({
          key: child.routeName,
          label: child.title,
        })),
      }));
      setMenuList(list);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMenuClick = (info: { key: string; keyPath: string[] }) => {
    // console.log("info: ", info);
    setDefaultSelectedKey([info.key]);
    setDefaultOpenKey(info.keyPath.slice(-1));
    const path = arrayToPath(info.keyPath);
    navigate(path);
  };

  return (
    <Sider breakpoint="lg" collapsed={collapsed}>
      <div className="logo">
        <div className="logo-pic"></div>
        {!collapsed && <div className="logo-title">Kun Admin</div>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKey}
        defaultOpenKeys={defaultOpenKey}
        onClick={handleMenuClick}
        items={menuList}
      />
    </Sider>
  );
};

export default SideBar;
