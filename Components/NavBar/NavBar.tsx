import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <div className="bg-gray-50">
      <div className="flex items-center justify-around">
        <div className="relative w-[400px] h-[140px]">
          <a
            href="https://pizzatowns.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.svg"
              alt="Pizza Towns"
              // width={100}
              // height={200}
              fill={true}
              style={{ objectFit: "contain" }}
              priority
            />
          </a>
        </div>
        <div className="flex space-x-10">
          <a className="font-bold text-[24px] cursor-pointer hover:text-red-800">
            MENU
          </a>
          <a className="font-bold text-[24px] cursor-pointer hover:text-red-800">
            DEALS
          </a>
          <a className="font-bold text-[24px] cursor-pointer hover:text-red-800">
            ECLUB
          </a>
        </div>
        <div className="flex h-10 items-center justify-center bg-red-700 hover:bg-red-500 cursor-pointer rounded-lg">
          <span className="font-bold text-[24px] text-white px-10">
            START YOUR ORDER{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
