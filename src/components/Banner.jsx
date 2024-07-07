import React, { useState } from "react";
import banner from "../assets/banner.png";
import Modal from "./Modal";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full ">
      <div className="w-[80%] h-full bg-[#EEF5FF] rounded-3xl shadow-2xl mx-auto max-w-[1200px] mb-16 mt-8 flex flex-row">
        <div className="w-[40%] pl-10 py-24">
          <h1 className="text-[80px] font-[700] flex justify-center items-center leading-[88px] text-[#1A202C]">
            Let’s Learn & Earn
          </h1>
          <p className="text-[40px] my-10 font-[400] leading-[65px] text-[#1A202C]">
            Get a chance to win up-to{" "}
            <span className="text-[54px] font-[700] leading-[65px] text-[#1A73E8]">
              Rs. 15,000{" "}
            </span>
          </p>
          <button
            className="text-[14.88px] px-8 py-1 rounded-md font-[500] flex justify-center items-center leading-[28px] bg-[#1A73E8] text-white text-center"
            onClick={openModal}
          >
            Refer Now
          </button>
        </div>
        <div className="w-[60%]">
          <img
            src={banner}
            width={814}
            height={725}
            className="object-cover w-[714px] h-[625px]"
            alt=""
          />
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Banner;
