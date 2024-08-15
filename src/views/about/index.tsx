import "./about.scss";
import React, { useEffect, useState, useMemo } from "react";
import { Card, Tag, Descriptions, Typography } from "antd";
import type { DescriptionsProps } from "antd";
import { getDateTime } from "@/utils/getDateTime";
import dependenciesJSON from "./dependencies.json";

const { Link } = Typography;

interface DependencyItem {
  label: string;
  children: string;
}

const About: React.FC = () => {
  const [currentTime, setCurrentTIme] = useState<string>("");
  const [dependencies, setDependencies] = useState<DependencyItem[]>([]);
  const [devDependencies, setDevDependencies] = useState<DependencyItem[]>([]);
  const projectInfoItems: DescriptionsProps["items"] = [
    {
      label: "当前版本",
      children: <Tag color="processing">0.0.1</Tag>,
    },
    {
      label: "最后编译时间",
      children: <Tag color="processing">{currentTime}</Tag>,
    },
    {
      label: "node版本建议",
      children: <Tag color="processing">&gt;=18.16.0</Tag>,
    },
    {
      label: "pnpm版本建议",
      children: <Tag color="processing">&gt;=8.15.0</Tag>,
    },
    {
      label: "代码仓库",
      children: (
        <Link href="https://github.com/kun-js/react-kun-admin" target="_blank">
          Github
        </Link>
      ),
    },
  ];

  const dependenciesArray = useMemo(
    () =>
      Object.entries(dependenciesJSON.dependencies).map(([name, version]) => ({
        label: name,
        children: version,
      })),
    []
  );

  const devDependenciesArray = useMemo(
    () =>
      Object.entries(dependenciesJSON.devDependencies).map(([name, version]) => ({
        label: name,
        children: version,
      })),
    []
  );

  useEffect(() => {
    setCurrentTIme(getDateTime(4));
    setDependencies(dependenciesArray);
    setDevDependencies(devDependenciesArray);
  }, []);

  return (
    <>
      <div className="about-container">
        <Card title="关于" style={{ borderRadius: 0 }}>
          <Tag color="processing">react-kun-admin</Tag>是一款基于React18、Ant Design、TypeScript的中后台解决方案。
        </Card>
        <div className="project-info-container">
          <Card>
            <Descriptions title="项目信息" bordered={true} size={"small"} column={2} items={projectInfoItems} />
          </Card>
          <Card style={{ marginTop: "20px" }}>
            <Descriptions title="生产环境依赖" bordered={true} size={"small"} column={3} items={dependencies} />
          </Card>
          <Card style={{ marginTop: "20px" }}>
            <Descriptions title="开发环境依赖" bordered={true} size={"small"} column={3} items={devDependencies} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
