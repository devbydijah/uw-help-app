import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import recyclingImage from "../../assets/images/recycling.png";

const Onboarding2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/onboarding1"); // Navigate to the previous onboarding screen
  };

  const handleSkipClick = () => {
    localStorage.setItem("hasSeenOnboarding", "true"); // Set flag in Local Storage
    navigate("/login"); // Redirect to login
  };

  const handleNextClick = () => {
    navigate("/onboarding3"); // Navigate to the next onboarding screen
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between p-6 relative">
      {/* Back Button */}
      <header className="absolute top-4 left-4">
        <FaArrowLeft
          className="text-zinc-900 w-4 h-4 cursor-pointer"
          onClick={handleBackClick}
          aria-label="Go back to Onboarding 1"
        />
      </header>

      {/* Skip Button */}
      <nav
        className="absolute top-4 right-4 text-green-800 cursor-pointer font-sans font-normal text-lg leading-6 tracking-wide text-center align-middle"
        onClick={handleSkipClick}
        aria-label="Skip onboarding"
      >
        Skip
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center space-y-6 text-center">
        {/* Image */}
        <section>
          <img
            src={recyclingImage}
            alt="Recycling"
            className="w-[300px] h-[300px] animate-fade-in"
          />
        </section>

        {/* Text Content */}
        <section className="flex flex-col items-center">
          <h1 className="text-black font-bold text-center leading-[120%] tracking-[-2%] text-2xl mb-4">
            Welcome to UW Help!
          </h1>
          <p className="text-black text-center leading-[140%] text-lg mb-4">
            Dispose of waste responsibly and connect with trusted garbage
            carriers and plumbers in your area.
          </p>
        </section>

        {/* Progress Indicator */}
        <section className="flex gap-2 mt-4">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-800 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </section>

        {/* Next Button */}
        <section>
          <button
            className="bg-green-800 text-white w-[350px] h-[40px] gap-2 rounded-full mx-auto cursor-pointer"
            onClick={handleNextClick}
            aria-label="Go to Onboarding 3"
          >
            Next
          </button>
        </section>
      </main>
    </div>
  );
};

export default Onboarding2;
