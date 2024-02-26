import React, { useState } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../features/food/foodSlice";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function UserLoginForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const foodReducer = useSelector((state) => state.food);
  const dispatch = useDispatch();

  const navigateTo = useNavigate();

  let debounceTimer;

  const changeHandler = (e) => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 500);

    // Filter the data based on the search term
    const filteredItems = foodReducer.foodList.data.filter((item) =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredResults(filteredItems);
  };

  console.log(filteredResults);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const clickHandler = (result) => {
    navigateTo(`/result/?product_id=${result.product_id}`);
  };

  return (
    <div className="userlogin">
      <div>
        <form className="d-flex" role="search" onSubmit={submitHandler}>
          <input
            onChange={changeHandler}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div
          className="dropdown-list"
          style={{ display: filteredResults.length > 0 ? "block" : "none" }}
        >
          {filteredResults.map((result, index) => (
            <div
              onClick={() => {
                clickHandler(result);
              }}
              key={index}
            >
              {result.product_name}
            </div>
          ))}
        </div>
      </div>
      <div className="card ">
        <img
          src="https://www.aldi.us/fileadmin/fm-dam/Products/Categories/Fresh_Produce/fresh_produce_mobile_MH.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title">Fruit Fresh</h5>
          <p className="card-text hero-des">Fruit fresh 100% Organic</p>
          <p className="card-text hero-info">
            <small>Free Pickup and Delivery Available</small>
          </p>
          <a class="btn btn-success shop-btn mt-3 " href="/shop" role="button">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserLoginForm;
