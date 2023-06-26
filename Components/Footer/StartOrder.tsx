"use client";
import React from "react";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
export default function StartOrder() {
  return (
    <div className="flex bg-red-800  h-[170px] w-full justify-center items-center text-white font-bold tracking-widest cursor-pointer drop-shadow-2xl">
      <div className="flex justify-center items-center p-2 px-10 bg-red-600 hover:bg-red-400 rounded-3xl text-[30px]">
        <span>START ORDER</span>
        <DoubleArrowRoundedIcon fontSize="inherit" />
      </div>
    </div>
  );
}
