import React, { useCallback } from "react";
import { Layout, Menu, theme, Avatar } from "antd";
import styles from "./index.module.css";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserAvator from "../../compoents/UserAvator";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    label: "案例库",
    key: "cases",
    icon: <AppstoreOutlined />,
  },
  {
    label: "法律库",
    key: "laws",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "法律",
        key: "setting:1",
      },
      {
        label: "法规",
        key: "setting:2",
      },
    ],
  },
  {
    label: "知识库",
    key: "knowledge",
    icon: <AppstoreOutlined />,
  },
  {
    label: "讨论区",
    key: "talk",
    icon: <AppstoreOutlined />,
  },
];

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const onClickMenu = useCallback((selectItem) => {
    const { keyPath } = selectItem;
    navigate(`/index/${keyPath.pop()}`);
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className={styles.logo} />
        <UserAvator />
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{ fontSize: 16 }}
          onClick={onClickMenu}
        />
      </Header>
      <Content className={styles.content} style={{ padding: "20px 50px" }}>
        <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          <Route path="/index/" element={<h1>Home</h1>} />
          <Route path="/index/cases" element={<h1>cases</h1>} />
          <Route path="/index/knowledge" element={<h1>knowledge</h1>} />
          <Route path="/index/laws" element={<h1>Laws</h1>} />
          <Route path="/index/talk" element={<h1>talk</h1>} />
          <Route path="/index/*" element={<h1>404</h1>} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center", background: "#fff" }}>
        ©浙江理工大学
      </Footer>
    </Layout>
  );
};

export default Home;
