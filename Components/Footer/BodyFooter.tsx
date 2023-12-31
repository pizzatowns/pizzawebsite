"use client";
import { FacebookSharp, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function BodyFooter() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-20 mb-20">
      <div className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 justify-center items-start">
        <div className="relative h-[200px] w-[200px] mx-auto">
          <Image
            className=""
            src="/images/logo_black.png"
            alt="Pizza Towns"
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px), (max-width: 1200px)"
            priority
          />
        </div>
        <div className="flex flex-col items-center space-y-2 text-xl font-medium">
          <h2 className="text-rose-900 text-3xl font-bold tracking-wider mb-5">
            ABOUT
          </h2>
          <span>About Us</span>
          <span>Careers</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="flex flex-col space-y-2 text-xl font-medium">
          <h2 className="text-rose-900 text-3xl font-bold tracking-wider mb-5">
            NEVER MISS A DEAL
          </h2>
          <span>
            Receive special discounts and exclusive offers <br /> you won't find
            anywhere else!
          </span>
          <span className="border-4 border-green-800 py-5 bg-red-600/90 text-center text-white font-extrabold tracking-wider text2xl rounded-3xl shadow-2xl">
            JOIN ECLUB
          </span>
        </div>
        <div className="flex flex-col items-center space-y-2 text-xl font-medium">
          <h2 className="text-rose-900 text-3xl font-bold tracking-wider mb-5">
            FOLLOW US
          </h2>
          <div className="flex flex-row text-[64px] justify-center items-center space-x-3">
            <a
              href="https://www.facebook.com/people/Pizza-Towns/100094142049637/"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookSharp fontSize="inherit" />
            </a>

            <Instagram fontSize="inherit" />
            <LinkedIn fontSize="inherit" />
          </div>
        </div>
      </div>
    </div>
  );
}
