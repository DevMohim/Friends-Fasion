import { IoIosArrowRoundForward } from "react-icons/io";
import type { ProductType } from "../types";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

export interface NewArrivalProps {
  product: ProductType;
  setCart: Dispatch<SetStateAction<ProductType[]>>;
  totalPrice: number
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

export default function ProductCard({
  product,
  setCart,
  totalPrice, setTotalPrice,
}: NewArrivalProps) {
  const { images, title } = product;

  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAddToCart = (): void => {
    setIsAdded(true);
    setCart((prevProduct) => [...prevProduct, product]);
    setTotalPrice(totalPrice + product.price);
    toast.success(`${title} added to cart successfully`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="shadow-2xl shadow-gray-300 border border-gray-300 rounded-md p-4 space-y-2">
      <img src={images[0]} alt={title} className="w-full h-auto" />
      <div className="flex justify-between items-end gap-4">
        <div>
          <div className="w-full h-6 overflow-hidden">
            <h3>{title}</h3>
          </div>
          <a href="/" className="mb-2 text-[#7f7f7f] text-sm">
            Explore more...
          </a>
        </div>
        <div>
          <IoIosArrowRoundForward className="cursor-pointer text-2xl text-[#7f7f7f]" />
        </div>
      </div>
      <button
        type="button"
        className={`font-normal text-white px-4 py-1.5 rounded-md border border-[#242323] transition-all duration-300 ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#242323] cursor-pointer hover:bg-white hover:text-[#242323]"
        }`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}
