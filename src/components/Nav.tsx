import Logo from "../assets/logo-with-text.png";
import { IoMdCart, IoMdMenu, IoMdClose } from "react-icons/io";
import Button from './common/Button'
import type { ProductType } from "../types";
import { useState, type Dispatch, type SetStateAction } from "react";

interface INavProps {
  cart: ProductType[];
  isCartClicked: boolean;
  setIsCartClicked: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ cart, isCartClicked, setIsCartClicked }: INavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCart = () => {
    setIsCartClicked(!isCartClicked);
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ["Catalogue", "Fasion", "Favourite", "Lifestyle"];

  return (
    <div className="fixed top-0 right-0 bg-white w-full z-50 shadow-sm">
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 container mx-auto">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-24 md:w-30 h-auto" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4 items-center uppercase relative">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="/" className="font-medium text-[#242323]">
                {link}
              </a>
            </li>
          ))}

          <span onClick={handleCart}>
            <IoMdCart className="text-[#242323] text-3xl mx-4 cursor-pointer" />
          </span>
          <div className="h-5 w-5 rounded-full bg-[#EBD96B] text-[#242323] flex justify-center items-center font-bold text-[14px] absolute -top-1 right-30">
            {cart.length}
          </div>

          <Button name="SIGN UP" />
        </ul>

        {/* Mobile Right Side: Cart + Hamburger */}
        <div className="flex items-center gap-4 lg:hidden">
          <span onClick={handleCart} className="relative">
            <IoMdCart className="text-[#242323] text-3xl cursor-pointer" />
            <div className="h-4 w-4 rounded-full bg-[#EBD96B] text-[#242323] flex justify-center items-center font-bold text-[10px] absolute -top-1 -right-1">
              {cart.length}
            </div>
          </span>

          <button onClick={handleMenu} className="text-[#242323] text-3xl cursor-pointer">
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 items-start uppercase px-6 pb-6">
          {navLinks.map((link) => (
            <li key={link}>
              
               <a href="/"
                className="font-medium text-[#242323]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <Button name="SIGN UP" />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
