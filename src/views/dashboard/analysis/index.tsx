import { useState, useEffect } from "react";
import { getAnalysisCardList } from "@/api/index";

interface AnalysisCard {
  id: number;
  title: string;
  // 这里可以根据实际数据结构添加更多字段
}

const Analysis = () => {
  const [cardList, setCardList] = useState<AnalysisCard[]>([]);

  const fetchData = async () => {
    try {
      const result = await getAnalysisCardList();
      const list = result.analysisCardList;
      setCardList(list);
      console.log("list: ", list);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Analysis</div>
      <div>
        {cardList.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default Analysis;
