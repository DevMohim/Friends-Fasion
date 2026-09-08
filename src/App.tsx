import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Nav from "./components/Nav";
import NewArrivals from "./components/NewArrivals";
import type { ProductType } from "./types";
import AllProducts from "./components/AllProducts";
import DiscountSection from "./components/DiscountSection";
import YoungsFav from "./components/YoungsFav";
import DownloadApp from "./components/DownloadApp";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const ProductsPromise = async (): Promise<ProductType[]> => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};
const productPromise = ProductsPromise();

function App() {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [isCartClicked, setIsCartClicked] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAllProducts = (products: ProductType[]): void => {
    setAllProducts(products);
  };

  return (
    <>
      <div className="mb-5">
        <Nav
          cart={cart}
          isCartClicked={isCartClicked}
          setIsCartClicked={setIsCartClicked}
        />
        {isCartClicked ? (
          <Cart
            cart={cart}
            setCart={setCart}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        ) : (
          <>
            <Banner />
            <Brands />
            <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
              <NewArrivals
                productsPromise={productPromise}
                onHandleAllProducts={handleAllProducts}
              />
            </Suspense>
            <AllProducts
              products={allProducts}
              setCart={setCart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
            <DiscountSection />
            <YoungsFav />
            <DownloadApp />
            <NewsLetter />
          </>
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
