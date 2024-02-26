import React, { useState, useEffect } from "react";
import "./FoodShop.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import TopHeader from "../TopHeader/TopHeader";

function FoodShop() {
  let [searchParams] = useSearchParams();
  //   const [searchedItem, setSearchedItem] = useState(null);
  const [foodList, setFoodList] = useState(null);

  const foodReducer = useSelector((state) => state.food);

  const navigateTo = useNavigate();

  useEffect(() => {
    const productCategory = searchParams.get("category_name");
    const list = foodReducer.foodList.data;
    if (productCategory) {
      const categoryList = list.filter(
        (item) => item.category_name === productCategory
      );
      setFoodList(categoryList);
    } else {
      setFoodList(list);
    }
  }, [searchParams, foodReducer]);

  //   console.log(searchedItem);

  const clickHandler = (result) => {
    navigateTo(`/result/?product_id=${result.product_id}`);
  };

  let pageContent;

  if (foodList) {
    pageContent = (
      <div className="foodshop-container">
        <TopHeader />
        <h1 className="header">Our Food Menu</h1>
        <div className="food-list">
          {foodList.map((item) => {
            return (
              <div
                key={Math.random()}
                className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => {
                  clickHandler(item);
                }}
              >
                <img src={item.image_src} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text item-text">{item.product_name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    pageContent = (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return pageContent;
}

export default FoodShop;
