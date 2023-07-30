import React from "react";

function CardItem({
  url,
  title,
  name,
  heading,
  subheading,
}) {
  return (
    <div className="flex justify-center items-center flex-col gap-4 w-[100%]">
      <img
        className="w-[100%] h-[360px] rounded-[10px]  "
        src={url}
      />
      <h1>{title}</h1>
    </div>
  );
}

export default CardItem;
