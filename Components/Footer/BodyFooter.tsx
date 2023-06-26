"use client"
import { FacebookSharp, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
export default function BodyFooter() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-20 mb-20">
      <div className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 justify-center items-start">
        <div className="relative h-[300px] w-[300px] mx-auto">
          <Image
            className=""
            src="/images/logo_black.png"
            alt="Pizza Towns"
            fill={true}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="flex flex-col items-center space-y-5 text-xl font-medium">
          <span className="text-rose-900 text-4xl font-bold tracking-wider mb-10">
            ABOUT
          </span>
          <span>About Us</span>
          <span>Careers</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="flex flex-col space-y-8 text-xl font-medium">
          <span className="text-rose-900 text-4xl font-bold tracking-wider mb-10">
            NEVER MISS A DEAL
          </span>
          <span>
            Receive special discounts and exclusive offers <br /> you won't find
            anywhere else!
          </span>
          <span className="border-4 border-green-800 py-5 bg-red-600/90 text-center text-white font-extrabold tracking-wider text2xl rounded-3xl shadow-2xl">
            JOIN ECLUB
          </span>
        </div>
        <div className="flex flex-col items-center space-y-5 text-xl font-medium">
          <span className="text-rose-900 text-4xl font-bold tracking-wider mb-10">
            FOLLOW US
          </span>
          <div className="flex flex-row text-[64px] justify-center items-center space-x-3">
            <FacebookSharp fontSize="inherit"/>
            <Instagram fontSize="inherit"/>
            <LinkedIn fontSize="inherit"/>
          </div>
        </div>
      </div>
    </div>
  );
}
