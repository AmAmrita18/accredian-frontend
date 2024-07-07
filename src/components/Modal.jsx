import {useState} from 'react'
import banner from "../assets/banner.png";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ closeModal }) => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://accredian-backend-28mi.onrender.com/api/v1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            alert('Form submitted successfully');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to submit form');
        }
    };

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
                value={formData.fullName}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[16px] font-[500] mb-2"
                htmlFor="message"
              >
                Desired Course
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border resize-none  border-gray-300 rounded-md"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-2 bg-[#1A73E8] text-white rounded-md text-[16px] font-[500]"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Modal
