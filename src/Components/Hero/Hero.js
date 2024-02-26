import React from "react";
import "./Hero.css";
import DropDown from "../DropDown/DropDown";
import Filter from "../Filter/Fliter";
import Carousel from "../Carousel/MultipleItemsCarousel";
function Hero() {
  return (
    <div className="hero">
      <DropDown />
      <Filter />
    </div>
  );
}

export default Hero;
