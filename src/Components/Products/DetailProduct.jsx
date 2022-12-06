import CartWidget from "../icons/CartWidget";
import { useArrayCart } from "../../context/useArrayCart";
import { useContext } from "react";
import { useState } from "react";

const DetailProduct = ({ ImgArray, ImgMini }) => {
  const objectProduct = {
    id: 1,
    title: "Sneaker company",
    description:
      "These Low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. ",
    subtitle: "Fall Limited Sneakers",
    price: 250,
    discount: 0.5,
    images: ImgArray,
    imagesMini: ImgMini,
  };

  const { addCartProducts } = useContext(useArrayCart);

  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleAddCart = () => {
    addCartProducts({
      img: objectProduct.images,
      id: objectProduct.id,
      discountPrice: (
        objectProduct.price *
        (1 - objectProduct.discount)
      ).toFixed(2),
      title: objectProduct.title,
      quantity: count || 1,
    });
    setCount(0);
  };

  return (
    <section className="container mx-auto px-4 mt-3 md:px-0">
      <p className="font-bold mb-4 uppercase tracking-wide text-orange-400">
        {objectProduct.title}
      </p>
      <h2 className="font-bold text-3xl mb-4">{objectProduct.subtitle}</h2>
      <p className="text-gray-400 mb-4">{objectProduct.description}</p>
      <div className=" grid  grid-cols-3  font-bold md:grid-cols-[1fr_3fr] items-center gap-4 mb-5  md:gap-1 ">
        <span className="text-2xl">
          ${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}
        </span>
        <span className="bg-orange-400 rounded-md mx-auto p-1 text-white">
          {objectProduct.discount * 100}%
        </span>
        <span className="text-right text-lg md:cols-span-2 md:text-left text-gray-400 line-through">
          ${objectProduct.price.toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-[1fr_1.8fr]">
        <div className=" col-span-3 bg-gray-200 flex justify-between items-baseline pb-3 py-2 rounded-md px-5 align-center">
          <button className="text-3xl text-orange-400" onClick={decrementCount}>
            -
          </button>
          <span className="text-xl">{count}</span>
          <button
            className="text-3xl text-orange-400"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        <button
          className="col-span-3 bg-orange-400 text-white flex rounded-md py-3  w-full justify-center gap-2 transition-all hover:bg-orange-700"
          onClick={handleAddCart}
        >
          <CartWidget fill="#fff" />
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default DetailProduct;
