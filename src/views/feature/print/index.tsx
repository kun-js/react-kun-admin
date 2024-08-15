import "./print.scss";
import React, { useRef } from "react";
import { Button, Card } from "antd";

import { useReactToPrint } from "react-to-print";

const PrintFeature: React.FC = () => {
  const containerPrintRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => containerPrintRef.current,
  });

  return (
    <>
      <div className="print-container">
        <Card className="card-container" title="打印功能示例">
          <div ref={containerPrintRef}>
            <h1>要打印的内容</h1>
            <p>这是一个示例，展示如何使用react-to-print来打印内容。</p>
          </div>
          <Button type="primary" onClick={handlePrint}>
            打印
          </Button>
        </Card>
      </div>
    </>
  );
};

export default PrintFeature;
