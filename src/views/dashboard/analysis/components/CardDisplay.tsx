import "./CardDisplay.scss";
import { Card } from "antd";
import VisitNumber from "@/assets/imgs/VisitNumber.png";
import Download from "@/assets/imgs/Download.png";
import DealAmount from "@/assets/imgs/DealAmount.png";
import DealNumber from "@/assets/imgs/DealNumber.png";

type AnalysisCard = {
  id: number;
  title: string;
  time: string;
  text: string;
  iconType: string;
  total: string;
  number: string;
};

interface CardItem {
  item: AnalysisCard;
}

const CardDisplay: React.FC<CardItem> = ({ item }) => {
  const images: { [key: string]: string } = {
    "1": VisitNumber,
    "2": Download,
    "3": DealAmount,
    "4": DealNumber,
  };

  return (
    <>
      <Card
        title={
          <div className="card-header">
            <span className="card-header-title">{item.title}</span>
          </div>
        }
        bordered={true}
        hoverable={true}
      >
        <div className="card-body">
          <div className="card-body-text">{item.text}</div>
          <div className="card-body-icon">
            <img className="icon" src={images[item.iconType]} alt="" />
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-total">{item.total}</div>
          <div className="card-footer-number">{item.number}</div>
        </div>
      </Card>
    </>
  );
};

export default CardDisplay;
