import "./page404.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import useMenuStore from "@/store/menu";

const Page404: React.FC = () => {
  const navigate = useNavigate();
  const { setDefaultSelectedKey, setDefaultOpenKey } = useMenuStore();

  return (
    <>
      <div className="page-exception-container">
        <Result
          status="404"
          title="404"
          subTitle="抱歉,你访问的页面不存在!"
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

export default Page404;
