import { useContext } from "react";
import { useArrayCart } from "../context/useArrayCart";

import DeleteIcon from "./icons/DeleteIcon";

export default () => {
  const { ItemsCart, removeCartProducts } = useContext(useArrayCart);
  return (
    <>
      <section className="my-10 absolute top-[%125] left-0 z-10  w-full   md:left-full md:-translate-x-full  md:max-w-md  ">
        <div className=" mx-4 bg-white rounded-md drop-shadow-md">
          <h4 className="px-6 py-8 font-bold text-lg">Cart</h4>
          <hr />

          {ItemsCart.length === 0 && (
            <p className="text-center py-6 font-bold">Your cart is empty.</p>
          )}

          {ItemsCart.map((product) => (
            <div
              key={ItemsCart.id}
              className="grid gap-6 grid-cols-[1fr_4fr_1fr] p-10 px-6 py-8 items-center"
            >
              <img
                src={ItemsCart.img}
                alt="productCart"
                className="rounded-md"
              />
              <div>
                <h6>{product.subtitle}</h6>
                <p>
                  <span>
                    ${product.discountPrice} x {product.quantity}
                  </span>{" "}
                  <span className="font-bold">
                    ${(product.discountPrice * product.quantity).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                className="ml-auto"
                onClick={() => removeCartProducts(product.id)}
              >
                <DeleteIcon className="hover:orange-400" />
              </button>
            </div>
          ))}
          {ItemsCart.length !== 0 && (
            <div className="px-6 pb-8">
              <button className=" font-bold w-full py-4 text-white bg-orange-400 rounded-md hover:bg-pink-700 transition-all">
                Comprar
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

//3.08.55 falta nada dale metele que son pastelusis.

// acomodar array, y hacer checkout
