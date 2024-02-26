import React from "react";
import "./FeaturedProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { filteredData } from "../features/food/foodSlice";
import { click } from "@testing-library/user-event/dist/click";
import { useNavigate } from "react-router";

function FeaturedProducts() {
  const dispatch = useDispatch();
  const foodReducer = useSelector((state) => state.food);
  const navigateTo = useNavigate();

  const filteredFood = (e) => {
    dispatch(filteredData(e.target.name));
  };

  const clickHandler = (result) => {
    navigateTo(`/result/?product_id=${result.product_id}`);
  };

  return (
    <div className="features">
      <h1>Featured Products</h1>
      <hr />
      <ul className="products-list">
        <li className="product">
          <a
            className="nav-link active"
            aria-current="page"
            href="#display-bar"
            onClick={filteredFood}
            name="ALL"
          >
            All
          </a>
        </li>
        <li className="product">
          <a
            onClick={filteredFood}
            className="nav-link active"
            aria-current="page"
            href="#display-bar"
            name="fruits"
          >
            Fruits
          </a>
        </li>
        <li className="product">
          <a
            onClick={filteredFood}
            className="nav-link active"
            aria-current="page"
            href="#display-bar"
            name="meat"
          >
            Fresh Meat
          </a>
        </li>
        <li className="product">
          <a
            onClick={filteredFood}
            className="nav-link active"
            aria-current="page"
            href="#display-bar"
            name="vegetables"
          >
            Vegetables
          </a>
        </li>
        <li className="product">
          <a
            onClick={filteredFood}
            className="nav-link active"
            aria-current="page"
            href="#display-bar"
            name="fastfood"
          >
            Fastfood
          </a>
        </li>
      </ul>
      <div id="display-bar" className="display-products">
        {foodReducer.freshFood.map((item) => {
          return (
            <div
              key={Math.random()}
              className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              style={{ width: "18rem" }}
              onClick={() => {
                clickHandler(item);
              }}
            >
              <img src={item.image_src} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{item.product_name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
