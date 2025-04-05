import React, { useState, useEffect } from "react";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import CompletedWasteList from "../shared/CompletedWasteList";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [totalWaste, setTotalWaste] = useState(0);
  const [lastDisposalDate, setLastDisposalDate] = useState("");
  const [lastDisposalWeight, setLastDisposalWeight] = useState(0);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/homepage");
  };

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    navigate("/pastWaste");
  };

  useEffect(() => {
    const simulatedData = {
      totalWaste: 120,
      lastDisposalDate: "2nd April, 2025", // Text format: "2nd April, 2025"
      lastDisposalWeight: 15,
      upcomingEvent: {
        title: "Community Sanitation & Waste Day",
        date: "3rd April, 2025",
      },
    };

    setTotalWaste(simulatedData.totalWaste);
    setLastDisposalDate(simulatedData.lastDisposalDate);
    setLastDisposalWeight(simulatedData.lastDisposalWeight);
    setUpcomingEvent(simulatedData.upcomingEvent);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} handleOpenChange={setIsMenuOpen} />
      <div className="flex items-center justify-between mt-4 px-4">
        <FaArrowLeft
          className="w-4 h-4 text-black cursor-pointer"
          onClick={handleBackClick}
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow">
          Dashboard
        </h1>
      </div>

      <div className="flex-grow">
        <div className="mt-6">
          <h2 className="text-left ml-4 text-2xl font-semibold text-black">
            Waste Summary
          </h2>
        </div>

        <div className="flex flex-nowrap gap-4 px-4 mt-6">
          {/* Card 1: Total Waste */}
          <div className="relative border border-yellow-50 bg-yellow-50 rounded-lg p-3 flex-1 max-w-[170px] h-[110px]">
            <div>
              <h5 className="text-left text-sm font-normal text-black">
                All Total Waste
              </h5>
              <h4 className="text-sm text-black font-bold mt-2">
                {totalWaste}kg
              </h4>
              <div className="flex items-center mt-4">
                <AiOutlineCalendar className="text-zinc-600 mr-2" />
                <span className="text-sm text-zinc-600">
                  {lastDisposalDate}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Last Disposal */}
          <div className="relative border border-green-50 bg-green-50 rounded-lg p-3 flex-1 max-w-[170px] h-[110px]">
            <div>
              <h5 className="text-left text-sm font-normal text-black">
                Last Disposal
              </h5>
              <h4 className="text-sm text-black font-bold mt-2">
                {lastDisposalWeight}kg
              </h4>
              <div className="flex items-center mt-4">
                <AiOutlineCalendar className="text-zinc-600 mr-2" />
                <span className="text-sm text-zinc-600">
                  {lastDisposalDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-left ml-4 text-2xl font-semibold text-black mt-6">
            Events
          </h2>
        </div>
        <div className="px-4">
          <div className="border border-yellow-300 bg-yellow-300 rounded-lg p-4 mt-6 min-w-[170px] h-[120px]">
            <div>
              <h5 className="text-left text-sm font-semibold text-black">
                Upcoming Events
              </h5>
              {upcomingEvent ? (
                <h4 className="text-sm text-black font-semibold mt-1">
                  {upcomingEvent.title}
                </h4>
              ) : (
                <h4 className="text-sm text-black font-semibold mt-1">
                  No upcoming events
                </h4>
              )}
            </div>
            <div className="pt-3">
              <button className="bg-green-800 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-green-900">
                Register
              </button>
            </div>
          </div>
        </div>

        <CompletedWasteList onCardClick={handleCardClick} />
      </div>

      <FooterNavBar />
    </div>
  );
};

export default Dashboard;
