import React from "react";
import flag from "../flage.png";
import applelogo from "../applelogo.png";
import googlrlogo from "../googlelogo.png";
import maillogo from "../maillogo.png";

function SingUp({ setsingup }) {
  return (
    <div
      className=" absolute z-30 flex justify-center w-[25%] mt-[40rem] items-center  rounded-[10px] border-gray-800 border-2 overflow-hidden bg-slate-50 text-black"
      data-aos="zoom-out"
    >
      <div
        className="flex justify-center items-center flex-col
        w-[100%] p-[10px] m-[10px]"
      >
        <div className="flex  items-center p-[2px] rounded-[10px]  w-[90%] ">
          <a
            href=""
            className=" w-[90%] text-center text-black"
          >
            Get Started
          </a>
          <div
            href=" "
            className=" p-[2px] overflow-hidden"
          >
            <i
              className="bx bx-x  text-gray-500 "
              onClick={() => {
                setsingup(false);
              }}
            ></i>
          </div>
        </div>
        <div className="w-[90%]  p-[10px] rounded-[10px] mt-[6px]  ">
          <div className="w-[100%] h-[45px] rounded-[5px] mt-[25px] border-gray-800 border-2 flex  items-center hover:border-none">
            <button className="flex justify-around items-center w-[100%] h-[100%] overflow-hidden text-[14px] p-[2px] hover:bg-slate-100 border-none  ">
              <img
                src={googlrlogo}
                className="w-[20px] h-[20px]"
              />
              Continue with Google
            </button>
          </div>
          <div className="w-[100%] h-[45px] rounded-[5px] mt-[25px]  overflow-hidden border-gray-800 border-2 flex  items-center hover:border-none">
            <button className="flex justify-around items-center w-[100%] h-[100%] text-[14px] p-[2px] hover:bg-slate-100 ,h-[100%]">
              <img
                src={maillogo}
                className="w-[20px] h-[20px]"
              />
              Continue with Mail
            </button>
          </div>
          <div className="w-[100%] h-[45px] rounded-[5px] mt-[25px] overflow-hidden border-gray-800 border-2 flex  items-center hover:border-none ">
            <button className="flex justify-around items-center w-[100%]  h-[100%] text-[14px]  p-[2px] hover:bg-slate-100 ,h-[100%]">
              <img
                src={applelogo}
                className="w-[20px] h-[20px]"
              />
              Continue with Apple
            </button>
          </div>
        </div>
        <div className="mt-[25px] mb-[10px] text-gray-500">
          OR
        </div>
        <div className="mt-[20px] flex gap-5">
          <div className="flex justify-center items-center">
            <img
              src={flag}
              className="w-[20px] h-[20px]"
            />
            +91
          </div>

          <input
            className="w-[180px] border-b-[1px] outline-none border-black text-[12px]"
            placeholder="Continue with mobile Number "
          />
        </div>
        <div className="mt-[60px] mb-[10px] ">
          <p className=" text-center text-[12px]">
            I agree to the &nbsp;
            <a href="" className="text-blue-600">
              <u>Terms & Condition</u>
            </a>
            &nbsp; & &nbsp;
            <a href="">
              &nbsp;
              <u className="text-blue-600">
                Privacy Policy
              </u>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
