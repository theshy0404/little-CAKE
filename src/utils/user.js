import { useUserInfoContext } from "../useContext/useUserInfoContext";

/** 当前用户是否已登录 */
export const isUserLogin = () => {
  const { isLogin } = useUserInfoContext();
  return isLogin;
};
