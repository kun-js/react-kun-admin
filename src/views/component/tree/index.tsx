import "./tree.scss";
import React, { useState, useEffect } from "react";
import { Card, Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";

import { getMenuList } from "@/api/index";

interface MenuItem {
  id: number;
  title: string;
  iconName: string;
  routeName: string;
  children?: SubMenuItem[];
}

// 子菜单项接口，与 MenuItem 相同结构
interface SubMenuItem extends MenuItem {}

interface MenuListItem {
  key: string;
  title: string;
  children?: MenuListItem[];
}

const TreeComponent: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeDataNode[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand: TreeProps["onExpand"] = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue as React.Key[]);
  };

  const onSelect: TreeProps["onSelect"] = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  const transformMenuItem = (item: MenuItem): MenuListItem => {
    const menu: MenuListItem = {
      key: item.routeName,
      title: item.title,
    };
    // 如果存在子菜单，递归处理
    if (item.children && item.children.length > 0) {
      menu.children = item.children.map(transformMenuItem);
    }
    return menu;
  };

  const fetchData = async () => {
    try {
      const result = await getMenuList();
      const list = result.menus.map((item: MenuItem) => ({
        key: item.routeName,
        title: item.title,
        // 只有当存在子菜单时才添加 children 属性
        children: item.children ? item.children.map((child) => transformMenuItem(child)) : null,
      }));
      setExpandedKeys(["component"]);
      setCheckedKeys(["tree"]);
      setTreeData(list);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="tree-container">
        <Card className="card-container" title="树形组件" bordered={false}>
          <Tree
            checkable
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            treeData={treeData}
          />
        </Card>
      </div>
    </>
  );
};

export default TreeComponent;
