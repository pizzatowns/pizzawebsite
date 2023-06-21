import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <div className="bg-gray-50 p-2">
      <div className="flex flex-col tablet:flex-row items-center justify-center tablet:justify-around">
        <div className="relative w-[300px] h-[100px] ">
          <a
            href="https://pizzatowns.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.svg"
              alt="Pizza Towns"
              fill={true}
              priority
            />
          </a>
        </div>
        <div className="space-x-5 hidden tablet:flex">
          <a className="font-bold text-[16px] laptop:text-[24px] cursor-pointer hover:text-red-800">
            MENU
          </a>
          <a className="font-bold text-[16px] laptop:text-[24px] cursor-pointer hover:text-red-800">
            DEALS
          </a>
          <a className="font-bold text-[16px] laptop:text-[24px] cursor-pointer hover:text-red-800">
            ECLUB
          </a>
        </div>
        <div className="flex h-10 p-2 laptop:p-3 laptop:px-10 items-center justify-center bg-red-700 hover:bg-red-500 cursor-pointer rounded-lg">
          <span className="font-bold text-[16px] laptop:text-[24px] text-white ">
            START ORDER{" "}
          </span>
        </div>
        {/* <div className="flex flex-col space-y-1 cursor-pointer tablet:hidden">
            <div className="h-1 w-8 bg-red-800 rounded-2xl"/>
            <div className="h-1 w-8 bg-red-800 rounded-2xl"/>
            <div className="h-1 w-8 bg-red-800 rounded-2xl"/>
        </div> */}
      </div>
    </div>
  );
}
