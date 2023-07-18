import React from "react";

function TradingSearch() {
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="w-[80%] mt-[20px] mb-[10px]">
        <div className="flex flex-wrap text-white text-xs justify-center lg:justify-start md:justify-start">
          <div className="shadow-2xl flex flex-col  border-solid border border-gray-500  w-[250px]  h-auto text-[18px]  py-2 rounded-md m-0.5">
            <div className="ml-[10px]">
              <h2 className="text-red-600 ">
                Oppenheimer
              </h2>
              <p className="text-[14px] text-gray-400">
                Movies
              </p>
            </div>
          </div>
          <div className="shadow-2xl border-solid border border-gray-500 bg-[rgba(0,0,0,0.92)] w-[150px] flex justify-center  items-center h-[50px] p-[20px] text-[20px] px-2 py-1 rounded-md m-0.5">
            React.js
          </div>
          <div className="shadow-2xl border-solid border border-gray-500 bg-[rgba(0,0,0,0.92)] w-[150px] flex justify-center  items-center h-[50px] p-[20px] text-[20px] px-2 py-1 rounded-md m-0.5">
            HTML
          </div>
          <div className="shadow-2xl border-solid border border-gray-500 bg-[rgba(0,0,0,0.92)] w-[150px] flex justify-center  items-center h-[50px] p-[20px] text-[20px] px-2 py-1 rounded-md m-0.5">
            CSS
          </div>
          <div className="shadow-2xl border-solid border border-gray-500 bg-[rgba(0,0,0,0.92)] w-[150px] flex justify-center  items-center h-[50px] p-[20px] text-[20px] px-2 py-1 rounded-md m-0.5">
            TailwindCSS
          </div>
          <div className="shadow-2xl border-solid border border-gray-500 bg-[rgba(0,0,0,0.92)] w-[150px] flex justify-center  items-center h-[50px] p-[20px] text-[20px] px-2 py-1 rounded-md m-0.5">
            Bootstrap
          </div>
          <div className="shadow-2xl border-solid border border-gray-500 bg-[rgba(0,0,0,0.92)] w-[150px] flex justify-center  items-center h-[50px] p-[20px] text-[20px] px-2 py-1 rounded-md m-0.5">
            Git & Github
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingSearch;
