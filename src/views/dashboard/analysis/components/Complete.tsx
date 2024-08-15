import "./Complete.scss";
import { Card, Space, Progress } from "antd";

const Complete: React.FC = () => {
  return (
    <>
      <div className="complete-container">
        <Card className="card-container" title="项目进度">
          <Space direction="vertical" size={12} style={{ display: "flex" }}>
            <div className="progress-item">
              <span className="progress-item-text">周日</span>
              <Progress percent={100} status="success" />
            </div>
            <div className="progress-item">
              <span className="progress-item-text">周六</span>
              <Progress percent={90} status="active" />
            </div>
            <div className="progress-item">
              <span className="progress-item-text">周五</span>
              <Progress percent={70} status="active" />
            </div>
            <div className="progress-item">
              <span className="progress-item-text">周四</span>
              <Progress percent={50} status="active" />
            </div>
            <div className="progress-item">
              <span className="progress-item-text">周三</span>
              <Progress percent={30} status="active" strokeColor={"#e6a23c"} />
            </div>
            <div className="progress-item">
              <span className="progress-item-text">周二</span>
              <Progress percent={20} status="active" strokeColor={"#e6a23c"} />
            </div>
            <div className="progress-item">
              <span className="progress-item-text">周一</span>
              <Progress percent={10} status="active" strokeColor={"#ff4d4f"} />
            </div>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default Complete;
