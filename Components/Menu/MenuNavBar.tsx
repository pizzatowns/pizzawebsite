"use client";
import { LocalMallRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MenuNavBar() {
  return (
    <div className="flexx flex-col">
      <div className="flex flex-row h-[100px] w-full justify-between items-center border-b-2 border-b-slate-400/20 p-5">
        <div className="flex flex-col h-full items-center justify-center">
          <span className="text-center py-w px-5 rounded-xl border-2 border-black border-dotted text-white  bg-red-500/80 font-bold tracking-wider">
            <h1>
              SIGN IN <br /> EARN REWARD
            </h1>
          </span>
        </div>
        <div className="relative h-[200px] w-[200px]">
          <Link href="/">
            <Image
              className="absolute top-[50px] bg-white"
              src="/images/logo_black.png"
              alt="Pizza Towns Logo Image"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2 px-5 rounded-xl border-2 border-black border-dotted py-3 bg-green-500/80 text-white font-bold tracking-wider">
          <h1>CHECK OUT</h1>
          <LocalMallRounded sx={{ fontSize: 40 }} />
        </div>
      </div>
      <div className="flex flex-row h-[100px] items-center justify-between px-10">
        <div className="flex flex-start space-x-10 font-bold">
            <span>Apps</span>
            <span>Pizza</span>
            <span>Flatbreads</span>
            <span>Wings</span>
            <span>Pasta</span>
        </div>
        <div className="flex flex-end space-x-10 font-bold">
            <span>Fresh Salads</span>
            <span>Desserts</span>
            <span>Drinks</span>
            <span>Extra</span>
            <span>Coupons</span>
        </div>
      </div>
    </div>
  );
}
