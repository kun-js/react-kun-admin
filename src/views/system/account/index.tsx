import "./account.scss";
import React, { useEffect, useState } from "react";
import { Button, Card, Input, Space, Table } from "antd";
import type { TableColumnsType } from "antd";
import { getAccountList } from "@/api";

interface DataType {
  id: number;
  username: string;
  name: string;
  createTime: string;
  role: string;
  email: string;
  tel: string;
  department: string;
  remark: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "序号",
    dataIndex: "id",
    width: 80,
    fixed: "left",
  },
  {
    title: "姓名",
    dataIndex: "name",
    width: 80,
    fixed: "left",
  },
  {
    title: "账号",
    dataIndex: "username",
    width: 100,
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 180,
  },
  {
    title: "角色",
    dataIndex: "role",
    width: 100,
  },
  {
    title: "邮箱",
    dataIndex: "email",
    width: 180,
  },
  {
    title: "手机",
    dataIndex: "tel",
    width: 120,
  },
  {
    title: "部门",
    dataIndex: "department",
    width: 80,
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 150,
  },
  {
    title: "操作",
    fixed: "right",
    width: 150,
    render: () => (
      <Space>
        <Button type="primary" size="small">
          编辑
        </Button>
        <Button type="primary" danger size="small">
          删除
        </Button>
      </Space>
    ),
  },
];

const AccountManagement: React.FC = () => {
  const [keyWord, setKeyWord] = useState("");
  const [data, setData] = useState([]);
  const [ellipsis] = useState(true);
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setKeyWord(e.target.value);
  };

  const InputClean = () => {
    setKeyWord("");
  };

  const titleContent = (
    <>
      <Space>
        <Input placeholder="输入姓名以查询" value={keyWord} onChange={inputChange} />
        <Button onClick={InputClean} disabled={keyWord === ""}>
          重置
        </Button>
      </Space>
    </>
  );

  const fetchData = async () => {
    try {
      const result = await getAccountList(page, pageSize, keyWord);
      setData(result.accountList);
      setTotal(result.total);
    } catch (error) {
      console.error("数据获取失败：", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, keyWord]);

  return (
    <>
      <div className="account-container">
        <Card className="card-container" title={titleContent} bordered={false}>
          <Table
            columns={columns.map((item) => ({ ...item, ellipsis }))}
            dataSource={data}
            pagination={{
              current: page,
              pageSize: pageSize,
              pageSizeOptions: [10, 20, 50, 100],
              total: total,
              showQuickJumper: true,
              showTotal: (total) => {
                return <div>共 {total} 条</div>;
              },
              onChange: (newPage, newPageSize) => {
                setPage(newPage);
                setPageSize(newPageSize);
              },
            }}
            scroll={{ y: 670 }}
          />
        </Card>
      </div>
    </>
  );
};

export default AccountManagement;
