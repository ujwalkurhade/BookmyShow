import React from "react";

function SlideNav() {
  return (
    <div className="sidnav h-[100%] fixed z-1 bg-[#111] overflow-x-hidden transition-[0.5s] pt-[60px] w-[300px] top-0 right-0 text-white">
      <a
        className="absolute top-0 right-[25px] font-[36px]
        ml-[50px]"
        onClick={() => {}}
      >
        &times;
      </a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default SlideNav;
