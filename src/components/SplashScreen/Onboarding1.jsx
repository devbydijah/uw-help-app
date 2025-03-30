import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uwLogo from "../../assets/images/uw-logo.png";

const Onboarding1 = () => {
  const navigate = useNavigate();

  // Check if the user has already seen the onboarding screens
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (hasSeenOnboarding) {
      navigate("/login"); // Redirect to login if onboarding has been seen
    }
  }, [navigate]);

  const handleNext = () => {
    navigate("/onboarding2");
  };

  const handleSkip = () => {
    localStorage.setItem("hasSeenOnboarding", "true"); // Set flag in Local Storage
    navigate("/login"); // Redirect to login
  };

  return (
    <main className="bg-green-900 min-h-screen flex flex-col items-center justify-between p-6">
      {/* Logo */}
      <img
        src={uwLogo}
        alt="UW Logo"
        className="w-[204px] h-[229px] mt-20 animate-fade-in"
      />

      {/* Progress Indicator */}
      <div className="flex gap-2 mt-10">
        <span className="w-3 h-3 bg-white rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-sm mt-10">
        <button
          onClick={handleSkip}
          className="text-white text-sm underline focus:outline-none"
          aria-label="Skip onboarding"
        >
          Skip
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-green-900 px-4 py-2 rounded-full text-sm font-semibold focus:outline-none"
          aria-label="Next onboarding screen"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Onboarding1;
