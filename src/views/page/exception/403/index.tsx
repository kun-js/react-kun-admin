import React from "react";
import { Button, Result } from "antd";
import "./page403.scss";

const Page403: React.FC = () => {
  return (
    <>
      <div className="page-exception-container">
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    </>
  );
};

export default Page403;
