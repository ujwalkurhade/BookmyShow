import { useState } from "react";
import "./index.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sport from "./Pages/Sports/Sport";
import Movies from "./Pages/movies/Movies";
import Strem from "./Pages/Stream/Strem";
import Plays from "./Pages/Playes/Plays";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Sport" element={<Sport />} />

        <Route path="/Stream" element={<Strem />} />
        <Route path="/Playes" element={<Plays />} />

        {/*<Route path="/Activites" element={} />
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
