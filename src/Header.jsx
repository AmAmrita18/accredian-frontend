import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full  shadow-sm">
      <div className="flex justify-between  items-center w-[80%] max-w-[1200px]  py-5 mx-auto">
        <div className="">
          <div className="flex flex-row gap-6">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="md:w-[125px] md:h-[36.66px] w-[60px] h-[60px]  object-cover"
                width={120}
                height={36}
                loading="lazy"
              />
            </Link>
            <div className="">
              <button className="text-[14.88px] px-4 py-1 rounded-md font-[500] flex justify-center items-center leading-[28px] bg-[#1A73E8] text-white text-center">
                Courses <FaChevronDown className="text-white pl-1"/>
              </button>
            </div>
          </div>
        </div>

        <ul className="flex items-center   gap-3">
          <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
            <NavLink
              to="/"
              className="text-[15px] px-4 py-1 rounded-md font-[500] flex justify-center items-center leading-[28px] text-[#1A202C]  text-center"
            >
              Refer & Earn
            </NavLink>
          </li>
          <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
            <NavLink
              to="/"
            className="text-[15px] px-4 py-1 rounded-md font-[500] flex justify-center items-center leading-[28px] text-[#1A202C]  text-center"
            >
              Resources
            </NavLink>
          </li>
          <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
            <NavLink
              to="/"
            className="text-[15px] px-4 py-1 rounded-md font-[500] flex justify-center items-center leading-[28px] text-[#1A202C]  text-center"
            >
              About Us
            </NavLink>
          </li>
          <button className="text-[14.88px] px-4 py-1 rounded-md font-[500] flex justify-center items-center leading-[28px] bg-[#94A3B833] text-[#1A202C] text-center">
                Login </button>
              <button className="text-[14.88px] px-4 py-1 rounded-md font-[500] flex justify-center items-center leading-[28px] bg-[#1A73E8] text-white text-center">
                Try for free </button>
        </ul>

        
      </div>
    </div>
  );
};

export default Header;
