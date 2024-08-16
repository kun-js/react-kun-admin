import "./page403.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import useMenuStore from "@/store/menu";

const Page403: React.FC = () => {
  const navigate = useNavigate();
  const { setDefaultSelectedKey, setDefaultOpenKey } = useMenuStore();

  return (
    <>
      <div className="page-exception-container">
        <Result
          status="403"
          title="403"
          subTitle="抱歉,你无权访问页面!"
          extra={
            <Button
              type="primary"
              onClick={() => {
                navigate("/dashboard/analysis");
                setDefaultSelectedKey(["analysis"]);
                setDefaultOpenKey(["dashboard"]);
              }}
            >
              返回首页
            </Button>
          }
        />
      </div>
    </>
  );
};

export default Page403;
