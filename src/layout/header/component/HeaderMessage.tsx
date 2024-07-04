import { BellOutlined } from "@ant-design/icons";
import { Button, Popover, Tabs, Tag } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";
import { getMessageList } from "@/api/index";
import "./HeaderMessage.scss";

interface NoticeListItem {
  id: number;
  icon: string;
  title: string;
  time: string;
}

interface MessageListItem {
  id: number;
  avatar: string;
  username: string;
  type: string;
  content: string;
  time: string;
}

interface TodoListItem {
  id: number;
  title: string;
  description: string;
  status: string;
}

const HeaderSearch: React.FC = () => {
  const [noticeList, setNoticeList] = useState<NoticeListItem[]>([]);
  const [messageList, setMessageList] = useState<MessageListItem[]>([]);
  const [todoList, setTodoList] = useState<TodoListItem[]>([]);
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

  const noticePage = (
    <div>
      {noticeList.map((item) => (
        <div className="notice-container" key={item.id}>
          <div className="icon">
            <img src={item.icon} alt="" />
          </div>
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="time">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const todoPage = (
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

  const messagePage = (
    <div>
      {messageList.map((item) => (
        <div className="message-container" key={item.id}>
          <div className="avatar">
            <img src={item.avatar} alt="" />
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

  const items: TabsProps["items"] = [
    {
      key: "notice",
      label: "通知" + "(" + noticeList.length + ")",
      children: noticePage,
    },
    {
      key: "message",
      label: "消息" + "(" + messageList.length + ")",
      children: messagePage,
    },
    {
      key: "todo",
      label: "待办" + "(" + todoList.length + ")",
      children: todoPage,
    },
  ];

  const content = (
    <div>
      <Tabs className="message-tabs" defaultActiveKey="1" items={items} />
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
