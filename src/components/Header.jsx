import React, { useState } from "react";
import SlideNav from "./SlideNav";
import SingUp from "./SingUp";

function Header() {
  const [open, setopen] = useState(false);
  const [singup, setsingup] = useState(false);

  return (
    <div className="w-[100%] flex justify-center items-center bg-[rgb(51,53,69)] ">
      <div className="w-[80%] h-[60px] flex justify-between items-center ">
        <div className="flex justify-center items-center overflow-hidden text-gray-950">
          <img
            src="https://cio.eletsonline.com/wp-content/uploads/2019/12/bookmyshow.png"
            className="w-[150px] h-[50px] "
          />
          <div className="bg-white w-[500px] h-[40px] ml-[10px] flex items-center rounded-[5px]">
            <i className="bx bx-search w-[20px] ml-[10px] "></i>
            <input
              className="w-[400px] border-none outline-none ml-[5px]"
              placeholder="Search for a Movie,Event,Plays, Sport And Activities "
            />
          </div>
        </div>
        <div className="text-white ">
          <a href="" className="">
            Nagpur <i className="bx bx-chevron-down "></i>
          </a>
          <button
            className=" w-[80px] p-[4px] ml-[20px] bg-red-400 rounded-[5px]"
            onClick={() => {
              setsingup(true);
            }}
          >
            Sing In
          </button>

          <button
            onClick={() => {
              setopen(true);
            }}
            className="ml-[20px] p-[6px] "
          >
            <i className="bx bx-menu  "></i>
          </button>
        </div>
      </div>
      {open ? (
        <SlideNav open={open} setopen={setopen} />
      ) : null}
      {/* side nav  bar */}
      {singup ? <SingUp setsingup={setsingup} /> : null}
    </div>
  );
}

export default Header;
