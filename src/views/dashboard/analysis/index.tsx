import "./analysis.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { getAnalysisCardList } from "@/api/index";

import CardDisplay from "./components/CardDisplay";
import AnalysisChart from "./components/AnalysisChart";
import Complete from "./components/Complete";

interface AnalysisCard {
  id: number;
  title: string;
  time: string;
  text: string;
  iconType: string;
  total: string;
  number: string;
}

const Analysis: React.FC = () => {
  const [cardList, setCardList] = useState<AnalysisCard[]>([]);

  const fetchData = async () => {
    try {
      const result = await getAnalysisCardList();
      const list = result.analysisCardList;
      setCardList(list);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="analysis-container">
        <div className="card-container">
          <Row gutter={16}>
            {cardList.map((item) => (
              <Col key={item.id} span={6}>
                <CardDisplay item={item} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="progress-container">
          <Row gutter={16}>
            <Col span={18}>
              <AnalysisChart />
            </Col>
            <Col span={6}>
              <Complete />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Analysis;
