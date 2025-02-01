import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className=" min-h-dvh w-full bg-pink-50">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
