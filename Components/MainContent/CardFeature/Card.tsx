"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  data: {
    image_link: string;
    title: string;
    description: string;
    buttonTitle: string;
  };
}
const div1_responsive =
  "phone:h-[350px] phone:w-[180px]  tablet:h-[370px] tablet:w-[300px] desktop:h-[600px] desktop:w-[330px]";
const img1_responsive =
  "phone:h-[150px] phone:w-[180px] tablet:h-[200px]  tablet:w-[300px] desktop:h-[300px] desktop:w-[330px] desktop: rounded-xl";
const font_title_responsive =
  "font-bold phone:text-[14px] tablet:text-[18px] desktop:text-[24px] tracking-wider";
const font_description_responsive =
  "break-normal ml-4 phone:text-[8px] tablet:text-[10px] desktop:text-[16px] text-gray-400";

export default function Card({ data }: CardProps) {
  return (
    <div
      className={`relative ${div1_responsive} items-center shadow-2xl rounded-xl space-y-1`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className={`relative ${img1_responsive}`}>
          <Image
            className="-z-10 rounded-tl-xl rounded-tr-xl"
            src={data.image_link}
            alt="Pizza Towns"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px), (max-width: 1200px)"
            priority
          />
        </div>
        <div className="flex flex-col  justify-between items-center">
          <div className="flex flex-col space-y-1 p-2">
            <h2 className={`${font_title_responsive}`}>{data.title}</h2>
            <p className={`${font_description_responsive}`}>
              {data.description}
            </p>
          </div>
        </div>
        <div className="absolute bg-red-500 bottom-5 hover:bg-red-300 px-5 text-white p-1 rounded-2xl cursor-pointer font-bold">
          {data.buttonTitle}
        </div>
      </div>
    </div>
  );
}
