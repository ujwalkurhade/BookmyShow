import React from "react";

function SlideNav({ open, setopen }) {
  return (
    <div className="sidnav  h-[100%] fixed z-50 bg-[#fff] overflow-x-hidden transition-[0.5s] pt-[60px] w-[300px] top-0 right-0 text-white">
      <div
        className="absolute top-10 right-[25px] font-[36px]
        ml-[50px] text-black"
      >
        <i
          class="bx bx-x"
          onClick={() => {
            setopen(false);
            console.log(open);
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
