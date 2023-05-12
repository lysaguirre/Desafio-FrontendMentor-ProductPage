import { data } from "../utilidades/data";
import { useState, useEffect } from "react";
import { customFetch } from "../utilidades/customFetch";

const ItemListcontainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch(2000, data)
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <main className="container place-content-center mx-auto grid grid-cols-3  ms:grid-cols-1">
        {data.map((product) => (
          <div
            className=" flex w-full 
            p-10 gap-2"
          >
            <div className=" w-60 p-2 bg-gray-200 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
              {
                <img
                  className="h-40 object-cover rounded-xl "
                  src={product.image}
                  alt="product"
                />
              }
              <div className="p-2 text-center ">
                <h1 className="font-bold text-lg">{product.name}</h1>
                <p className="text-sm text-gray-600"> {product.description}</p>
                <p className="text-sm text-gray-600">
                  Stock Disponible {product.stock}
                </p>
                <p className="text-sm text-gray-600"> ${product.cost}</p>
              </div>
              <div className="m-2 text-center">
                <a
                  href="#"
                  className="text-white bg-pink-300 rounded-md p-2 hover:bg-pink-700"
                >
                  Agregar Al carrito
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default ItemListcontainer;
