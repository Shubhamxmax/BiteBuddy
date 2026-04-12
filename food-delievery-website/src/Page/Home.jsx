import React from "react";
import Nav from "../Component/Nav";
import { useState } from "react";
import { categories } from "../categories";
import Card from "../Component/Card";
import { food_items } from "../food";
import { Foodprovider } from "../Context/context";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Component/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  const items = useSelector((state) => state.cart);
  let [cate, setcategories] = useState(food_items);
  let [show_cart, set_cart] = useState(false);

  let subtotal = items.reduce((acc, item) => acc + item.qty * item.price, 0);
  let delieveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + delieveryFee + taxes);

  function update_cart(value) {
    set_cart(value);
  }

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

  function show_food(food) {
    const lists = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(food.toLowerCase()),
    );
    setcategories(lists);
  }

  return (
    <Foodprovider value={{ show_food, update_cart }}>
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
        {cate.length > 0 ? (
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
        ) : (
          <div className="text-xl font-semibold text-green-500 flex justify-center items-center mt-16">
            No Dish Found
          </div>
        )}

        <div
          className={`overflow-auto w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${show_cart ? "translate-x-0" : "translate-x-full"}`}
        >
          <header className="w-full flex justify-between items-center">
            <span className=" text-[18px] text-green-400 font-semibold">
              Order Items
            </span>
            <RxCross2
              className="w-[30px] text-[22px] text-green-400 font-semibold cursor-pointer"
              onClick={() => update_cart(false)}
            />
          </header>
          {items.length > 0 ? (
            <>
              <div className="w-full mt-9 flex flex-col gap-8">
                {items.map((items) => (
                  <Card2
                    name={items.name}
                    price={items.price}
                    image={items.image}
                    qty={items.qty}
                    id={items.id}
                  />
                ))}
              </div>
              <div className="w-full mt-5 border-t-2 border-b-2 border-gray-400 flex flex-col gap-4 p-8">
                <div className="w-full flex justify-between items-center">
                  <span className="text-lg text-gray-600 font-semibold">
                    Subtotal
                  </span>
                  <span className="text-green-400 ">Rs {subtotal}/-</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <span className="text-lg text-gray-600 font-semibold">
                    Delievery Charge
                  </span>
                  <span className="text-green-400 ">Rs {delieveryFee}/-</span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <span className="text-lg text-gray-600 font-semibold">
                    Taxes
                  </span>
                  <span className="text-green-400 ">Rs {taxes}/-</span>
                </div>
              </div>

              <div>
                <div className="w-full flex justify-between items-center p-9">
                  <span className="text-2xl text-gray-600 font-semibold">
                    Total
                  </span>
                  <span className="text-green-400 text-2xl">Rs {total}/-</span>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="w-[85%] p-3 bg-green-500 rounded-lg text-white cursor-pointer hover:bg-green-400 transition"
                onClick={()=>{toast.success("Order Placed")}}>
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <div className="text-xl font-semibold text-green-500 flex justify-center items-center mt-16">
              Empty Cart
            </div>
          )}
        </div>
      </div>
    </Foodprovider>
  );
}

export default Home;
