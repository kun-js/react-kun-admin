import "./reactpage.scss";
import React from "react";
import { Card } from "antd";

const ReactPage: React.FC = () => {
  return (
    <>
      <div className="react-page-container">
        <Card className="card-container">
          <iframe title="Antd内嵌页" src="https://react.docschina.org/" width="100%" height="100%"></iframe>
        </Card>
      </div>
    </>
  );
};

export default ReactPage;
