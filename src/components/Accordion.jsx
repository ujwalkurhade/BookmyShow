import React, { useState } from "react";
import { Language } from "./Acc";

function Accordion() {
  const [updown, setupdown] = useState(false);
  const handelClick = () => {
    setupdown(!updown);
  };
  return (
    <div className="p-1 flex gap-2 flex-col w-[300px] ">
      <h1 className="text-[20px]">Filter</h1>
      {/*  */}
      <div className="w-80 p-3 bg-[rgb(255,255,255)] rounded-md mt-2">
        <div className="flex justify-between cursor-pointer" onClick={handelClick}>
          <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-9 cursor-pointer">
            Languages
          </h1>
          <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">Clear</h1>
        </div>
        {updown ? (
          <div className="border-2 ">
            <div className="flex ml-5 mt-2 ">
              <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-16 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
                Hindi
              </div>
              <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
                English
              </div>
              <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
                Marathi
              </div>
            </div>
            <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-32 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-5 mt-3 mb-2 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
              Multi Language
            </div>
          </div>
        ) : null}
      </div>

      {/*  */}

      <div className="w-80 p-3 bg-[rgb(255,255,255)]  rounded-md mt-4">
        <div className="flex justify-between">
          <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-9 cursor-pointer">
            Genres
          </h1>
          <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">Clear</h1>
        </div>
        <div className="flex ml-5 mt-7 cursor-pointer">
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-16 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Drama
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Comedy
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Romantic
          </div>
        </div>
        <div className="flex ml-5 mt-3 cursor-pointer">
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-24 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Adventure
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Historical
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Action
          </div>
        </div>
        <div className="flex ml-5 mt-3 cursor-pointer">
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-24 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Biography
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Crime
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Family
          </div>
        </div>
        <div className="flex ml-5 mt-3 cursor-pointer">
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-24 h-[32px] pt-1 pl-3 pr-1 pb-1 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Fantasy
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Musical
          </div>
          <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
            Mystery
          </div>
        </div>
        <div className="text-[14px] text-[rgb(220,53,75)] font-normal leading-[1.43] w-20 h-[32px] pt-1 pl-3 pr-1 pb-1 ml-5 mt-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          Thriller
        </div>
      </div>
      <div className="w-80 p-3 bg-[rgb(255,255,255)]  rounded-md mt-4 ">
        <div className="flex justify-between">
          <h1 className=" text-[14px]  text-[rgb(51,51,51)] hover:text-[rgb(220,53,75)] font-normal leading-[1.43] pt-3 pl-9 cursor-pointer">
            Format
          </h1>
          <h1 className="text-[12px] text-[rgb(102.102,102)] cursor-pointer pr-4 pt-3">Clear</h1>
        </div>
        <div className="text-[14px] cursor-pointer text-[rgb(220,53,75)] font-normal leading-[1.43] w-12 h-[32px] pt-1 pl-3 pr-1 pb-1  ml-5 mt-3 bg-[rgb(255,255,255)] border-[rgb(229,229,229)] border-[1px] border-solid">
          2D
        </div>
      </div>
      <div className="w-80 h-9 mt-9 bg-[rgb(255,255,255)] border-[rgb(220,53,88)] border-[1px] border-solid text-[rgb(220,53,88)] text-center pt-1 bg-transparent cursor-pointer">
        Browse by Cinemas
      </div>
    </div>
  );
}

export default Accordion;
