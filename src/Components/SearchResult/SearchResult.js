import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchResult.css";
import TopHeader from "../TopHeader/TopHeader";

import { useSearchParams } from "react-router-dom";
import { getCartList, setCartList } from "../../services/cartList";
import { useNavigate } from "react-router-dom";

function SearchResult() {
  //   const foodReducer = useSelector((state) => state.food);
  const foodReducer = useSelector((state) => state.food);
  const foodList = foodReducer.foodList.data;
  let [searchParams] = useSearchParams();
  const productID = searchParams.get("product_id");
  const [searchedItem, setSearchedItem] = useState(null);

  useEffect(() => {
    if (productID) {
      const item = foodList.filter((item) => item.product_id === +productID);
      setSearchedItem(item[0]);
    }
  }, [searchParams, foodList]);

  const clickHandler = () => {
    const cartList = getCartList();
    alert("Your item is successfully added to the cart. Plz visit Your cart");
    const isItemInCart = cartList.some(
      (cartItem) => cartItem.product_id === searchedItem.product_id
    );

    if (isItemInCart) {
      const updatedCart = cartList.map((cartItem) =>
        cartItem.product_id === searchedItem.product_id
          ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
          : cartItem
      );

      setCartList(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity set to 1
      const updatedCart = [...cartList, { ...searchedItem, quantity: 1 }];
      setCartList(updatedCart);
    }
  };

  return (
    <div>
      <TopHeader />

      <div className="search-container">
        <div class="card mb-6" style={{ maxwidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src={searchedItem?.image_src}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{searchedItem?.product_name}</h5>
                <p class="card-text">
                  Available Stock: {searchedItem?.available_stock}
                </p>
                <p class="card-text">Price:{searchedItem?.price}$</p>
                <a
                  class="btn btn-success shop-btn mt-3 "
                  style={{ width: "100%" }}
                  role="button"
                  onClick={() => {
                    clickHandler();
                  }}
                >
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
