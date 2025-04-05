import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import WasteDetailsCard from "./WasteDetailsCard";
import CompletedWasteList from "../shared/CompletedWasteList";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PastWaste = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedWaste, setSelectedWaste] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on load
  }, []);

  const handleOpenChange = (open) => {
    setIsMenuOpen(open);
  };

  const handleBackClick = () => {
    if (selectedWaste) {
      setSelectedWaste(null); // Go back to the list view
    } else {
      navigate("/dashboard");
    }
  };

  const handleWasteClick = (waste) => {
    setSelectedWaste(waste); // Set the selected waste item
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
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

      <div className="flex-grow">
        {selectedWaste ? (
          // Show WasteDetailsCard if a waste is selected
          <div className="flex justify-center mt-6">
            <WasteDetailsCard
              paymentStatus={selectedWaste.paymentStatus}
              collectionStatus={selectedWaste.collectionStatus}
              formattedDate={selectedWaste.date}
              formattedTime={selectedWaste.time}
            />
          </div>
        ) : (
          // Show CompletedWasteList if no waste is selected
          <CompletedWasteList onCardClick={handleWasteClick} />
        )}
      </div>

      <FooterNavBar />
    </div>
  );
};

export default PastWaste;
