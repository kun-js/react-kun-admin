import "./word.scss";
import React from "react";
import { Card } from "antd";
import FileViewer from "react-file-viewer";
import docxFile from "@/assets/documents/test.docx";

const type = "docx";

const WordPreview: React.FC = () => {
  return (
    <>
      <div className="word-container">
        <Card className="card-container" title="Word预览功能示例" bordered={false}>
          <FileViewer fileType={type} filePath={docxFile} />
        </Card>
      </div>
    </>
  );
};

export default WordPreview;
