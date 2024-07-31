import "./barcode.scss";
import React from "react";
import { Card, Row, Col } from "antd";
import Barcode from "react-barcode";

const BarcodeFeature: React.FC = () => {
  return (
    <>
      <div className="barcode-container">
        <Card className="card-container" title="条形码功能示例" bordered={false}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card className="barcode-item" hoverable>
                <Barcode value={"https://www.baidu.com"} />
              </Card>
            </Col>
            <Col span={24}>
              <Card className="barcode-item" hoverable>
                <Barcode value={"https://react.docschina.org"} />
              </Card>
            </Col>
            <Col span={24}>
              <Card className="barcode-item" hoverable>
                <Barcode value={"https://ant-design.antgroup.com    "} />
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default BarcodeFeature;
