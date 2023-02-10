import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Checkbox, Form, Input, Card, message } from "antd";
import { doSQLProduce } from "../../api/doRequest";

const Login = () => {
  const [isLogin, setLogin] = useState(false);

  const doLogin = (values) => {
    doSQLProduce("dologin", values)
      .then(() => {
        setLogin(true);
        message.success("login success");
      })
      .catch((error) => {
        message.error(error.message);
      });
  };
  // 点击提交按钮执行
  const onFinish = (values) => {
    console.log("Success:", values);
    doLogin(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.wrap}>
      <Card bordered={false} style={{ width: 400 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
