import LogoImg from "../assets/LOGO.png";
import { useState } from "react";
import navOpenIcon from "../assets/navOpen.png";
import navCloseIcon from "../assets/navClose.png";
import BgImg from "../assets/bg.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false); // Set default to false so menu is hidden initially

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative h-[150px] w-full flex justify-between items-center rounded-lg shadow-md border-4 border-purple-900 z-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={BgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
      {/* Left Logo Section */}
      <div className="pt-20 pl-10 z-30">
        <img
          src={LogoImg}
          className="h-[120px] w-[180px] pb-[40px] pl-[80px]"
          alt="Logo"
        />
      </div>

      {/* Right Menu for Larger Screens */}
      <div className="hidden lg:flex pr-20 gap-4 pt-20 items-center pb-[35px] z-30">
        <ul className="flex gap-20 pr-12">
          <li className="hover:cursor-pointer hover:text-gray-600 text-white font-semibold text-sm">
            <a href="#aboutus">About Us</a>
          </li>
          <li className="hover:cursor-pointer hover:text-gray-600 text-white font-semibold text-sm">
            <a href="#services">The Team</a>
          </li>
          <li className="hover:cursor-pointer hover:text-gray-600 text-white font-semibold text-sm">
            <a href="#form">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon for Smaller Screens */}
      <div
        onClick={toggleNav}
        className="lg:hidden w-full flex justify-end z-30 cursor-pointer"
      >
        {nav ? (
          <img
            src={navCloseIcon}
            className="h-[30px] w-[30px] mr-2 bg-purple-400"
            alt="Close Nav"
          />
        ) : (
          <img
            src={navOpenIcon}
            className="h-[50px] w-[50px] bg-purple-400"
            alt="Open Nav"
          />
        )}
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      <div
        className={`${
          nav ? "flex" : "hidden"
        } w-1/5 h-fit absolute right-0 top-[45px] flex-col items-center pb-8 pt-20 z-30 bg-purple-200 rounded-lg shadow-lg`}
      >
        <ul className="flex flex-col">
          <li className="hover:cursor-pointer hover:text-gray-600">
            <a href="#aboutus" onClick={toggleNav}>
              About Us
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-gray-600">
            <a href="#services" onClick={toggleNav}>
              The Team
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-gray-600">
            <a href="#reviews" onClick={toggleNav}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
