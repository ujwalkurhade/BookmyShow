import React from "react";

function CardItem({ url, title, name, heading, subheading }) {
  return (
    <div className="flex justify-center items-center flex-col gap-4 w-[100%]">
      <div>
        {" "}
        <img className="w-[100%] h-[360px] rounded-[10px]  " src={url} />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default CardItem;
