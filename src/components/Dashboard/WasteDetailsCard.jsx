import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import CompletedWasteIcon from "../../assets/images/completed-waste.png"; // Import the image

const WasteDetailsCard = ({
  paymentStatus,
  collectionStatus,
  formattedDate,
  formattedTime,
}) => (
  <div className="w-[85%] max-w-sm rounded-lg p-4 border border-gray-200 shadow-md">
    <img
      src={CompletedWasteIcon} // Use the imported image
      alt="Trash Disposal"
      className="w-full h-auto rounded-lg object-contain"
    />
    <div className="text-left font-normal mt-6 space-y-2">
      <p className="text-lg text-gray-800">
        <span>Collector:</span> Clean Waste Collector
      </p>
      <p className="text-lg text-gray-800">
        <span>Waste Type:</span> Chemical waste
      </p>
      <p className="text-lg text-gray-800">
        <span>Quantity:</span> 35kg
      </p>
      <p className="text-lg text-gray-800">
        <span>Waste Reference:</span> 1023456
      </p>
      <p className="text-lg text-gray-800">
        <span>Payment Status:</span>{" "}
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            paymentStatus === "Paid"
              ? "bg-gray-200 text-green-900"
              : "text-gray-800"
          }`}
        >
          {paymentStatus}
        </span>
      </p>
      <p className="text-lg text-gray-800">
        <span></span>{" "}
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            collectionStatus === "Picked"
              ? "bg-purple-100 text-purple-500"
              : "text-gray-800"
          }`}
        >
          {collectionStatus}
        </span>
      </p>
      <p className="text-lg text-zinc-600 flex items-center">
        <span className="text-black">Date:</span>
        <AiOutlineCalendar className="ml-1 mr-1 text-zinc-600" />
        {formattedDate}
      </p>
      <p className="text-lg text-zinc-600 flex items-center">
        <span className="text-black">Time:</span>
        <AiOutlineClockCircle className="ml-1 mr-1 text-zinc-600" />
        {formattedTime}
      </p>
    </div>
  </div>
);

export default WasteDetailsCard;