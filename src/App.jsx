import { useState } from "react";
import "./index.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        {/* <Route path="/Stream" element={} />
        <Route path="/Playes" element={} />
        <Route path="/Sport" element={} />
        <Route path="/Activites" element={} />
        <Route path="/Buzz" element={} />
        <Route path="/Buzz" element={} />
        <Route path="/Buzz" element={} />
        <Route path="/Buzz" element={} />
        <Route path="/Buzz" element={} /> */}
      </Routes>
    </div>
  );
  AOS.init({
    duration: 1200,
  });
}

export default App;
