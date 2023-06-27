import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="bg-navbar p-2">
      <div className="flex flex-col tablet:flex-row items-center justify-center tablet:justify-around">
        <Link href="https://pizzatowns.com">
          <div className="relative w-[300px] h-[140px] ">
            <Image
              src="/logo.svg"
              alt="Pizza Towns"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              priority
            />
          </div>
        </Link>
        <div className="space-x-5 hidden tablet:flex font-bold text-[16px] laptop:text-[24px]">
          <a className="cursor-pointer hover:text-red-800">MENU</a>
          <a className="cursor-pointer hover:text-red-800">DEALS</a>
          <a className="cursor-pointer hover:text-red-800">ECLUB</a>
        </div>
        <div className="flex h-10 p-2 laptop:p-3 laptop:px-10 items-center justify-center bg-red-700 hover:bg-red-500 cursor-pointer rounded-lg">
          <span className="font-bold text-[16px] laptop:text-[24px] text-white ">
            START ORDER{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
