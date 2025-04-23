import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import { FaArrowLeft } from "react-icons/fa";

const Support = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBackClick = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  const handleSaveClick = () => {
    console.log("Save button clicked");
    // Add your save logic here
  };

  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <Header />
      <div className="flex items-center justify-between mt-4">
        <FaArrowLeft
          className="w-4 h-4 text-black cursor-pointer sm:w-5 sm:h-5 md:w-6 md:h-6"
          onClick={handleBackClick}
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow sm:text-3xl md:text-4xl">
          Support
        </h1>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 sm:text-xl md:text-2xl">
          Basic Information
        </h2>
      </div>

      <div className="mt-4 space-y-6">
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="mt-1 block w-full rounded-sm border border-neutral-500 sm:text-xl placeholder:text-zinc-600 placeholder:pl-2 h-14"
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="mt-1 block w-full rounded-sm border border-neutral-500 sm:text-xl placeholder:text-zinc-600 placeholder:pl-2 h-14"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 block w-full rounded-sm border border-neutral-500 sm:text-xl placeholder:text-zinc-600 placeholder:pl-2 h-14"
          />
        </div>
        <div>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            className="mt-1 block w-full rounded-sm border border-neutral-500 sm:text-xl placeholder:text-zinc-600 placeholder:pl-2 h-14"
          />
        </div>
        <div>
          <textarea
            id="note"
            name="note"
            placeholder="Write note here"
            className="mt-1 block w-full rounded-sm border border-neutral-500 sm:text-2xl placeholder:text-zinc-600 placeholder:pl-2 pt-4 h-40"
          ></textarea>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={handleSaveClick}
            className="bg-green-800 text-white px-6 py-2 rounded-full font-semibold w-full sm:text-base md:text-lg hover:bg-green-700 transition-all"
          >
            Send Request
          </button>
        </div>
      </div>
      <div className="mt-auto">
        <FooterNavBar />
      </div>
    </div>
  );
};

export default Support;
