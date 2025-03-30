import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import recyclingImage2 from "../../assets/images/recycling2.png";

const Onboarding3 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/onboarding2"); // Navigate to the previous onboarding screen
  };

  const handleSkipClick = () => {
    localStorage.setItem("hasSeenOnboarding", "true"); // Set flag in Local Storage
    navigate("/register"); // Redirect to registration
  };

  const handleNextClick = () => {
    localStorage.setItem("hasSeenOnboarding", "true"); // Set flag in Local Storage
    navigate("/register"); // Redirect to registration
  };

  return (
    <div className="bg-white min-h-screen relative">
      {/* Back Button */}
      <header className="absolute top-4 left-4">
        <FaArrowLeft
          className="text-zinc-900 w-4 h-4 cursor-pointer"
          onClick={handleBackClick}
          aria-label="Go back to Onboarding 2"
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
      <main className="flex flex-col items-center justify-center min-h-screen space-y-4 text-center">
        {/* Image */}
        <img
          src={recyclingImage2}
          alt="Recycling"
          className="w-[319px] h-[319px] mt-1 mb-40 animate-fade-in"
        />

        {/* Text Content */}
        <section className="mt-[-180px] mb-5">
          <h1 className="text-2xl font-bold text-center mb-4">
            How UW Help Works
          </h1>
          <div className="w-[363px] h-[159px] gap-[21px] flex flex-col">
            <ul className="list-none space-y-5">
              <li className="flex items-center">
                <div className="w-4.5 h-4.5 border border-green-800 bg-green-800 rounded-[1px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="ml-2 leading-[1.4]">
                  Schedule waste pickups at your convenience.
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-4.5 h-4.5 border border-green-800 bg-green-800 rounded-[1px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="ml-2 leading-[1.4]">
                  Get matched with verified agents.
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-4.5 h-4.5 border border-green-800 bg-green-800 rounded-[1px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="ml-2 leading-[1.4]">
                  Dispose of hazardous waste.
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-4.5 h-4.5 border border-green-800 bg-green-800 rounded-[1px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="ml-2 leading-[1.4]">Sell scraps.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="flex gap-2 mt-4">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-800 rounded-full"></span>
        </section>

        {/* Next Button */}
        <button
          className="bg-green-800 text-white w-[350px] h-[40px] gap-2 rounded-full mx-auto cursor-pointer"
          onClick={handleNextClick}
          aria-label="Complete onboarding and go to registration"
        >
          Next
        </button>
      </main>
    </div>
  );
};

export default Onboarding3;
