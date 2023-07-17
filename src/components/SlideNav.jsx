import React from "react";

function SlideNav({ setopen }) {
  return (
    <div className="sidnav  h-[100%] fixed z-50 bg-[#fff] overflow-x-hidden transition-[0.5s] pt-[60px] w-[300px] top-0 right-0 text-white">
      <a
        className="absolute top-0 right-[25px] font-[36px]
        ml-[50px]"
        onClick={() => {
          setopen(true);
        }}
      >
        <i class="bx bx-x"></i>
      </a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default SlideNav;
