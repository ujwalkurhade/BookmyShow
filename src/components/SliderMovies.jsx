import React from "react";

function SliderMovies({ url, caption }) {
  return (
    <div className=" p-[0.5rem]">
      <img
        className="w-[100%] h-[420px] rounded-[10px]  "
        src={url}
      />
      <h1>{caption}</h1>
    </div>
  );
}

export default SliderMovies;
