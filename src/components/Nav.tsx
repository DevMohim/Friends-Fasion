import Logo from "../assets/logo-with-text.png";
import { IoMdCart } from "react-icons/io";
import Button from './common/Button'
import type { ProductType } from "../types";
import {type Dispatch, type SetStateAction } from "react";

interface INavProps {
  cart: ProductType[];
  isCartClicked : boolean
  setIsCartClicked: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ cart,isCartClicked, setIsCartClicked }: INavProps) => {
  const handleCart = () => {
    setIsCartClicked(!isCartClicked);
  };
  return (
    <div className="fixed top-0 right-0 bg-white w-full">
      <nav className="flex justify-between items-center px-10 py-4 container mx-auto">
        <img src={Logo} alt="Logo" className="w-30 h-auto" />

        <ul className="flex gap-4 items-center uppercase relative">
          <li>
            <a href="/" className="font-medium text-[#242323]">
              Catalogue
            </a>
          </li>
          <li>
            <a href="/" className="font-medium text-[#242323]">
              Fasion
            </a>
          </li>
          <li>
            <a href="/" className="font-medium  text-[#242323]">
              Favourite
            </a>
          </li>
          <li>
            <a href="/" className="font-medium text-[#242323]">
              Lifestyle
            </a>
          </li>
          <span onClick={handleCart}>
            <IoMdCart className="text-[#242323] text-3xl mx-4 cursor-pointer" />
          </span>
          <div className="h-5 w-5 rounded-full bg-[#EBD96B] text-[#242323] flex justify-center items-center font-bold text-[14px] absolute -top-1 right-30">
            {cart.length}
          </div>
          <Button name="SIGN UP" />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
