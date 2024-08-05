import "./role.scss";
import React, { useEffect, useState } from "react";
import { Button, Card, Space, Switch, Table } from "antd";
import type { TableColumnsType } from "antd";
import { getRoleList } from "@/api";

interface DataType {
  id: number;
  role: string;
  roleValue: string;
  status: boolean;
  createTime: string;
  remark: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "序号",
    dataIndex: "id",
    width: 60,
  },
  {
    title: "角色名称",
    dataIndex: "role",
    width: 100,
  },
  {
    title: "角色值",
    dataIndex: "roleValue",
    width: 100,
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 80,
    render: (status: boolean) => <Switch checkedChildren="启用" unCheckedChildren="停用" value={status} disabled />,
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 150,
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 150,
  },
  {
    title: "操作",
    width: 150,
    fixed: "right",
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

const RoleManagement: React.FC = () => {
  const [data, setData] = useState([]);
  const [ellipsis] = useState(true);

  const fetchData = async () => {
    try {
      const result = await getRoleList();
      // console.log("result: ", result);
      setData(result.roleList);
    } catch (error) {
      console.error("数据获取失败：", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="role-container">
        <Card className="card-container" title="角色管理示例" bordered={false}>
          <Table columns={columns.map((item) => ({ ...item, ellipsis }))} dataSource={data} pagination={false} />
        </Card>
      </div>
    </>
  );
};

export default RoleManagement;
