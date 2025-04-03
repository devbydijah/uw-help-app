import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import WasteDetailsCard from "./WasteDetailsCard";
import RatingDialog from "./RatingDialog";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PastWaste = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rating, setRating] = useState(0); // State to store the selected rating
  const [isRated, setIsRated] = useState(false); // State to track if the service is rated
  const navigate = useNavigate();

  const handleOpenChange = (open) => {
    setIsMenuOpen(open);
  };

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleRating = (value) => {
    setRating(value); // Update the rating state
    setIsRated(true); // Mark the service as rated
    console.log(`Rated: ${value} stars`); // Log the rating for debugging
  };

  const handleBookWastePickup = () => {
    navigate("/default"); // Navigate to the Default.jsx route
  };

  return (
    <div className="bg-white min-h-screen overflow-y-auto relative pb-20">
      <Header isMenuOpen={isMenuOpen} handleOpenChange={handleOpenChange} />
      <div className="flex items-center justify-between mt-4 px-4">
        <AiOutlineArrowLeft
          onClick={handleBackClick}
          className="text-lg cursor-pointer"
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow">
          Past Waste
        </h1>
      </div>

      <div className="mt-10">
        <h2 className="text-left ml-3 text-2xl font-semibold text-black">
          Completed Waste
        </h2>
      </div>

      <div className="flex justify-center mt-6">
        <WasteDetailsCard
          imageSrc="../../assets/images/completed-waste.png"
          paymentStatus="Paid"
          collectionStatus="Picked"
          formattedDate="20th Oct, 2024"
          formattedTime="10:30 AM"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleBookWastePickup} // Add the click handler here
          className="px-6 py-2 text-white bg-green-800 border border-green-800 rounded-full cursor-pointer"
        >
          Book Waste Pickup
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleDialogOpen}
          className="px-6 py-2 text-black bg-white border border-green-950 rounded-full transition-colors duration-400 ease-in-out hover:bg-neutral-200 hover:text-green-950 cursor-pointer"
        >
          Rate Services
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <RatingDialog
          isDialogOpen={isDialogOpen}
          handleDialogClose={handleDialogClose}
          handleRating={handleRating} // Pass the handleRating function
          rating={rating} // Pass the current rating
          isRated={isRated} // Pass whether the service is rated
        />
      </div>

      <FooterNavBar />
    </div>
  );
};

export default PastWaste;
