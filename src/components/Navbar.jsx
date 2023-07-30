import React from "react";
// import Filter from "./Pages/Activies/Filter";

function Navbar() {
  return (
    <div className=" w-[100%] h-[40px] p-15px flex justify-center items-center bg-[rgb(34,37,57)] text-white ">
      <div className="flex justify-between items-center w-[80%] ">
        <div className="flex justify-center items-center gap-4">
          <a href="">Movies</a>
          <a href="">Stream</a>
          <a href="">Events</a>
          <a href="">Plays</a>
          <a href="">Sport</a>
          <a href="">Activites</a>
          <a href="">Buzz</a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="">ListYourShow</a>
          <a href="">Comparates</a>
          <a href="">Offers</a>
          <a href="">GiffCart</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
