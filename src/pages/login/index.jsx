import React from "react";
import styles from "./index.module.css";
import { Button, Typography, Form, Input, Card, message } from "antd";
import { doSQLProduce } from "../../api/doRequest";
import { useUserInfoContext } from "../../useContext/useUserInfoContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUsername, setUserId, setIsLogin } = useUserInfoContext();
  const navigate = useNavigate();
  const doLogin = (values) => {
    doSQLProduce("dologin", values)
      .then((data) => {
        const userInfo = data[0];
        setUserId(userInfo.user_name);
        setUsername(userInfo.user_name);
        setIsLogin(true);
        message.success(`Welecome ${userInfo.user_name}`);
        navigate("/index");
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
      <Card
        bordered={false}
        style={{ width: 450 }}
        bodyStyle={{ textAlign: "center" }}
      >
        <Typography.Title level={2} style={{ margin: 20 }}>
          登录页面
        </Typography.Title>
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 20 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          labelAlign="left"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          {/* 
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ span: 12 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
