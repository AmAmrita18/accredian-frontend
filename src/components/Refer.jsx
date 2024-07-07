import React, { useState } from "react";
import referBg from "/refer.png";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import banner from "../assets/banner.png";
import { IoMdCloseCircle } from "react-icons/io";
const Refer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full bg-[#EEF5FF] py-8">
      <h1 className="font-[600] text-[27.66px] leading-[43px] text-center text-[#1A202C]">
        How Do I{" "}
        <span className="font-[600] text-[27.66px] leading-[43px] text-center text-[#1A73E8]">
          Refer?
        </span>
      </h1>
      <div
        style={{
          backgroundImage: `url('${referBg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
        className="w-[80%] h-[490px]  mx-auto max-w-[1200px] my-6 flex flex-row items-center justify-center 
        "
      >
        <div className="flex flex-col items-center justify-center gap-y-6">
            <img src={icon1} alt="" />
            <p className="w-[50%] text-center font-[400] text-[16px] leading-[22px]">Submit referrals easily via our website’s referral section.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-6 font-[400] text-[16px] leading-[22px]">
            <img src={icon2} alt="" />
            <p className="w-[50%] text-center">Earn rewards once your referral joins an Accredian program.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-6 font-[400] text-[16px] leading-[22px]">
            <img src={icon3} alt="" />
            <p className="w-[50%] text-center">Both parties receive a bonus 30 days after program enrollment.</p>
        </div>
      </div>
      <button  onClick={openModal} className="text-[14.88px] px-16 py-3 rounded-md font-[500] flex justify-center items-center leading-[28px] bg-[#1A73E8] text-white text-center mx-auto">
      Refer Now </button>
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
              className="w-full px-3 py-2 border resize-none  border-gray-300 rounded-md"
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
export default Refer;
