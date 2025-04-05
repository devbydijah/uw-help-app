import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CompletedWasteIcon from "../../assets/images/completed-waste.png"; // Import the image

const CompletedWasteList = ({ onCardClick }) => {
  const [completedWasteSummary, setCompletedWasteSummary] = useState([]);

  // Scroll to the top when the component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Function to format dates
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

  // Simulated data for completed waste summary
  useEffect(() => {
    const simulatedCompletedWaste = [
      {
        collector: "Clean Waste Collector",
        type: "Chemical waste that is properly tied",
        location: "Lekki, Phase 1",
        date: "2025-03-15",
        time: "10:30 AM",
        paymentStatus: "Paid",
        collectionStatus: "Picked",
      },
      {
        collector: "Eco Waste Services",
        type: "Plastic waste",
        location: "Ikeja, Lagos",
        date: "2025-03-20",
        time: "2:00 PM",
        paymentStatus: "Unpaid",
        collectionStatus: "Pending",
      },
      {
        collector: "Green Earth Collectors",
        type: "Organic waste",
        location: "Victoria Island, Lagos",
        date: "2025-03-25",
        time: "9:00 AM",
        paymentStatus: "Paid",
        collectionStatus: "Picked",
      },
      {
        collector: "WastePro",
        type: "E-waste",
        location: "Yaba, Lagos",
        date: "2025-03-30",
        time: "11:00 AM",
        paymentStatus: "Unpaid",
        collectionStatus: "Pending",
      },
    ];

    setCompletedWasteSummary(simulatedCompletedWaste);
  }, []);

  return (
    <div className="mt-5 pb-20 px-4">
      <h2 className="text-left text-2xl font-semibold text-black mb-6">
        Completed waste summary
      </h2>
      {completedWasteSummary.length > 0 ? (
        completedWasteSummary.map((waste, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg p-3 pl-5 pr-5 pt-3 pb-3 border-l-4 border-green-800 drop-shadow-md flex flex-col gap-3 w-full max-w-[407px] h-auto mb-4 cursor-pointer"
            onClick={() => onCardClick(waste)} // Pass the waste data on click
          >
            <img
              src={CompletedWasteIcon}
              alt="Trash Disposal Icon"
              className="absolute top-2 left-4 w-17 h-16 rounded-full"
            />
            <h5 className="text-sm font-bold text-black ml-20">
              {waste.collector}
            </h5>
            <p className="text-sm text-black ml-20 -mt-1">{waste.type}</p>
            <div className="flex items-center gap-1 mt-2 ml-20">
              <HiOutlineLocationMarker className="text-black w-5 h-5" />
              <span className="text-sm text-black">{waste.location}</span>
            </div>
            <div className="flex items-center gap-4 ml-20">
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
  );
};

export default CompletedWasteList;