import React from "react";
import Personal from "./components/Personal";
import Project from "./components/Project";
import { Col, Row } from "antd";
import "./workbench.scss";

const Workbench: React.FC = () => {
  return (
    <>
      <Personal />
      <div className="workbench-container">
        <Row gutter={16}>
          <Col className="gutter-row" span={18}>
            <Project />
          </Col>
          <Col className="gutter-row" span={6}></Col>
        </Row>
      </div>
    </>
  );
};

export default Workbench;
