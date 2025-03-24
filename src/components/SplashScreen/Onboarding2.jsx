import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import recyclingImage from "../assets/images/recycling.png";

const Onboarding2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSkipClick = () => {
    navigate("/onboarding3");
  };

  const handleGetStartedClick = () => {
    navigate("/onboarding3");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center relative">
      <header className="absolute top-4 left-4">
        <FaArrowLeft
          className="text-zinc-900 w-4 h-4 cursor-pointer"
          onClick={handleBackClick}
        />
      </header>
      <nav
        className="absolute top-4 right-4 text-green-800 cursor-pointer font-sans font-normal text-lg leading-6 tracking-wide text-center align-middle"
        onClick={handleSkipClick}
      >
        Skip
      </nav>
      <main className="flex flex-col items-center justify-center space-y-1 text-center">
        <section>
          <img
            src={recyclingImage}
            alt="Recycling"
            className="w-[427px] h-[449px]"
          />
        </section>
        <section className="flex flex-col items-center">
          <h1 className="text-black font-bold text-center leading-[120%] tracking-[-2%] text-2xl mb-4">
            Welcome to UW Help!
          </h1>
          <p className="text-black text-center leading-[140%] text-lg mb-4">
            Dispose of waste responsibly and connect with trusted garbage
            carriers and plumbers in your area.
          </p>
        </section>
        <section>
          <button
            className="bg-green-800 text-white w-[350px] h-[40px] gap-2 rounded-full mx-auto cursor-pointer mb-10"
            onClick={handleGetStartedClick}
          >
            Next
          </button>
        </section>
      </main>
    </div>
  );
};

export default Onboarding2;
