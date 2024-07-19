import "./excel.scss";
import React from "react";
import { Card } from "antd";
import FileViewer from "react-file-viewer";
import xlsxFile from "@/assets/documents/test.xlsx";

const type = "xlsx";

const ExcelPreview: React.FC = () => {
  return (
    <>
      <div className="excel-container">
        <Card className="card-container" title="Excel预览功能示例" bordered={false}>
          <FileViewer fileType={type} filePath={xlsxFile} />
        </Card>
      </div>
    </>
  );
};

export default ExcelPreview;
