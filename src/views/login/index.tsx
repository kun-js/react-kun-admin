import "./login.scss";
import React from "react";
import type { FormProps } from "antd";
import { Card, Button, Form, Input, Space, message } from "antd";
import { getLoginInfo } from "@/api/index";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/store/user";

type FieldType = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { setToken, setUserInfo } = useUserStore();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const result = await getLoginInfo(values.username, values.password);
    if (result) {
      messageApi.open({
        type: "success",
        content: "登陆成功!正在条状!",
      });
      localStorage.setItem("loginMessage", "Login Successful");
      setToken(result.token);
      setUserInfo(result.userInfo);
      navigate("/dashboard/analysis");
    } else {
      messageApi.open({
        type: "error",
        content: "用户名或密码错误!",
      });
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <div className="login-container">
        <Card title="登录" bordered={true}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
          >
            <Form.Item<FieldType> label="用户名" name="username" rules={[{ required: true, message: "请输入用户名!" }]}>
              <Input />
            </Form.Item>

            <Form.Item<FieldType> label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  重置
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;