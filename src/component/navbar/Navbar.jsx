import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Button from "../../utility/Button";

export default function Navbar() {
  const [active, setActive] = useState(true);

  return (
    <>
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex justify-between container mx-auto px-5">
            {/* logo */}
            <div className="flex flex-col md:flex-row justify-between max-md:w-full md:navbar-start ">
              <div className="flex justify-between">
                <img src={Logo} alt="logo" className="w-44 h-10 cursor-pointer" />
                {/* Menu bar  */}
                <div
                  onClick={() => setActive(!active)}
                  className="w-fit h-fit cursor-pointer md:hidden"
                >
                  {active ? (
                    <CgMenuRightAlt className="w-6 h-6" />
                  ) : (
                    <IoClose className="w-6 h-6" />
                  )}
                </div>
              </div>

              <div className={`navbar-center flex flex-col md:hidden absolute right-2 -top-50  ${!active && " visible top-15"} transition-all duration-300 ease-in-out bg-white`}>
                <ul className="menu flex-col px-1">
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* middle nav links  */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            {/* end buttons  */}
            <div className="navbar-end gap-4 hidden lg:flex">
              <CiShoppingCart className="text-2xl cursor-pointer" />
              <a className="cursor-pointer">Login</a>
              <Button title="Get Started"></Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
