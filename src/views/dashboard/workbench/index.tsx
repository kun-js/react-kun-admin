import React, { useEffect, useState } from "react";
import "./workbench.scss";
import { Avatar, Card, Space, Typography } from "antd";
const { Text } = Typography;

interface UserInfo {
  name: string;
  avatar: string;
}

const Workbench: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("userStore")!);
    setUserInfo(result.state.userInfo);
  });
  return (
    <>
      <div className="workbench-container">
        <div className="personal">
          <Card className="personal-card-container" bordered={false}>
            <div className="personal-info">
              <div className="left">
                <Avatar size={80} src={userInfo.avatar} />
                <div className="info">
                  <div className="greeting">
                    <Text strong style={{ fontSize: "22px" }}>
                      你好,{userInfo.name},祝您今天工作愉快
                    </Text>
                  </div>
                  <div className="weather">
                    <Text style={{ fontSize: "14px" }}>偶像练习生 | 当前天气: 晴, 温度: 31°C</Text>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="task-info">
                  <Space size={18}>
                    <div className="task-info-item">
                      <div className="task-info-item-title">待办事项</div>
                      <div className="task-info-item-number">0/10</div>
                    </div>
                    <div className="task-info-item">
                      <div className="task-info-item-title">未读消息</div>
                      <div className="task-info-item-number">18</div>
                    </div>
                    <div className="task-info-item">
                      <div className="task-info-item-title">团队人数</div>
                      <div className="task-info-item-number">30</div>
                    </div>
                  </Space>
                </div>
                .
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Workbench;
