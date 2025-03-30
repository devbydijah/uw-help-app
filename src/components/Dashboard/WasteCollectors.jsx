// TEMPORARY CHANGE: Data fetching removed until backend API is set up.
// REMINDER: Implement data fetching for waste collectors, booking, and ratings when the backend API is ready.

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import TrashDisposal1 from "../../assets/images/trash-disposal1.png";
import TrashDisposal2 from "../../assets/images/trash-disposal2.png";
import TrashDisposal3 from "../../assets/images/trash-disposal3.png";
import TrashDisposal4 from "../../assets/images/trash-disposal4.png";
import { HiOutlineLocationMarker, HiDotsVertical } from "react-icons/hi"; // Import the map pin and vertical dots icons
import { FaStar } from "react-icons/fa"; // Import the star icon

const WasteCollectors = () => {
  // Static waste collectors data
  const collectors = [
    {
      id: 1,
      name: "EcoClean Services",
      location: "Lagos",
      image: TrashDisposal1,
    },
    {
      id: 2,
      name: "Green Earth Collectors",
      location: "Abuja",
      image: TrashDisposal2,
    },
    {
      id: 3,
      name: "CleanCity Waste",
      location: "Port Harcourt",
      image: TrashDisposal3,
    },
    {
      id: 4,
      name: "Ugo Group Waste Disposal",
      location: "Port Harcourt",
      image: TrashDisposal4,
    },
  ];

  const [ratings, setRatings] = useState({}); // State to track ratings for each collector

  const handleRating = (collectorId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [collectorId]: rating,
    }));
  };

  return (
    <div className="mt-2 mx-4 py-6">
      <div>
        <h1 className="text-xl font-bold mt-4 pl-4">Waste collectors nearby</h1>
      </div>

      {/* Stacked Images with Content */}
      <div
        className="space-y-4 mt-4 overflow-y-auto max-h-[calc(100vh-150px)] pb-4"
        role="list"
        aria-label="List of waste collectors"
      >
        {collectors.map((collector) => (
          <div
            key={collector.id}
            className="flex items-center space-x-4"
            role="listitem"
            aria-label={`Waste collector: ${collector.name}`}
          >
            <img
              src={collector.image}
              alt={`Trash Disposal ${collector.id}`}
              className="w-28 h-28 rounded-md object-cover" // Slightly larger image size
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h1 className="text-base font-medium">{collector.name}</h1>{" "}
                {/* Reduced font size */}
                <HiDotsVertical
                  className="text-black cursor-pointer"
                  aria-label="More options"
                />
              </div>
              <p
                className="text-xs text-zinc-600 flex items-center mt-2"
                aria-label={`Location: ${collector.location}`}
              >
                <HiOutlineLocationMarker className="mr-1" />{" "}
                {collector.location}
              </p>
              {/* Star Rating */}
              <div className="flex mt-2" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      ratings[collector.id] >= star
                        ? "text-yellow-300"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleRating(collector.id, star)}
                    role="radio"
                    aria-checked={ratings[collector.id] >= star}
                    aria-label={`${star} star`}
                  />
                ))}
              </div>
              <Link to="/default" className="mt-3 inline-block">
                <button
                  className="bg-green-800 text-white px-2 py-1 rounded-full text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                  aria-label={`Book waste pickup with ${collector.name}`}
                >
                  Book pickup
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteCollectors;
