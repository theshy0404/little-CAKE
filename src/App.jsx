import React from "react";
import Home from "./pages/home";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/error" element={<h1>404</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
