import React, { useState } from "react";
import { getCartList, setCartList } from "../../services/cartList";
import TopHeader from "../TopHeader/TopHeader";
import Modal from "../Modal/Modal";
import "./MyCart.css";

function MyCart() {
  const [cart, setCart] = useState(getCartList());

  const changeHandler = (e, item) => {
    // const updatedCart = cart.map((cartItem) =>
    //   cartItem.product_id === item.product_id
    //     ? { ...cartItem, quantity: e.target.value }
    //     : cartItem
    // );
    // setCart(updatedCart);
  };

  const addItemHandler = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.product_id === item.product_id
        ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
        : cartItem
    );
    setCart(updatedCart);
    setCartList(updatedCart);
  };

  const removeItemHandler = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.product_id === item.product_id
          ? { ...cartItem, quantity: (cartItem.quantity || 0) - 1 }
          : cartItem
      );
      setCart(updatedCart);
      setCartList(updatedCart);
    } else {
      const updatedCart = cart.filter((cartItem) => {
        return item.product_id !== cartItem.product_id;
      });
      setCart(updatedCart);
      setCartList(updatedCart);
    }
  };

  let pageContent;

  if (cart.length <= 0) {
    pageContent = (
      <div>
        <TopHeader />
        <div
          class="card"
          style={{
            width: "18rem",

            margin: "auto",
            marginTop: "200px",
          }}
        >
          <h1>No Item is in the cart</h1>
        </div>
      </div>
    );
  } else {
    pageContent = (
      <div>
        <TopHeader />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.product_id}>
                <td>{item.product_name}</td>
                <td>{item.price}$</td>
                <td>
                  <div className="btn-toolbar mb-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => removeItemHandler(item)}
                    >
                      Remove
                    </button>
                    <input
                      style={{ width: "40px" }}
                      type="text"
                      className="form-control"
                      value={item.quantity}
                      onChange={(e) => changeHandler(e, item)}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => addItemHandler(item)}
                    >
                      Add
                    </button>
                  </div>
                </td>
                <td>{+item.price * item.quantity}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return pageContent;
}

export default MyCart;
