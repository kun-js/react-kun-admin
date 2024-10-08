import "./antdpage.scss";
import React from "react";
import { Card } from "antd";

const AntdPage: React.FC = () => {
  return (
    <>
      <div className="antd-page-container">
        <Card className="card-container">
          <iframe title="Antd内嵌页" src="https://ant-design.antgroup.com/" width="100%" height="100%"></iframe>
        </Card>
      </div>
    </>
  );
};

export default AntdPage;
