import "./excel.scss";
import React from "react";
import { Card } from "antd";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

const ExcelPreview: React.FC = () => {
  const file = [{ uri: "http://static.shanhuxueyuan.com/demo/excel.xlsx" }];

  return (
    <>
      <div className="excel-container">
        <Card className="card-container" title="Excel文件预览功能示例">
          <DocViewer
            config={{
              header: {
                disableHeader: true,
                disableFileName: true,
              },
            }}
            documents={file}
            pluginRenderers={DocViewerRenderers}
            style={{ height: "80vh" }}
          />
        </Card>
      </div>
    </>
  );
};

export default ExcelPreview;
