import "./page500.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import useMenuStore from "@/store/menu";

const Page500: React.FC = () => {
  const navigate = useNavigate();
  const { setDefaultSelectedKey, setDefaultOpenKey } = useMenuStore();

  return (
    <>
      <div className="page-exception-container">
        <Result
          status="500"
          title="500"
          subTitle="抱歉,服务器出现错误!"
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

export default Page500;
