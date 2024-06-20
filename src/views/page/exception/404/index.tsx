import React from "react";
import { Button, Result } from "antd";
import "./page404.scss";

const Page404: React.FC = () => {
  return (
    <>
      <div className="page-exception-container">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    </>
  );
};

export default Page404;
