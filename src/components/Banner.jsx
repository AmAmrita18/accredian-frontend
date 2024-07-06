import React, { useState } from "react";
import banner from "../assets/banner.png";
import { IoMdCloseCircle } from "react-icons/io";

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

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 shadow-xl ">
      <div className="w-[30%] bg-[#EEF5FF] rounded-l-xl">
        <img
          src={banner}
          width={614}
          height={525}
          className="object-cover w-[620px] h-[538px]"
          alt=""
        />
      </div>
      <div className="bg-white p-8 rounded-r-xl shadow-lg w-[90%] max-w-[500px]">
        <div className="flex justify-end ">
          <button
            className="text-red-500 text-[35px] underline"
            onClick={closeModal}
          >
            <IoMdCloseCircle />
          </button>
        </div>
        <h2 className="text-[24px] font-[700] mb-4">Refer and Earn</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-[16px] font-[500] mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[16px] font-[500] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[16px] font-[500] mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button
            type="button"
            className="w-full py-2 bg-[#1A73E8] text-white rounded-md text-[16px] font-[500]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
