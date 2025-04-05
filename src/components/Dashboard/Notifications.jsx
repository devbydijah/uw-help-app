import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import { FaArrowLeft } from "react-icons/fa";

const Notifications = () => {
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

  return (
    <div>
      <Header />
      <div className="flex items-center justify-between mt-4 px-4">
        <FaArrowLeft
          className="w-4 h-4 text-black cursor-pointer"
          onClick={handleBackClick}
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow">
          Notifications
        </h1>
      </div>
      <FooterNavBar />
    </div>
  );
};

export default Notifications;
