import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Popover } from "antd";

interface UserInfo {
  avatar: string;
  name: string;
}

const UserButton: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    name: "昵称",
  });

  const handleToExit = () => {
    navigate("/login");
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
        <Button className="user-button" type="text">
          <Avatar src={userInfo.avatar} />
          <div className="user-name">{userInfo.name}</div>
        </Button>
      </Popover>
    </>
  );
};

export default UserButton;
