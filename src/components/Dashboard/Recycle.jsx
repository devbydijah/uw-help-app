import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import { FaArrowLeft } from "react-icons/fa";

const Recycle = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Initialize useLocation

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on component mount
  }, []);

  const handleBackClick = () => {
    if (location.state?.from) {
      navigate(location.state.from); // Navigate to the specified location
    } else {
      navigate(-1); // Navigate to the previous page
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-between mt-4 px-4">
        <FaArrowLeft
          className="w-4 h-4 text-black cursor-pointer"
          onClick={handleBackClick}
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow">
          Recycle
        </h1>
      </div>

      <FooterNavBar />
    </div>
  );
};

export default Recycle;
