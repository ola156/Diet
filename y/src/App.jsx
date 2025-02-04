import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import BookOnline from "./pages/bookonline/BookOnline";
import Program from "./pages/program/Program";
import Shop from "./pages/shop/Shop";
import Faqs from "./pages/faqs/Faqs";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="min-h-dvh w-full bg-pink-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookonline" element={<BookOnline />} />
        <Route path="/program" element={<Program />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
};

export default App;
