import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ExternalLink: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 确保 window 对象存在
    if (typeof window !== "undefined") {
      const openExternalLink = () => {
        let url;
        if (location.pathname === "/external/outerchain/react-outerchain") {
          url = "https://react.docschina.org/";
        } else if (location.pathname === "/external/outerchain/antd-outerchain") {
          url = "https://ant-design.antgroup.com/index-cn";
        }

        if (url) {
          const newWindow = window.open(url, "_blank");
          if (newWindow) {
            newWindow.focus();
          } else {
            console.error("无法打开新标签页。可能被浏览器弹出窗口拦截。");
          }
        }
      };
      openExternalLink();
    }
    navigate(-1);
  }, [location]);

  return null;
};

export default ExternalLink;
