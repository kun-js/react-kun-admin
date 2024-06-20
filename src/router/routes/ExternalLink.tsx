import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ExternalLink: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 确保 window 对象存在
    if (
      typeof window !== "undefined" &&
      (location.pathname === "/external/outerchain/react-outerchain" ||
        location.pathname === "/external/outerchain/antd-outerchain")
    ) {
      if (location.pathname === "/external/outerchain/react-outerchain") {
        const url = "https://react.docschina.org/";
        const newWindow = window.open(url, "_blank");
        if (newWindow) {
          newWindow.focus();
          navigate(-1);
        } else {
          console.error("无法打开新标签页。可能被浏览器弹出窗口拦截。");
        }
      }
      if (location.pathname === "/external/outerchain/antd-outerchain") {
        const url = "https://ant-design.antgroup.com/index-cn";
        const newWindow = window.open(url, "_blank");
        if (newWindow) {
          newWindow.focus();
          navigate(-1);
        } else {
          console.error("无法打开新标签页。可能被浏览器弹出窗口拦截。");
        }
      }
    }
  }, [location]);

  return <div>Auto Open External Link</div>;
};

export default ExternalLink;
