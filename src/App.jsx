import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Baner from "./components/baner";
import Slider from "./components/Slider";
import Premiere from "./components/Premiere";
import TradingSearch from "./components/TradingSearch";
import SingUp from "./components/SingUp";
import Footer from "./components/Footer";
import Filter from "./Pages/Activies/Filter";

function App() {
  return (
    <div className=" ">
      <Header />
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

      {/* <Filter /> */}
      {/* <Slider /> */}
      <Footer />
    </div>
  );
}

export default App;
