import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import TrashDisposal1 from "../../assets/images/trash-disposal1.png";
import TrashDisposal2 from "../../assets/images/trash-disposal2.png";
import TrashDisposal3 from "../../assets/images/trash-disposal3.png";
import TrashDisposal4 from "../../assets/images/trash-disposal4.png";
import { HiOutlineLocationMarker, HiDotsVertical } from "react-icons/hi"; // Import the map pin and vertical dots icons
import { FaStar } from "react-icons/fa"; // Import the star icon

const WasteCollectors = () => {
  const collectors = [
    { id: 1, image: TrashDisposal1 },
    { id: 2, image: TrashDisposal2 },
    { id: 3, image: TrashDisposal3 },
    { id: 4, image: TrashDisposal4 },
  ];

  const [ratings, setRatings] = useState({}); // State to track ratings for each collector

  const handleRating = (collectorId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [collectorId]: rating,
    }));
  };

  return (
    <div className="mt-3 mx-4 py-6">
      <div>
        <h1 className="text-xl font-bold mt-4 pl-4">Waste collectors nearby</h1>
      </div>
      {/* Stacked Images with Content */}
      <div
        className="space-y-4 mt-4 overflow-y-auto max-h-[calc(100vh-90px)] pb-20" // Slightly increased bottom padding and adjusted height
      >
        {collectors.map((collector) => (
          <div key={collector.id} className="flex items-center space-x-4">
            <img
              src={collector.image}
              alt={`Trash Disposal ${collector.id}`}
              className="w-24 h-24 rounded-md object-cover" // Reduced image size
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h1 className="text-lg">
                  {collector.id === 3
                    ? "Ugo group waste"
                    : "Ugo group waste disposal"}
                </h1>
                <HiDotsVertical className="text-black cursor-pointer" />
              </div>
              <p className="text-sm text-zinc-600 flex items-center mt-2">
                <HiOutlineLocationMarker className="mr-1" /> Rumeukpor, Port
                Harcourt
              </p>
              {/* Star Rating */}
              <div className="flex mt-2">
                {[1, 2, 3].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      ratings[collector.id] >= star
                        ? "text-yellow-300"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleRating(collector.id, star)}
                  />
                ))}
              </div>
              <Link to="/default" className="mt-3 inline-block">
                <button className="bg-green-800 text-white px-3 py-1.5 rounded-full text-sm cursor-pointer">
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
