import { Avatar, Button, Popover } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  avatar: string;
  name: string;
}

const UserButton: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({ avatar: "", name: "" });

  const handleToExit = () => {
    navigate("/");
    localStorage.removeItem("userStore");
  };

  const userContent = (
    <Button type="text" onClick={handleToExit}>
      退出系统
    </Button>
  );

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("userStore") || "{}").state.userInfo;
    setUserInfo(result);
  }, []);

  return (
    <>
      <Popover content={userContent} trigger="hover">
        <div className="user-button">
          <Avatar src={userInfo.avatar} />
          <div className="user-name">{userInfo.name}</div>
        </div>
      </Popover>
    </>
  );
};

export default UserButton;
