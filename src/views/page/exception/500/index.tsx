import React from "react";
import { Button, Result } from "antd";
import "./page500.scss";

const Page500: React.FC = () => {
  return (
    <>
      <div className="page-exception-container">
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    </>
  );
};

export default Page500;
