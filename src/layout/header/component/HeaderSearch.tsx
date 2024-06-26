import { BellOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeaderMessage: React.FC = () => {
  return (
    <>
      <Button className="message-button" type="text" icon={<BellOutlined />} disabled />
    </>
  );
};

export default HeaderMessage;
