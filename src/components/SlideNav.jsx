import React from "react";

function SlideNav({ open, setopen }) {
  return (
    <div
      className="sidnav  h-[100%] fixed z-50 bg-[#fff] overflow-x-hidden transition-[0.5s] pt-[10px] w-[300px] top-0 right-0 text-white"
      data-aos="fade-left"
    >
      <div className="absolute top-4 right-[25px]  ml-[60px] text-black">
        <i
          className="bx bx-x "
          onClick={() => {
            setopen(false);
          }}
        ></i>
      </div>

      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default SlideNav;
