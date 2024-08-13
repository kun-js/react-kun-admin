import "./statistic.scss";
import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const { Countdown } = Statistic;

const StatisticComponent: React.FC = () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2;

  return (
    <>
      <div className="statistic-container">
        <Card className="card-container" title="统计组件">
          <Row className="statistic-container" gutter={16}>
            <Col className="statistic-item" span={6}>
              <Statistic title="使用人数" value={112893} />
            </Col>
            <Col className="statistic-item" span={6}>
              <Statistic title="好评数" value={1128} prefix={<LikeOutlined />} />
            </Col>
            <Col className="statistic-item" span={6}>
              <Countdown title="剩余时间" value={deadline} format="HH:mm:ss:SSS" />
            </Col>
            <Col className="statistic-item" span={6}>
              <Countdown title="剩余天数" value={deadline} format="D天 H时m分s秒" />
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default StatisticComponent;
