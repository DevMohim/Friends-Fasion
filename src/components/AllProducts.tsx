import { useState, type Dispatch, type SetStateAction } from "react";
import type { ProductType } from "../types";
import ProductCard from "./ProductCard";

export interface NewArrivalsProps {
  products: ProductType[];
  setCart: Dispatch<SetStateAction<ProductType[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  totalPrice : number
}

export default function NewArrivals({ products, setCart,totalPrice, setTotalPrice }: NewArrivalsProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section className="container mx-auto px-10 py-4">
      <h1 className="mb-10 mt-5 font-black text-[32px]"> All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {isClicked
          ? products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setCart={setCart}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            ))
          : products
              .slice(1, 9)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  setCart={setCart}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              ))}
      </div>

      <div className="flex items-center justify-center mt-5">
        <button
          type="button"
          className="font-normal bg-[#242323] text-white px-4 py-1.5 rounded-md cursor-pointer"
          onClick={handleClick}
        >
          {isClicked ? "Hide Products" : "Show all products"}
        </button>
      </div>
    </section>
  );
}
