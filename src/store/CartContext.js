import React from "react";

const CartContext = React.createContext({
  items: [],
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
