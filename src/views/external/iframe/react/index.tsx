import React from "react";
import { Card } from "antd";
import "./reactpage.scss";

const ReactPage: React.FC = () => {
  return (
    <>
      <div className="react-page-container">
        <Card className="card-container" bordered={false}>
          <iframe title="Antd内嵌页" src="https://react.docschina.org/" width="100%" height="100%"></iframe>
        </Card>
      </div>
    </>
  );
};

export default ReactPage;
