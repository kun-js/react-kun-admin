import "./list.scss";
import React, { useEffect, useState } from "react";
import { Card, Table } from "antd";
import type { TableProps } from "antd";
import { getUserList } from "@/api/index";

interface DataType {
  id: number;
  name: string;
  age: number;
  tel: string;
  email: string;
  address: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "名字",
    dataIndex: "name",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "年龄",
    dataIndex: "age",
  },
  {
    title: "联系方式",
    dataIndex: "tel",
  },
  {
    title: "邮箱",
    dataIndex: "email",
  },
  {
    title: "地址",
    dataIndex: "address",
  },
];

const List: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  const fetchData = async () => {
    try {
      const result = await getUserList();
      const list = result.userList;
      console.log("list: ", list);
      setData(list);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="list-container">
        <Card className="card-container" title="列表页示例" bordered={true}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </div>
    </>
  );
};

export default List;
