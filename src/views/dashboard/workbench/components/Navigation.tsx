import React from "react";
import { Card, Col, Row } from "antd";

import { Icon } from "@iconify/react";
import "./Navigation.scss";

interface NavigationListType {
  id: number;
  icon: string;
  name: string;
}

const navigationList: NavigationListType[] = [
  { id: 1, icon: "noto:house", name: "首页" },
  { id: 2, icon: "noto:closed-book", name: "组件" },
  { id: 3, icon: "noto:dna", name: "功能" },
  { id: 4, icon: "emojione:bar-chart", name: "图表" },
  { id: 5, icon: "noto-v1:gear", name: "系统管理" },
  { id: 6, icon: "noto:locked-with-key", name: "权限管理" },
];

const Navigation: React.FC = () => {
  return (
    <>
      <div className="navigation-container">
        <Card title="快捷导航" className="navigation-card">
          <Row>
            {navigationList.map((item) => (
              <Col className="gutter-row" span={8} key={item.id}>
                <Card className="navigation-item-card" bordered={true} hoverable>
                  <div className="navigation">
                    <div className="navigation-title">
                      <div className="navigation-title-icon">
                        <Icon style={{ fontSize: "24px" }} icon={item.icon} />
                      </div>
                      <div className="navigation-title-name">{item.name}</div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Navigation;
