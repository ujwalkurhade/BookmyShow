import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Baner from "./components/baner";
import Slider from "./components/Slider";
import Premiere from "./components/Premiere";
import TradingSearch from "./components/TradingSearch";
import SlideNav from "./components/SlideNav";
import SingUp from "./components/SingUp";

function App() {
  return (
    <div className=" ">
      {/* <Header />
      <Navbar />
      <Hero />
      <div className="w-[100%] flex justify-center items-center flex-col">
        <Slider />
        <Baner />
        <Slider />
        <Slider />
        <Baner />
        <Slider />
      </div>
      <Premiere />
      <div className="w-[100%] flex justify-center items-center flex-col">
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </div>*/}
      <TradingSearch />
      {/* <SingUp /> */}
    </div>
  );
}

export default App;
