"use client";
import Image from "next/image";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
export default function PopularItems() {
  const popular_items = [
    { src: "/images/bacon_rolls.png", description: "Bacon Rolls", likes: 1000 },
    {
      src: "/images/chickenwings.png",
      description: "Buffalo Chicken Wings",
      likes: 829,
    },
    {
      src: "/images/pizzatownscombo.png",
      description: "Pizza Towns Combo",
      likes: 803,
    },
    {
      src: "/images/pizzatownsbuffalochick.png",
      description: "Buffalo Chicken Pizza",
      likes: 783,
    },
    {
      src: "/images/pizzatownchickenbacon.png",
      description: "Chicken Bacon Pizza",
      likes: 715,
    },
    {
      src: "/images/pizzatownsartichokefiesta.png",
      description: "Artichoke Fiesta Pizza",
      likes: 666,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-10 space-y-10">
      <div className="flex flex-row items-center space-x-10">
        <div className="h-1 w-[350px] bg-rose-900" />
        <span className="text-4xl text-red-600 text-center font-bold tracking-wider">
          TOP PICKS
        </span>
        <div className="h-1 w-[350px] bg-rose-900" />
      </div>
      <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
        {popular_items.map((item, index) => (
          <div className="relative w-[300px] h-[300px] rounded-3xl drop-shadow-xl" key={index}>
            <Image
              className="rounded-3xl"
              src={item.src}
              alt={"Image not found"}
              fill={true}
              sizes="(max-width: 768px), (max-width: 1200px)"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute bottom-0 bg-white/90 w-full rounded-bl-3xl rounded-br-3xl p-3">
              <div className="flex flex-row justify-between items-center">
                <span className="text-md font-extrabold">
                  {item.description}
                </span>
                <div className="flex flex-row justify-center items-center space-x-2 text-md font-bold">
                  <span>{item.likes}</span>
                  <ThumbUpIcon fontSize="inherit" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
