import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-[100%] m-0 p-0 ">
      <Header />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
