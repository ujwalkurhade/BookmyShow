import React from "react";
import CardItem from "./CardItem";

function Card() {
  const card = [
    {
      id: 1,
      img_url:
        " https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyNy44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355365-lzflppmver-portrait.jpg",
      title: "Baipan Bhari Deva",
      name: "",
      heading: "UA ",
      subheading: "Marathi",
    },
    {
      id: 2,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICA0OUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-zklzrdqjwu-portrait.jpg",
      title: "Oppenheimer",
      name: "",
      heading: "UA",
      SUBHEADING: "English,Hindi",
    },
    {
      id: 3,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTAuNksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-azdlcgruwe-portrait.jpg",
      title: "Rocky Aur Rani Kii ",
      name: "Prem Kahaani",
      heading: "UA",
      subheading: "Hindi",
    },
    {
      id: 4,
      img_url:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA4My41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
      title: "Mission Impossible: ",
      name: "Dead Reckoning - Part One",
      heading: "UA",
      subheding: "English,Hindi,Tamil,Telgu",
    },
  ];
  return (
    <div className="w-[95%]  flex items-center justify-center gap-6 mt-10 ">
      {card.map((item, index) => (
        <div key={index} className="flex justify-between items-center  w-[100%]]">
          <CardItem
            url={item.img_url}
            title={item.title}
            name={item.name}
            heading={item.heading}
            subheading={item.subheading}
            key={item.id}
          />
        </div>
      ))}
    </div>
  );
}

export default Card;
