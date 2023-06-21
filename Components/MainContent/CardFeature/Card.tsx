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

export default function Card({ data }: CardProps) {
  return (
    <div className="flex flex-col h-[370px] w-[270px] items-center shadow-2xl rounded-xl space-y-1 border-2 border-gray-200">
      <div className="relative h-[200px] w-[270px] rounded-xl">
        <Image
          className="-z-10 rounded-tl-xl rounded-tr-xl"
          src={data.image_link}
          alt="Pizza Towns"
          fill={true}
          priority
        />
      </div>
      <div className="flex flex-col h-[170px] justify-between items-center">
        <div className="flex flex-col space-y-1 p-2">
          <span className="font-bold text-[16px] tracking-wider">
            {data.title}
          </span>
          <p className="break-normal ml-4 text-[10px] text-gray-400">
            {data.description}
          </p>
        </div>
        <div className="bg-red-500 hover:bg-red-300 px-5 text-white mb-2 rounded-2xl cursor-pointer font-bold">{data.buttonTitle}</div>
      </div>
    </div>
  );
}
