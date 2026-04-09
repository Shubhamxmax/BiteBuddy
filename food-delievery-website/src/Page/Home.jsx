import React from "react";
import Nav from "../Component/Nav";
import { useState } from "react";
import { categories } from "../categories";
import Card from "../Component/Card";
import { food_items } from "../food";
import { Foodprovider } from "../Context/context";

function Home() {
  let [cate, setcategories] = useState(food_items);

  function filtering(name) {
    if (name === "All") {
      setcategories(food_items);
    } else {
      const new_list = food_items.filter((item) => {
        return item.food_category === name.toLowerCase();
      });
      setcategories(new_list);
    }
  }

  function show_food(food){
    const lists=food_items.filter( item => item.food_name.includes(food))
    setcategories(lists)
  }

  return (
    <Foodprovider value={show_food}>
      <div className="bg-slate-200 w-full min-h-screen">
        <Nav />

        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {categories.map((item, i) => (
            <div
              key={i}
              value={item}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-3 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-500
             duration"
              onClick={() => filtering(item.name)}
            >
              <div>{item.image}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center pt-3.5 pb-4">
          {cate.map((item) => (
            <Card
              key={item.id}
              image={item.food_image}
              name={item.food_name}
              price={item.price}
              type={item.food_type}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </Foodprovider>
  );
}

export default Home;
