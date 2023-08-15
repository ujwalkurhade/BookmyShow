import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import AccordionMovie from "./AccordionMovie";

function Movies() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <div>
        <div className="">
          <AccordionMovie />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
