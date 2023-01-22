import React from "react";
import Home from "./pages/home";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
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

export default App;
