import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { Foodcontext } from "../Context/context";

function Nav() {

   
  const [input,setinput]=useState("")
  const {show_food}=useContext(Foodcontext)

  function setting_search(item){
    show_food(item)
    setinput(item)
  }



  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500 " />
      </div>
      <form className=" bg-white w-[40%] h-[50px] flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[70%]" onSubmit={setting_search}>
        <IoIosSearch className="text-green-500 w-[20px] h-[20px]" />
        <input
          type="text"
          value={input}
          placeholder="Search Items..."
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e)=> setinput(e.target.value)}
        />
      </form >
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
        <span className="absolute top-0 right-2 text-green-500 font-bold">0</span>
        <FiShoppingBag className="w-[30px] h-[30px] text-green-500 text-[18px]" />
      </div>
    </div>
  );
}

export default Nav;
