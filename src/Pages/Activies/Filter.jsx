import React from "react";
import Accordion from "./Accordion";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "./Card";
import Action from "./Action";
import Footer from "../../components/Footer";

function Filter() {
  return (
    <div
      className=" w-[100%] h-[100%] flex justify-center flex-col items-center "
      id="Action"
    >
      <Header />
      <Navbar />
      <div className="w-[85%] flex gap-[50px]  mt-[4rem]">
        <Accordion />
        <Action />
      </div>
      <div className="p-10">
        <Footer />
      </div>
    </div>
  );
}

export default Filter;
