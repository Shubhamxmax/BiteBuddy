import { createContext,useContext } from "react";
import image1 from "../assets/image1.avif";
import React from "react";

export const Foodcontext=createContext({
    show_food: (item)=>{} , 
    cate: [  {"id": 1, "food_name": "Pancakes", "food_category": "breakfast", "food_type": "veg", "food_quantity": 1, "food_image": image1, "price": 499}],
    show_cart:false,
    update_cart:()=>{}
});

export const Foodprovider=Foodcontext.Provider;
