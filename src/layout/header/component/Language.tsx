import { TranslationOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import useLanguageStore from "@/store/language";
import "./Language.scss";
import { RefObject } from "react";

interface HeaderLanguageProps {
  fullScreenButtonRef: RefObject<HTMLButtonElement>;
}

const HeaderSetting: React.FC<HeaderLanguageProps> = ({ fullScreenButtonRef }) => {
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
        <Button ref={fullScreenButtonRef} className="language-button" type="text" icon={<TranslationOutlined />} />
      </Popover>
    </>
  );
};

export default HeaderSetting;
