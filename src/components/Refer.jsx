import React, { useState } from "react";
import referBg from "/refer.png";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import Modal from "./Modal";

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

export default Refer;
