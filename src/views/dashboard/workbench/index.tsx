import "./workbench.scss";
import React from "react";
import { Col, Row } from "antd";

import Personal from "./components/Personal";
import Project from "./components/Project";
import Navigation from "./components/Navigation";

const Workbench: React.FC = () => {
  return (
    <>
      <Personal />
      <div className="workbench-container">
        <Row gutter={16}>
          <Col className="gutter-row" span={18}>
            <Project />
          </Col>
          <Col className="gutter-row" span={6}>
            <Navigation />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Workbench;
