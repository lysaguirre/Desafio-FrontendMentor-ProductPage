import ImgProduct1 from "../assets/images/image-product-1.jpg";
import ImgProduct2 from "../assets/images/image-product-2.jpg";
import ImgProduct3 from "../assets/images/image-product-3.jpg";
import ImgProduct4 from "../assets/images/image-product-4.jpg";

import ImgProductSm1 from "../assets/images/image-product-1-thumbnail.jpg";
import ImgProductSm2 from "../assets/images/image-product-2-thumbnail.jpg";
import ImgProductSm3 from "../assets/images/image-product-3-thumbnail.jpg";
import ImgProductSm4 from "../assets/images/image-product-4-thumbnail.jpg";
import PreviousIcon from "../icons/PreviousIcon";
import NextIcon from "../icons/NextIcon";
import { useState } from "react";

const ImgArray = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];
const ImgMini = [ImgProductSm1, ImgProductSm2, ImgProductSm3, ImgProductSm4];

const SlideProduct = () => {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    index === ImgArray.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ImgArray.length - 1) : setIndex(index - 1);
  };

  return (
    <section className="grid md: grid-cols-4 md:gap-4 my-4">
      <div className="col-span-4 relative">
        <img
          src={ImgArray[index]}
          alt="Img-product"
          className="object-cover aspect-[16/13]  w-full md:aspect-[16/18] md:rounded-md xl:aspect-[16/16] 2xl:max-h-[500px]"
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2  flex justify-between w-full px-4">
          <button
            className="grid place-items-center bg-white h-10 w-10 rounded-full "
            onClick={handleClickPrev}
          >
            <PreviousIcon />
          </button>
          <button
            className="grid place-items-center bg-white h-10 w-10 rounded-full "
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>

      <img
        src={ImgProductSm1}
        className="hidden md:block md:rounded-md"
        alt=""
      />
      <img
        src={ImgProductSm2}
        className="hidden md:block md:rounded-md"
        alt=""
      />
      <img
        src={ImgProductSm3}
        className="hidden md:block md:rounded-md"
        alt=""
      />
      <img
        src={ImgProductSm4}
        className="hidden md:block md:rounded-md"
        alt=""
      />
    </section>
  );
};

export default SlideProduct;
