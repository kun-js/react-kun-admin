import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

interface MainFooterProps {
  showFooter: boolean;
}

const MainFooter: React.FC<MainFooterProps> = ({ showFooter }) => {
  return (
    <>
      {showFooter && (
        <Footer style={{ textAlign: "center" }}>Kun Admin ©{new Date().getFullYear()} Created by Xiao Hei Zi</Footer>
      )}
    </>
  );
};

export default MainFooter;
