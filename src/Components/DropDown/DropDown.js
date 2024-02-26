import React, { useEffect, useState } from "react";
import "./DropDown.css";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { filteredData } from "../features/food/foodSlice";
function DropDown() {
  const [filteredItems, setFilteredItems] = useState([]);
  const navigateTo = useNavigate();

  const foodReducer = useSelector((state) => state.food);
  const list = foodReducer.foodList.data;

  useEffect(() => {
    const filteredData = list.reduce((accumulator, item) => {
      const filterdCategory = !accumulator.some((accItem) => {
        return accItem.category_name === item.category_name;
      });

      if (filterdCategory) {
        accumulator.push(item);
      }

      return accumulator;
    }, []);

    setFilteredItems(filteredData);
  }, []);

  const clickHandler = (result) => {
    navigateTo(`/shop/?category_name=${result}`);
  };

  console.log(filteredItems);

  return (
    <div
      style={{ height: "570px", background: "lightgray", borderRadius: "5px" }}
    >
      <div className="dropdown">
        <a
          className="btn btn-success dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All Categories
        </a>

        <ul className="dropdown-menu">
          {filteredItems.map((item) => {
            return (
              <li
                className="dropdown-item"
                onClick={() => {
                  clickHandler(item.category_name);
                }}
              >
                <a className="dropdown-item">{item.category_name}</a>
              </li>
            );
          })}

          {/* <li
            onClick={() => {
              clickHandler("vegetables");
            }}
          >
            <a className="dropdown-item">Vegetables</a>
          </li>
          <li
            onClick={() => {
              clickHandler("fastfood");
            }}
          >
            <a className="dropdown-item">Fast Food</a>
          </li>
          <li
            onClick={() => {
              clickHandler("fruits");
            }}
          >
            <a className="dropdown-item">Fresh Fruits</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
