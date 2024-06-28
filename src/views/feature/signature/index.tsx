import "./signature.scss";
import React, { useRef, useState } from "react";
import { Card, Space, ColorPicker, Slider, Button } from "antd";
import type { InputNumberProps } from "antd";
import SignatureCanvas from "react-signature-canvas";

const Signature: React.FC = () => {
  const signatureRef = useRef(null);
  const [penColor, setPenColor] = useState<string>("#000000");
  const [penWidth, setPenWidth] = useState<number>(6);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState<boolean>(true);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setPenWidth(newValue as number);
  };

  const onBegin = () => {
    if (signatureRef.current) {
      setIsCanvasEmpty(false); // 开始绘制时，画布不再为空
    }
  };

  const downloadCanvas = () => {
    if (signatureRef.current) {
      const base64Img = (signatureRef.current as SignatureCanvas).getTrimmedCanvas().toDataURL();
      const link = document.createElement("a");
      link.download = "signature.png";
      link.href = base64Img;
      link.click();
    }
  };

  const clearCanvas = () => {
    if (signatureRef.current) {
      (signatureRef.current as SignatureCanvas).clear();
      setIsCanvasEmpty(true);
    }
  };

  return (
    <>
      <div className="signature-container">
        <Card className="card-container" title="电子签名功能示例" bordered={false}>
          <Space direction="vertical">
            <SignatureCanvas
              ref={signatureRef}
              penColor={penColor}
              minWidth={penWidth}
              maxWidth={penWidth}
              onBegin={onBegin}
              canvasProps={{ className: "signature-canvas" }}
            />
            <div className="action-container">
              <span className="title">画笔颜色:</span>
              <ColorPicker
                value={penColor}
                allowClear
                onChange={(c) => {
                  setPenColor(c.toHexString());
                }}
              />
            </div>
            <div className="action-container">
              <span className="title">画笔粗细:</span>
              <Slider
                style={{ width: "50%" }}
                min={1}
                max={20}
                onChange={onChange}
                value={typeof penWidth === "number" ? penWidth : 0}
              />
            </div>
            <div className="action-container">
              <Space>
                <Button type="primary" onClick={downloadCanvas} disabled={isCanvasEmpty}>
                  下载签名
                </Button>
                <Button onClick={clearCanvas}>清除画板</Button>
              </Space>
            </div>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default Signature;
