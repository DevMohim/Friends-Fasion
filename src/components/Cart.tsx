import { BiTrash } from "react-icons/bi";
import type { ProductType } from "../types";
import type { Dispatch, SetStateAction } from "react";

export interface CartProps {
  cart: ProductType[];
  setCart: Dispatch<SetStateAction<ProductType[]>>;
  totalPrice: number;
  setTotalPrice : Dispatch<SetStateAction<number>>
}

export default function Cart({ cart, setCart, totalPrice ,setTotalPrice}: CartProps) {
  const handleDelete = (product:ProductType): void => {
    const remainingItems = cart.filter((p) => p.id !== product.id);
    setCart(remainingItems);
    setTotalPrice(totalPrice - product.price )
  };
  if(cart.length === 0){
   return (
      <div className="container mx-auto px-10 py-4 mt-20">
         <div className="w-full h-50 flex flex-col justify-center items-center">
            <h1 className="text-[#a40000] font-bold  text-3xl">Your Cart Is Empty!</h1>
            <p className="text-[14px] text-[#242323] mt-3">Please add some products.</p>
         </div>

      </div>
   )
  }
  return (
    <div className="container mx-auto px-10 py-4 mt-20">
      <h1 className="text-xl font-semibold mb-5">
        Total : ${totalPrice.toFixed(2)}{" "}
      </h1>
      {cart.map((product) => {
        return (
          <div className="container mx-auto py-2">
            <div className="grid grid-cols-1 gap-2 items-center border border-gray-400/50 rounded-md">
              <div className="flex justify-between items-center gap-4 py-2 px-5">
                <div className="flex gap-2 items-center">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-16 h-16 border border-gray-500/50 rounded-lg"
                  />
                  <div>
                    <h1 className="font-semibold text-lg">{product.title}</h1>
                    <p className="font-medium">${product.price}</p>
                  </div>
                </div>
                <span
                  className="hover:bg-gray-300/50 p-3 rounded-md cursor-pointer transition-all delay-100"
                  onClick={() => handleDelete(product)}
                >
                  <BiTrash className="text-red-500 text-2xl" />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
