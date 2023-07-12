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

function App() {
  return (
    <div className=" ">
      <Header />
      <div className="sidnav h-[100%] fixed z-20 bg-[#fff]  transition-[0.5s] pt-[60px] w-[300px] top-0 right-0 text-white">
        <a
          className="absolute top-0 right-[25px] font-[36px] ml-[50px]"
          onClick={() => {}}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
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
      </div>
      <TradingSearch />
    </div>
  );
}

export default App;
