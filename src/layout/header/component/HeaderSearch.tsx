import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeaderSearch: React.FC = () => {
  return (
    <>
      <Button className="search-button" type="text" icon={<SearchOutlined />} disabled />
    </>
  );
};

export default HeaderSearch;
