import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Baner from "./components/baner";
import Slider from "./components/Slider";
import Premiere from "./components/Premiere";
import TradingSearch from "./components/TradingSearch";
import Footer from "./components/Footer";
import Event from "./Pages/events/Event";
import Buzz from "./Pages/buzz/Buzz";
import Login from "./components/Login";
import { Route, Router, Routes } from "react-router-dom";

function About() {
  return <div>About</div>;
}
function Home() {
  return <div>Home</div>;
}

function App() {
  return (
    <div className=" ">
      {/* <Header /> */}

      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />

        <Route path="about" element={<Home />} />
      </Routes>
      {/* <Hero /> */}
      {/* <div className="w-[100%] flex justify-center items-center flex-col">
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
      <TradingSearch /> */}
      <Footer />
      {/* <Buzz /> */}
    </div>
  );
  AOS.init({
    duration: 1200,
  });
}

export default App;
