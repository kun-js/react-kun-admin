import { TranslationOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import useLanguageStore from "@/store/language";
import "./Language.scss";

const HeaderSetting: React.FC = () => {
  const { changeLanguage } = useLanguageStore();

  const langButtonDisabled = JSON.parse(localStorage.getItem("languageStore")!).state.lang === "zh";

  const langContent = (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button type="text" onClick={() => handleToChangeLang("zh")} disabled={langButtonDisabled}>
          简体中文
        </Button>
        <Button type="text" onClick={() => handleToChangeLang("en")} disabled={!langButtonDisabled}>
          English
        </Button>
      </div>
    </>
  );

  const handleToChangeLang = (lang: string) => {
    changeLanguage(lang);
    window.location.reload();
  };

  return (
    <>
      <Popover content={langContent} trigger="click">
        <Button className="language-button" type="text" icon={<TranslationOutlined />} />
      </Popover>
    </>
  );
};

export default HeaderSetting;
