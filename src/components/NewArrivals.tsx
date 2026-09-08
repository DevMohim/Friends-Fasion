import {use, useEffect} from "react";
import type { ProductType } from "../types";
import NewArrival from "./NewArrival";

export interface NewArrivalsProps {
  productsPromise: Promise<ProductType[]>;
  onHandleAllProducts: (products: ProductType[]) => void;
}

export default function NewArrivals({
  productsPromise,
  onHandleAllProducts,
}: NewArrivalsProps) {
  const products = use(productsPromise);

  useEffect(() => {
    onHandleAllProducts(products);
  }, [products, onHandleAllProducts]);

  return (
    <section className="container mx-auto px-10 py-4">
      <h1 className="mb-10 mt-5 font-black text-[32px]"> New Arrival</h1>
      <div className="grid grid-cols-4 gap-5 ">
        {products.slice(1,5).map((product) => (
          <NewArrival key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
