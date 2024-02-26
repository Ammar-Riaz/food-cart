import React from "react";
import TopHeader from "../TopHeader/TopHeader";
import Hero from "../Hero/Hero";
import MultipleItemsCarousel from "../Carousel/MultipleItemsCarousel";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import FoodItemsList from "../Ammar/FoodItemsList";
import { useSelector } from "react-redux";
function Home({ logoutHandler }) {
  const foodReducer = useSelector((state) => state.food);
  const list = foodReducer.foodList.data;
  console.log(list);
  return (
    <div>
      <TopHeader logoutHandler={logoutHandler} />
      <Hero />
      <MultipleItemsCarousel />
      <FeaturedProducts />
      <FoodItemsList list={list} />
    </div>
  );
}

export default Home;
