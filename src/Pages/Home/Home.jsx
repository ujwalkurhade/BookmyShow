import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Slider from "../../components/Slider";
import Baner from "../../components/baner";
import Premiere from "../../components/Premiere";
import TradingSearch from "../../components/TradingSearch";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
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
      <Footer />
    </div>
  );
}

export default Home;
