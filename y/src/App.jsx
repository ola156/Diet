import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
