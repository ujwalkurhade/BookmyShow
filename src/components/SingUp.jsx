import React from "react";

function SingUp() {
  return (
    <div className="flex justify-center ml-[35rem] w-[25%] mt-[5rem]  rounded-[10px] border-red-600 border-2 overflow-hidden">
      <div
        className="flex justify-center items-center flex-col
        w-[100%] p-[10px] m-[10px]"
      >
        <div className="flex  items-center p-[2px] rounded-[10px]  w-[90%] ">
          <a
            href="http://"
            className=" w-[90%] text-center text-black"
          >
            Get Started
          </a>
          <a
            href="http:// "
            className=" p-[2px] overflow-hidden"
          >
            <i className="bx bx-x text-gray-500 "></i>
          </a>
        </div>
        <div className="w-[90%]  p-[10px] rounded-[10px] mt-[30px] border-red-600 border-2 ">
          <div className="w-[100%] h-[50px] rounded-[5px] mt-[25px] border-yellow-300 border-2"></div>
          <div className="w-[100%] h-[50px] rounded-[5px] mt-[25px] border-yellow-300 border-2"></div>
          <div className="w-[100%] h-[50px] rounded-[5px] mt-[25px] border-yellow-300 border-2"></div>
        </div>
        <div className="mt-[25px] mb-[10px] text-gray-500">
          OR
        </div>
        <div className="mt-[20px]">dh</div>
        <div className="mt-[100px] mb-[10px] ">
          <p className=" text-center">
            I agree to the <a href="">Terms & Condition</a>
            & <a href="">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
