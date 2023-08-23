import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";

function Sport() {
  return (
    <div className=" w-[100%] flex flex-col  ">
      <Header />
      <Navbar />
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1690785991917_motogpbharatdesktop.jpg" />
      <div className="w-[70%] flex gap-[60px]  mt-6 ml-[15rem] ">
        <div className="w-[20%]">
          <Accordion />
        </div>
        <div className="w-[60%] ml-[10rem]  flex justify-center flex-col ">
          <h1>Movies In Nagpur</h1>
          <div className="mt-[20px] flex gap-[10px]">
            <button className="text-red-600 w-20  border-solid border-2 rounded-lg border-black">Marathi</button>
            <button className="text-red-600 w-20  border-solid border-2 rounded-lg border-black">Hindi</button>
            <button className="text-red-600 w-20  border-solid border-2 rounded-lg border-black">English</button>
            <button className="text-red-600 w-50  border-solid border-2 rounded-lg border-black">Multi Language</button>
            <button className="text-red-600 w-20  border-solid border-2 rounded-lg border-black">Tamil</button>
          </div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/coming-soon-web-collection-202012090733.png" />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sport;
