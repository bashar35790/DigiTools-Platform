import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Button from "../../utility/Button";

export default function Navbar({ cartCount, setActiveView }) {
  const [active, setActive] = useState(true);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto">
          <div className="navbar justify-between px-4 lg:px-8 h-20">
            {/* Left Side: Logo & Mobile Toggle */}
            <div className="navbar-start w-auto">
              <div className="flex items-center gap-4">
                <img
                  onClick={() => setActiveView("available")}
                  src={Logo}
                  alt="logo"
                  className="w-32 md:w-44 h-auto cursor-pointer object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
              <ul className="flex items-center gap-8 font-medium text-heading">
                <li>
                  <a onClick={() => setActiveView("available")} href="#" className="hover:text-brand1 transition-colors">Products</a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand1 transition-colors">Features</a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand1 transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand1 transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand1 transition-colors">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Right Side: Cart & Actions */}
            <div className="navbar-end w-auto flex items-center gap-2 md:gap-4">
              <div
                onClick={() => setActiveView("cart")}
                className="relative group cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-all active:scale-95"
              >
                <CiShoppingCart className="text-2xl md:text-3xl text-heading" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand2 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>

              <div className="hidden sm:flex items-center gap-4">
                <a className="cursor-pointer font-medium text-heading hover:text-brand1 transition-colors">Login</a>
                <Button title="Get Started" addStyle="hidden md:flex"></Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setActive(!active)}
                className="lg:hidden p-2 rounded-xl bg-gray-50 text-heading active:scale-95 transition-all"
              >
                {active ? (
                  <CgMenuRightAlt className="w-6 h-6" />
                ) : (
                  <IoClose className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-50 ${!active ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
              }`}
          >
            <ul className="flex flex-col gap-4 px-6 font-medium text-heading">
              <li>
                <a onClick={() => { setActiveView("available"); setActive(true); }} href="#" className="block py-2">Products</a>
              </li>
              <li>
                <a href="#" className="block py-2">Features</a>
              </li>
              <li>
                <a href="#" className="block py-2">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2">Testimonials</a>
              </li>
              <li>
                <a href="#" className="block py-2">FAQ</a>
              </li>
              <li className="pt-4 flex flex-col gap-4 sm:hidden">
                <a className="cursor-pointer text-center py-3 rounded-xl border border-gray-200">Login</a>
                <Button title="Get Started" addStyle="w-full"></Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
