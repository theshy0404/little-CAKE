import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/admin">
          <Route path="/admin/" element={<h1>admin</h1>}></Route>
          <Route path="/admin/user" element={<h1>user</h1>}></Route>
          <Route path="/admin/system" element={<h1>system</h1>}></Route>
        </Route>
        <Route path="/error" element={<h1>404</h1>} />
      </Routes>
    </HashRouter>
  );
};
