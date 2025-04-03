import React, { useState, useEffect, useRef } from "react";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi"; // Import the outlined map pin icon
import { useNavigate } from "react-router-dom";
import CompletedWasteIcon from "../../assets/images/completed-waste.png"; // Import the image

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [totalWaste, setTotalWaste] = useState(0);
  const [lastDisposalDate, setLastDisposalDate] = useState("");
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [completedWasteSummary, setCompletedWasteSummary] = useState([]);
  const [setBottomPadding] = useState(0); // State for dynamic padding
  const footerRef = useRef(null); // Ref for FooterNavBar
  const navigate = useNavigate();

  const handleOpenChange = (open) => {
    setIsMenuOpen(open);
  };

  const handleBackClick = () => {
    navigate("/homepage");
  };

  const handleCardClick = () => {
    navigate("/pastWaste", { state: { imageSrc: CompletedWasteIcon } }); // Pass the image source
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    const ordinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
  };

  useEffect(() => {
    const simulatedData = {
      totalWaste: 120,
      lastDisposalDate: "2025-04-02",
      upcomingEvent: {
        title: "Community Sanitation & Waste Day",
        date: "2025-04-10",
      },
    };

    const simulatedCompletedWaste = [
      {
        collector: "Clean Waste Collector",
        type: "Chemical waste that is properly tied",
        location: "Lekki, Phase 1",
        date: "2025-03-15",
        time: "10:30 AM",
      },
      {
        collector: "Clean Waste Collector",
        type: "Chemical waste that is properly tied",
        location: "Lekki, Phase 1",
        date: "2025-03-15",
        time: "10:30 AM",
      },
      {
        collector: "Clean Waste Collector",
        type: "Chemical waste that is properly tied",
        location: "Lekki, Phase 1",
        date: "2025-03-15",
        time: "10:30 AM",
      },
      {
        collector: "Clean Waste Collector",
        type: "Chemical waste that is properly tied",
        location: "Lekki, Phase 1",
        date: "2025-03-15",
        time: "10:30 AM",
      },
      {
        collector: "Clean Waste Collector",
        type: "Chemical waste that is properly tied",
        location: "Lekki, Phase 1",
        date: "2025-03-15",
        time: "10:30 AM",
      },
    ];

    setTotalWaste(simulatedData.totalWaste);
    setLastDisposalDate(simulatedData.lastDisposalDate);
    setUpcomingEvent(simulatedData.upcomingEvent);
    setCompletedWasteSummary(simulatedCompletedWaste);
  }, []);

  useEffect(() => {
    const updatePadding = () => {
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
        setBottomPadding(footerHeight + 16); // Add some extra space (16px)
      }
    };

    updatePadding(); // Initial padding calculation
    window.addEventListener("resize", updatePadding); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-y-auto relative">
      <Header isMenuOpen={isMenuOpen} handleOpenChange={handleOpenChange} />
      <div className="flex items-center justify-between mt-4 px-4">
        <FaArrowLeft
          className="w-4 h-4 text-black cursor-pointer"
          onClick={handleBackClick}
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow">
          Dashboard
        </h1>
      </div>

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
                {formatDate(lastDisposalDate)}
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Total Disposed */}
        <div className="relative border border-violet-50 bg-violet-50 rounded-lg p-3 flex-1 min-w-[170px] h-[110px]">
          <div>
            <h5 className="text-left text-sm font-normal text-black">
              Total Disposed
            </h5>
            <h4 className="text-sm text-black font-bold mt-2">
              {totalWaste}kg
            </h4>
            <div className="flex items-center mt-4">
              <AiOutlineCalendar className="text-zinc-600 mr-2" />
              <span className="text-sm text-zinc-600">
                {formatDate(lastDisposalDate)}
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
        <div className="mt-4 pb-20">
          <h2 className="text-left text-2xl font-semibold text-black mt-6">
            Completed waste summary
          </h2>
          {completedWasteSummary.length > 0 ? (
            completedWasteSummary.slice(0, 4).map((waste, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg p-3 pl-5 pr-5 pt-3 pb-3 border-l-4 border-green-800 drop-shadow-md flex flex-col gap-3 w-full max-w-[407px] h-auto mb-4 cursor-pointer" // Added cursor-pointer for clickability
                onClick={handleCardClick} // Navigate to PasteWaste on click
              >
                {/* Add the image to the top-left corner */}
                <img
                  src={CompletedWasteIcon} // Use the imported image
                  alt="Trash Disposal Icon"
                  className="absolute top-4 left-4 w-15 h-15 rounded-full"
                />
                <h5 className="text-sm font-bold text-black ml-20">
                  {waste.collector}
                </h5>
                <p className="text-sm text-black ml-20">{waste.type}</p>
                <div className="flex items-center gap-1 mt-2 ml-20">
                  <HiOutlineLocationMarker className="text-black w-5 h-5" />
                  <span className="text-sm text-black">{waste.location}</span>
                </div>
                <div className="flex items-center gap-4 mt-2 ml-20">
                  <div className="flex items-center">
                    <AiOutlineCalendar className="text-zinc-500 font-medium mr-1" />
                    <span className="text-sm font-medium text-zinc-500">
                      {formatDate(waste.date)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <AiOutlineClockCircle className="text-zinc-500 mr-1" />
                    <span className="text-sm text-zinc-500">{waste.time}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-lg font-bold text-black">
              No completed waste deposits yet.
            </h1>
          )}
        </div>
      </div>

      <FooterNavBar ref={footerRef} />
    </div>
  );
};

export default Dashboard;
