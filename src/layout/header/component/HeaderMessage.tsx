import "./HeaderMessage.scss";
import { useEffect, useState } from "react";
import { Avatar, Button, Popover, Tabs, Tag } from "antd";
import type { TabsProps } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { getMessageList } from "@/api/index";

interface NoticeListItemType {
  id: number;
  iconColor: string;
  icon: string;
  title: string;
  time: string;
}

interface MessageListItemType {
  id: number;
  avatar: string;
  username: string;
  type: string;
  content: string;
  time: string;
}

interface TodoListItemType {
  id: number;
  title: string;
  description: string;
  status: string;
}

const HeaderSearch: React.FC = () => {
  const [noticeList, setNoticeList] = useState<NoticeListItemType[]>([]);
  const [messageList, setMessageList] = useState<MessageListItemType[]>([]);
  const [todoList, setTodoList] = useState<TodoListItemType[]>([]);
  const [hasMessage, setHasMessage] = useState<boolean>(false);

  const getTagType = (status: string) => {
    const tagTypes: { [key: string]: string } = {
      未开始: "default",
      进行中: "processing",
      即将截止: "warning",
      已逾期: "error",
    };
    return tagTypes[status] || "default";
  };

  const noticeListPage = (
    <div>
      {noticeList.map((item) => (
        <div className="notice-container" key={item.id}>
          <div className="icon">
            <Avatar style={{ backgroundColor: item.iconColor }}>{item.icon}</Avatar>
          </div>
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="time">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const messageListPage = (
    <div>
      {messageList.map((item) => (
        <div className="message-container" key={item.id}>
          <div className="avatar">
            <Avatar src={item.avatar} />
          </div>
          <div className="content">
            <div className="title">
              {item.username} {item.type}了你
            </div>
            <div className="text">{item.content}</div>
            <div className="time">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const todoListPage = (
    <div>
      {todoList.map((item) => (
        <div className="todo-container" key={item.id}>
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="status">
              <Tag color={getTagType(item.status)}>{item.status}</Tag>
            </div>
          </div>
          <div className="text">{item.description}</div>
        </div>
      ))}
    </div>
  );

  const items: TabsProps["items"] = [
    {
      key: "notice",
      label: "通知" + "(" + noticeList.length + ")",
      children: noticeListPage,
    },
    {
      key: "message",
      label: "消息" + "(" + messageList.length + ")",
      children: messageListPage,
    },
    {
      key: "todo",
      label: "待办" + "(" + todoList.length + ")",
      children: todoListPage,
    },
  ];

  const content = (
    <div>
      <Tabs className="message-tabs" defaultActiveKey="1" centered items={items} />
    </div>
  );

  const fetchData = async () => {
    try {
      const result = await getMessageList();
      // console.log("result: ", result);
      setNoticeList(result.noticeList);
      setMessageList(result.messageList);
      setTodoList(result.todoList);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const updateHasMessage = () => {
    setHasMessage(noticeList.length > 0 || messageList.length > 0 || todoList.length > 0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateHasMessage();
  }, [noticeList, messageList, todoList]);

  return (
    <>
      <div className="message-box-container">
        {hasMessage && <div className="red-dot"></div>}
        <Popover placement="bottom" trigger="click" content={content}>
          <Button className="message-button" type="text" icon={<BellOutlined />} />
        </Popover>
      </div>
    </>
  );
};

export default HeaderSearch;
