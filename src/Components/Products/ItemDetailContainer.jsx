import DetailProduct from "./DetailProduct";
import SlideProduct from "./SlideProduct";

const ItemDetailProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:min-h-screen[calc(100vh-88px-3px)] md:container md:mx-auto ">
      <SlideProduct />
      <DetailProduct />
    </main>
  );
};

export default ItemDetailProduct;
