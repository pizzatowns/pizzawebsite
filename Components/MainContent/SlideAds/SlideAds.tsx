"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const imgObj = [
  {
    imgSrc: "/slideImgs/combo.png",
    title: "Specialty",
    detail: "Pizza Towns Combo 😍😍",
    style: "text-yellow-400",
    icon: "",
  },
  {
    imgSrc: "/slideImgs/bacon.png",
    title: "Cheese Bacon Rolls",
    detail: "Only $9.99",
    style: "text-yellow-400 text-[46px]",
    icon: "",
  },
  {
    imgSrc: "/slideImgs/chickenwings.png",
    title: "Most Popular",
    detail: "Flavor on your choice (◕‿◕)",
    style: "text-yellow-400",
    icon: "",
  },
  {
    imgSrc: "/slideImgs/pepsico.png",
    title: "FREE 2-Liter Soda",
    detail: "when you pick up any order over $25!",
    icon: "/slideImgs/walk.svg",
  },
];

const imgObjLength = imgObj.length;

export default function SlideAds() {
  const [imgIndex, setImgIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % imgObjLength);
    }, 3000); // Adjust the interval duration as desired (e.g., 3000ms = 3 seconds)

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  const previousImg = () =>
    setImgIndex((imgIndex + imgObjLength - 1) % imgObjLength);

  const nextImg = () => setImgIndex((imgIndex + 1) % imgObjLength);

  const indicatorDots = Array.from({ length: imgObjLength }, (_, index) => (
    <div
      className={`h-2 w-8 ${
        index === imgIndex ? "bg-white" : "bg-white/50"
      } rounded-xl`}
      key={index}
    ></div>
  ));

  return (
    <div className="relative h-[100px] phone:h-[200px] tablet:h-[300px] laptop:h-[550px] desktop:h-[800px] bg-black">
      <Image
        className="z-10"
        src={imgObj[imgIndex].imgSrc}
        alt="Pizza Towns"
        fill
        style={{ objectFit: "contain" }}
        priority
        // ref={(el) => (imgRefs.current[imgIndex] = el)}
      />
      <div className="absolute hidden laptop:flex top-1/4 left-[100px] w-[500px] p-5 text-white font-serif font-semibold rounded-3xl z-20">
        <div className="flex flex-col justify-center items-center space-y-10 text-center">
          <h1 className="text-[42px]">{imgObj[imgIndex].title}</h1>
          <p className={`text-[30px] ${imgObj[imgIndex].style}`}>
            {imgObj[imgIndex].detail}
          </p>
          {imgObj[imgIndex].icon && (
            <Image
              src={imgObj[imgIndex].icon}
              alt="not found"
              width={100}
              height={100}
            />
          )}

          <span className="rounded-2xl px-5 py-3 bg-red-700 hover:bg-red-400 cursor-pointer">
            ORDER NOW
          </span>
        </div>
      </div>
      <div className="flex h-full justify-between items-center">
        <div className="flex h-5 w-5 tablet:h-14  tablet:w-14 bg-gray-800/40 items-center justify-center m-5 rounded-full">
          <NavigateBeforeIcon
            className="cursor-pointer z-20"
            sx={{ fontSize: 60, color: "white" }}
            onClick={previousImg}
          />
        </div>
        <div className="flex h-full justify-center items-end mb-10 space-x-1 z-20">
          {indicatorDots}
        </div>
        <div className="flex h-14 w-14 bg-gray-800/40 items-center justify-center m-5 rounded-full">
          <NavigateNextIcon
            className="cursor-pointer z-20"
            sx={{ fontSize: 60, color: "white" }}
            onClick={nextImg}
          />
        </div>
      </div>
    </div>
  );
}
