import React from "react";
import { Card, Col, Row } from "antd";
import { Icon } from "@iconify/react";
import "./Project.scss";

interface Project {
  id: number;
  icon: string;
  name: string;
  introduce: string;
  team: string;
  time: string;
}

const projectList: Project[] = [
  {
    id: 1,
    icon: "logos:vue",
    name: "Vue",
    introduce: "易学易用，性能出色，适用场景丰富的 Web 前端框架",
    team: "前端开发",
    time: "2013-02-01",
  },
  {
    id: 2,
    icon: "logos:react",
    name: "React",
    introduce: "用于构建 Web 和原生交互界面的库",
    team: "前端开发",
    time: "2013-05-29",
  },
  {
    id: 3,
    icon: "vscode-icons:file-type-angular",
    name: "Angular",
    introduce: "构建未来的 Web 开发框架",
    team: "前端开发",
    time: "2010-10-20",
  },
  {
    id: 4,
    icon: "devicon:svelte",
    name: "Svelte",
    introduce: "一个构建 web 应用程序的工具",
    team: "前端开发",
    time: "2016-11-27",
  },
  {
    id: 5,
    icon: "logos:solid",
    name: "Solid",
    introduce: "一个用于构建用户界面，简单高效、性能卓越的JavaScript库",
    team: "前端开发",
    time: "2020-09-14",
  },
  {
    id: 6,
    icon: "devicon:qwik",
    name: "Qwik",
    introduce: "为edge而生的框架",
    team: "前端开发",
    time: "2020-04-27",
  },
];

const Project: React.FC = () => {
  return (
    <>
      <div className="project-container">
        <Card title="项目" className="project-card" bordered={false}>
          <Row>
            {projectList.map((item) => (
              <Col className="gutter-row" span={8} key={item.id}>
                <Card className="project-item-card" bordered={true}>
                  <div className="project">
                    <div className="project-title">
                      <div className="project-title-icon">
                        <Icon icon={item.icon} width={32} height={32} />
                      </div>
                      <div className="project-title-name">{item.name}</div>
                    </div>
                    <div className="project-introduce">{item.introduce}</div>
                    <div className="project-footer">
                      <div className="project-footer-team">{item.team}</div>
                      <div className="project-footer-time">{item.time}</div>
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

export default Project;
