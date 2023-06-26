"use client";
import Image from "next/image";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export default function SlideAds() {
  return (
    <div className="">
      <div className="relative h-[100px] phone:h-[200px] tablet:h-[300px] laptop:h-[550px] desktop:h-[800px]">
        <Image
          className="-z-10"
          src="https://www.pizzaguys.com/slider/assest/images/slide-5.jpg"
          alt="Pizza Towns"
          fill={true}
          // style={{objectFit: "contain"}}
          priority
        />
        <div className="flex h-full justify-between items-center">
          <div className="flex h-5 w-5 tablet:h-14  tablet:w-14 bg-gray-800/40 items-center justify-center m-5 rounded-full">
            <NavigateBeforeIcon sx={{ fontSize: 60, color: "white" }} />
          </div>
          <div className="flex h-full justify-center items-end mb-10 space-x-1">
            <div className="h-2 w-8 bg-slate-800 rounded-xl"> </div>
            <div className="h-2 w-8 bg-slate-600/50 rounded-xl"></div>
            <div className="h-2 w-8 bg-slate-600/50 rounded-xl"></div>
            <div className="h-2 w-8 bg-slate-600/50 rounded-xl"></div>
            <div className="h-2 w-8 bg-slate-600/50 rounded-xl"></div>
            <div className="h-2 w-8 bg-slate-600/50 rounded-xl"></div>
            <div className="h-2 w-8 bg-slate-600/50 rounded-xl"></div>
          </div>
          <div className="flex h-14 w-14 bg-gray-800/40 items-center justify-center m-5 rounded-full">
            <NavigateNextIcon sx={{ fontSize: 60, color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
