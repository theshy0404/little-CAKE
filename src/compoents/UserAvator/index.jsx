import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import { useUserInfoContext } from "../../useContext/useUserInfoContext";
import { useNavigate } from "react-router-dom";
import AvatarJPG from ".././../public/user.jpg";

export default () => {
  const { username, isLogin } = useUserInfoContext();
  const navigate = useNavigate();
  console.log(username)
  return (
    <div className={styles.avatar}>
      {isLogin ? (
        <Avatar
          size="large"
          style={{ backgroundColor: "transparent", marginRight: "20px" }}
          src={AvatarJPG}
        />
      ) : (
        <Avatar
          size="large"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            marginRight: "20px",
          }}
          icon={<UserOutlined />}
        />
      )}
      {isLogin ? (
        username
      ) : (
        <span onClick={() => navigate("/login")}>未登录</span>
      )}
    </div>
  );
};
