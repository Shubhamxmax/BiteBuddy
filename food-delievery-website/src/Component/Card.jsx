import React from "react";
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function Card({image,name,price,type,id}) {
  return (
    <div className="w-[280px] h-[400px] flex flex-col gap-3 bg-white p-3 rounded-lg shadow-lg hover:border-2 border-green-200 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} className="object-cover" />
      </div>
      <div className="text-2xl font-semibold ">{name}</div>
      <div className=" w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs {price}-/</div>
        <div className="flex justify-center items-center gap-2 text-green-500 font-semibold">
              {type==='veg' ? <LuLeafyGreen/> : <GiChickenOven />}
              <span>{type}</span></div>
      </div>
      <button className="w-full p-3 bg-green-500 rounded-lg text-white cursor-pointer hover:bg-green-400 transition">
        Add to dish
      </button>
    </div>
  );
}

export default Card;
