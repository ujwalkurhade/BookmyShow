import React from "react";
import Card from "./Card";
import Footer from "../../components/Footer";

function Action() {
  return (
    <div className=" w-[100%] flex justify-center items-center flex-col">
      <div>
        <div className="mr-64 ml-8 w-[100%] ">
          <h1 className="capitalize text-[rgb(51,51,51)] font-bold text-[24px] leading-6">
            Movies in Nagpur
          </h1>
          <div className=" text-center text-[rgb(220,53,75)] text-[12px] pt-10 cursor-pointer font-normal flex gap-6 ">
            <div className="w-16 h-8 p-1 text-center border-solid border border-black rounded-2xl text-[12px] bg-[rgb(255,255,255)] ">
              Hindi
            </div>
            <div className="w-16 h-8 p-1 rounded-2xl text-center border-solid border border-black text-[12px] bg-[rgb(255,255,255)] ">
              English
            </div>
            <div className="w-16 h-8 p-1 rounded-2xl text-center border-solid border text-[12px] border-black  bg-[rgb(255,255,255)]">
              Marathi
            </div>
            <div className="w-32 h-8 p-1 rounded-2xl text-center border-solid border border-black text-[12px] bg-[rgb(255,255,255)]">
              Multi Language
            </div>
          </div>
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Action;
