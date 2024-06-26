import { BellOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeaderSearch: React.FC = () => {
  return (
    <>
      <Button className="search-button" type="text" icon={<BellOutlined />} disabled />
    </>
  );
};

export default HeaderSearch;
