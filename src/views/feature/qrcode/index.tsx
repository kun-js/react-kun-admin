import "./qrcode.scss";
import React from "react";
import { Card, Row, Col } from "antd";
import QRCode from "qrcode.react";

const QRcodeFeature: React.FC = () => {
  return (
    <>
      <div className="qrcode-container">
        <Card className="card-container" title="二维码功能示例" bordered={false}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card className="qrcode-item" hoverable>
                <QRCode value={"https://www.baidu.com"} renderAs="canvas" />
                <span>百度搜索</span>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="qrcode-item" hoverable>
                <QRCode value={"https://react.docschina.org"} renderAs="canvas" />
                <span>React官网</span>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="qrcode-item" hoverable>
                <QRCode value={"https://ant-design.antgroup.com"} renderAs="canvas" />
                <span>AntDesign官网</span>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default QRcodeFeature;
