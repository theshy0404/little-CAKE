import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import { isUserLogin } from "../utils/user";

export const AppRouter = () => {
  const isLogin = isUserLogin();
  if (!isLogin) {
  }
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin">
          <Route path="/admin/" element={<h1>admin</h1>}></Route>
          <Route path="/admin/user" element={<h1>user</h1>}></Route>
          <Route path="/admin/system" element={<h1>system</h1>}></Route>
        </Route>
        <Route path="/error" element={<h1>404</h1>} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};
