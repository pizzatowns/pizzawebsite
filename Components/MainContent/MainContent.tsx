import React from "react";
import SlideAds from "./SlideAds/SlideAds";
import CardFeature from "./CardFeature/CardFeature";
import PopularItems from "../PopularItems/PopularItems";
import NavBar from "../NavBar/NavBar";
import StartOrder from "../Footer/StartOrder";

export default function MainContent() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <SlideAds />
      <CardFeature />
      <PopularItems />
      <StartOrder/>
    </div>
  );
}
