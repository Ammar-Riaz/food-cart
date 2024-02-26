export const getCartList = () => {
  const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  return cartList;
};

export const setCartList = (cartList) => {
  localStorage.setItem("cartList", JSON.stringify(cartList));
};

export const removeCartListItem = (itemToRemove) => {
  //it will remove only one item from the local storage cart list
  const cartList = getCartList();
  const updatedItems = cartList.filter((item) => {
    return item.product_id !== itemToRemove.product_id;
  });
  setCartList(updatedItems);
};

export const removeCartList = () => {
  //which will remove all the items in cart
};
