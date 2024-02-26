import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function HOC(Component) {
  return function ENHANCEDCOMP(props) {
    const [list, setList] = useState([]);
    // const filteredItems = list.filter((item) => {
    //   item.product_name.toLowerCase().includes(searchedItem.toLowerCase());
    // });

    useEffect(() => {
      setList(props.list);

      return () => {};
    }, [props.list]);

    const changeHandler = (e) => {
      let value = e.target.value;
      const filteredList = list.filter((item) => {
        return item.product_name.toLowerCase().includes(value.toLowerCase());
      });
      setList(filteredList);
    };

    return (
      <div style={{ color: "blue" }}>
        <input
          onChange={changeHandler}
          type="search"
          placeholder="Search..."
        ></input>
        <Component {...props} list={list}></Component>
      </div>
    );
  };
}

export default HOC;
