import React from "react";
import Accordion from "./Accordion";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EventsData from "./EventsData";

function Event() {
  return (
    <div
      className=" w-[100%] h-[100%] flex justify-center flex-col items-center "
      id="Action"
    >
      <Header />
      <Navbar />
      <div className="w-[85%] flex gap-[50px]  mt-[4rem]">
        <Accordion />
        <EventsData />
      </div>
      <div className="p-10">
        <Footer />
      </div>
    </div>
  );
}

export default Event;
