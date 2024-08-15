import "./pdf.scss";
import React, { useState } from "react";
import { Button, Card, Space, Spin } from "antd";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import PdfUrl from "@/assets/documents/test.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/cjs/Page/TextLayer.css";

const PDFPreview: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null); //pdf的总页数
  const [pageNumber, setPageNumber] = useState<number>(1); //正在阅读的页码

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const changePage = (changeNumber: number) => {
    setPageNumber(pageNumber + changeNumber);
  };

  return (
    <>
      <div className="pdf-container">
        <Card className="card-container" title="PDF预览功能示例">
          <Space direction="vertical" style={{ display: "flex", alignItems: "center" }}>
            <Document
              file={PdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              error="加载预览PDF文件失败"
              loading={<Spin />}
            >
              <Page scale={1.2} pageNumber={pageNumber} />
            </Document>
            <div>
              <Space>
                <div>
                  当前页: {pageNumber} 总页数: {numPages}
                </div>
                <Button onClick={() => changePage(-1)} disabled={pageNumber === 1}>
                  上一页
                </Button>
                <Button type="primary" onClick={() => changePage(1)} disabled={pageNumber === numPages}>
                  下一页
                </Button>
              </Space>
            </div>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default PDFPreview;
