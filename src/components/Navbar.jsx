import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" w-[100%] h-[40px] p-15px flex justify-center items-center bg-[rgb(34,37,57)] text-white ">
      <div className="flex justify-between items-center w-[80%] ">
        <div className="flex justify-center items-center gap-4">
          <Link to={"/Movies"}>Movies</Link>
          <Link to={"/Stream"}>Stream</Link>
          <Link to={"/Playes"}>Plays</Link>
          <Link to={"/Sport"}>Sport</Link>
          <Link to={"/Activites"}>Activites</Link>
          <Link to={"/Buzz"}>Buzz</Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link to={"/ListYourShow"}>ListYourShow</Link>
          <Link to={"/Comparates"}>Comparates</Link>
          <Link to={"/Offers"}>Offers</Link>
          <Link to={"/GiffCart"}>GiffCart</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
