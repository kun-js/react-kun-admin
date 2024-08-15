import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const HeaderSearch: React.FC = () => {
  return (
    <>
      <Button className="search-button" type="text" icon={<SearchOutlined />} disabled />
    </>
  );
};

export default HeaderSearch;
