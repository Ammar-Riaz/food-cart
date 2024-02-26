import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HOC from "./HOC";

function FoodItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return <li>{item.product_name}</li>;
      })}
    </ul>
  );
}

export default HOC(FoodItemsList);
