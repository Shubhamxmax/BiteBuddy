import { createContext,useContext } from "react";
import React from "react";

export const Foodcontext=createContext({
    show_food: (item)=>{}
});

export const Foodprovider=Foodcontext.Provider;
