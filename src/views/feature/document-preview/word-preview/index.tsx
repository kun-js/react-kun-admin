import "./word.scss";
import React from "react";
import { Card } from "antd";
import FileViewer from "react-file-viewer";

const docxFile: string = "http://static.shanhuxueyuan.com/test6.docx";

const WordPreview: React.FC = () => {
  return (
    <>
      <div className="word-container">
        <Card className="card-container" title="Word预览功能示例">
          <FileViewer fileType={"docx"} filePath={docxFile} />
        </Card>
      </div>
    </>
  );
};

export default WordPreview;
