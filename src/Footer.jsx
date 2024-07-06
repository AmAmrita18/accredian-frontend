import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo2.png";
const Footer = () => {
  return (
    <div className="w-full bg-[#282828]">
      <div className="w-[80%] h-full mx-auto max-w-[1200px] py-10 flex justify-between flex-row">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="md:w-[140px] md:h-[36.66px] w-[60px] h-[60px] object-cover"
            width={120}
            height={36}
            loading="lazy"
          />
        </Link>
        <div className="">
          <button className="text-[14px] px-8 py-1 rounded-md font-[500] flex justify-center items-center leading-[24px] bg-[#1A73E8] border-white border-2 text-white text-center">
            Schedule 1-on-1 Call Now{" "}
           
          </button>
          <h1 className="text-white text-[14px] font-[400] leading-[20px] text-center">
            Speak with our Learning Advisor{" "}
          </h1>
        </div>
        
      </div>
      <div className="w-[80%] h-full mx-auto max-w-[1200px]  border-t-2 border-t-white">
        <h1 className="text-white py-4 text-[14px] font-[400] leading-[20px] text-center">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </h1>
        </div>

    </div>
  );
};

export default Footer;
