import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import WrapperAPI from "HOC/WrapperAPI";
import { IAPIMethod } from "interfaces";
import { RouteComponentProps } from "react-router-dom";
import { useLocalStorage } from "hooks";
interface ILoginProps {
  setAuth: any;
}

const Login: React.FC<ILoginProps & IAPIMethod & RouteComponentProps> = ({
  login,
  history,
  setAuth,
}) => {
  const [form] = Form.useForm();
  const [, setTokenToLocalStorage] = useLocalStorage("access_token");

  const onFinish = (values: any) => {
    login(
      values,
      (token: string) => {
        setTokenToLocalStorage(token || "");
        if (setAuth) {
          setAuth(token);
        }
        history.push("/");
      },
      () => {
        message.warning("Login failed, Email or Password invalid");
      }
    );
  };

  return (
    <section id="form-login">
      <Form form={form} name="horizontal_login" onFinish={onFinish}>
        <h2 className="text-center">Login</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              className="login-form-button"
              htmlType="submit"
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </section>
  );
};

export default WrapperAPI(Login);
