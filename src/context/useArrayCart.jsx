import { useState } from "react";
import { createContext } from "react";

export const useArrayCart = createContext();

export default (props) => {
  const [ItemsCart, setItemsCart] = useState([]);

  const addCartProducts = (product) => {
    if (ItemsCart.length === 0) {
      return;
      setItemsCart([...ItemsCart, product]);
    }
    setItemsCart(
      ItemsCart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };
  const removeCartProducts = (id) => {
    setItemsCart(ItemsCart.filter((item) => item.id !== id));
  };

  const totalWidget = ItemsCart.reduce(
    (acc, current) => current.quantity + acc,
    0
  );

  return (
    <useArrayCart.Provider
      value={{ ItemsCart, addCartProducts, removeCartProducts, totalWidget }}
    >
      {props.children}
    </useArrayCart.Provider>
  );
};
