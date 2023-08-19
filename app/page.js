"use client"
import React,{useState} from "react";
import Color_box from "./Color_box.js";
import Count_box from "./Count_box.js";
import Change_color from "./Change_color.js";
import color_data from "./data.js";
import "./globals.css";
const Page=()=>{
    const [colors_data,setColors_data]=useState(color_data)
    return(
        <>
            <Color_box/>
            <Count_box/>
            <Change_color/>
            
        </>
    );
};
export default Page;
