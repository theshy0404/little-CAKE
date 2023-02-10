import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  Component,
} from "react";

// 创建一个共享UserInfo的Context
export const UserInfoContext = createContext(null);

// 创建一个下发Context的Provider组件
// ToDo: 为什么需要UserInfoProvider而不是直接使用UserInfo.Provider
export const UserInfoProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  // useMemo是一个性能优化的高级hook
  const userInfo = useMemo(() => {
    return { username, userId, isLogin, setIsLogin, setUserId, setUsername };
  }, [username, userId, isLogin, setIsLogin, setUserId, setUsername]);
  return (
    <UserInfoContext.Provider value={userInfo}>
      {/* children是外部传入的子组件，这里渲染出来 */}
      {children}
    </UserInfoContext.Provider>
  );
};

// 创建一个接受Context的自定义hook
export const useUserInfoContext = () => {
  return useContext(UserInfoContext);
};
