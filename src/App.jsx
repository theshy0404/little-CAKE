import React from "react";
import { AppRouter } from "./router";
import { UserInfoProvider } from "./useContext/useUserInfoContext";
import "./App.css";

const App = () => {
  return (
    <UserInfoProvider>
      <AppRouter />
    </UserInfoProvider>
  );
};

export default App;
