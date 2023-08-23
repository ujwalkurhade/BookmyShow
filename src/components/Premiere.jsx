import React from "react";
import Slider from "./Slider";
import Card from "./Card";

function Premiere() {
  return (
    <div className="w-[100%] h-[650px] flex flex-col justify-center items-center bg-[rgb(43,49,73)]">
      <div className=" w-[80%] flex justify-center flex-col items-center overflow-hidden">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" />

        <div className="w-[100%] ">
          <div className="text-white">
            <h2>Premieres</h2>
            <p>Brand new releases every Friday</p>
          </div>
          <div className="flex justify-center items-center">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premiere;
