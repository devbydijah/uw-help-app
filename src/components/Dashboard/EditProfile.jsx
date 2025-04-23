import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../shared/Header";
import CompleteImage from "../../assets/images/complete.png";
import FooterNavBar from "../shared/FooterNavBar";
import { ClipLoader } from "react-spinners";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userDetails: initialUserDetails, phoneDetails: initialPhoneDetails } =
    location.state || {};

  const [userDetails, setUserDetails] = useState(
    initialUserDetails || {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
    }
  );
  const [phoneDetails, setPhoneDetails] = useState(
    initialPhoneDetails || {
      countryCode: "+234",
      phoneNumber: "",
    }
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCancelDropdownOpen, setIsCancelDropdownOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <ClipLoader color="#065f46" size={50} />
        <p className="text-lg font-semibold mt-4 sm:text-xl md:text-2xl">
          Please hold on
        </p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <img
          src={CompleteImage}
          alt="Success"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        />
        <p className="text-lg font-semibold mt-4 sm:text-xl md:text-2xl">
          Profile edit successfully
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            navigate("/homepage");
          }}
          className="text-green-900 font-semibold underline mt-2 sm:text-lg md:text-xl"
        >
          Go back homepage
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, [name]: value };
      localStorage.setItem("userDetails", JSON.stringify(updatedDetails));
      return updatedDetails;
    });
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setPhoneDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, [name]: value };
      localStorage.setItem("phoneDetails", JSON.stringify(updatedDetails));
      return updatedDetails;
    });
  };

  const handleSaveClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      localStorage.setItem("phoneDetails", JSON.stringify(phoneDetails));
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleCancelOptionSelect = (option) => {
    setIsCancelDropdownOpen(false);

    if (option === "Yes") {
      setSuccessMessage("Pickup Successfully Cancelled");
    } else if (option === "No") {
      setSuccessMessage("Pickup Successfully Updated");
    } else if (option === "Rebooked") {
      setSuccessMessage("Pickup Successfully Rebooked");
    }

    // Clear the message after 2 seconds
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault(); // Prevent default zoom behavior
    e.target.select();
  };

  // Add navigation to Support.jsx when "Support" is clicked
  const handleSupportClick = () => {
    navigate("/support");
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <Header />
      <div className="flex items-center justify-between mt-4">
        <FaArrowLeft
          className="w-4 h-4 text-black cursor-pointer sm:w-5 sm:h-5 md:w-6 md:h-6"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow sm:text-3xl md:text-4xl">
          Edit Profile
        </h1>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4 sm:text-xl md:text-2xl">
          Basic Information
        </h2>
        <input
          type="text"
          name="firstName"
          value={userDetails.firstName}
          onChange={handleInputChange}
          onDoubleClick={handleDoubleClick}
          className="border border-neutral-300 rounded-lg px-4 py-2 w-full mb-4 sm:text-base md:text-lg focus:outline-none"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={userDetails.lastName}
          onChange={handleInputChange}
          onDoubleClick={handleDoubleClick}
          className="border border-neutral-300 rounded-lg px-4 py-2 w-full mb-4 sm:text-base md:text-lg focus:outline-none"
          placeholder="Last Name"
        />
        <input
          type="text"
          name="address"
          value={userDetails.address}
          onChange={handleInputChange}
          onDoubleClick={handleDoubleClick}
          className="border border-neutral-300 rounded-lg px-4 py-2 w-full mb-4 sm:text-base md:text-lg focus:outline-none"
          placeholder="Address"
        />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleInputChange}
          onDoubleClick={handleDoubleClick}
          className="border border-neutral-300 rounded-lg px-4 py-2 w-full mb-4 sm:text-base md:text-lg focus:outline-none"
          placeholder="Email"
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneDetails.phoneNumber}
          onChange={handlePhoneChange}
          onDoubleClick={handleDoubleClick}
          className="border border-neutral-300 rounded-lg px-4 py-2 w-full mb-4 sm:text-base md:text-lg focus:outline-none"
          placeholder="Phone Number"
        />

        <button
          onClick={handleSaveClick}
          className="bg-green-800 text-white px-6 py-2 rounded-full font-semibold w-full sm:text-base md:text-lg hover:bg-green-700 transition-all"
        >
          Save
        </button>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-sm font-bold text-black flex items-center sm:text-base md:text-lg">
            Active Pickup
            <span className="w-3 h-3 bg-green-900 rounded-full ml-3"></span>
          </h3>
        </div>
        <hr className="border-stone-300 my-3" />
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-black font-semibold sm:text-base md:text-lg">
            Scheduled pickup request
          </p>
          <div className="flex items-center mt-4">
            {selectedOption && (
              <span className="text-green-900 font-semibold mr-2 text-sm">
                {selectedOption}
              </span>
            )}
            <FaChevronRight
              className="text-black sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </div>
        </div>
        {isDropdownOpen && (
          <div
            className="absolute border border-stone-300 rounded-md p-2 w-fit bg-white shadow-md"
            style={{ top: "69%", right: "6px" }}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">Schedule Waste Pickup</h4>
              <FaTimes
                className="cursor-pointer text-black"
                onClick={() => setIsDropdownOpen(false)}
              />
            </div>
            <hr className="border-stone-300 my-2" />
            <ul className="space-y-1">
              {["Daily", "Weekly", "Monthly"].map((option) => (
                <li
                  key={option}
                  className="cursor-pointer p-1 rounded-md text-black hover:bg-gray-100"
                  onClick={() => {
                    setSelectedOption(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-black font-semibold mt-4 sm:text-base md:text-lg">
            Live Status updates
          </p>
          <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full mt-4 sm:text-sm md:text-base">
            Pending
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-black font-semibold mt-4 sm:text-base md:text-lg">
            Cancel Pickup
          </p>
          <div className="flex items-center mt-4">
            <FaChevronRight
              className="text-black sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
              onClick={() => setIsCancelDropdownOpen(!isCancelDropdownOpen)}
            />
          </div>
        </div>
        {isCancelDropdownOpen && (
          <div
            className="absolute border border-stone-300 rounded-md p-2 w-fit bg-white shadow-md"
            style={{ top: "80%", right: "6px", zIndex: 10 }}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">Cancel Pickup</h4>
              <FaTimes
                className="cursor-pointer text-black"
                onClick={() => setIsCancelDropdownOpen(false)}
              />
            </div>
            <hr className="border-stone-300 my-2" />
            <ul className="space-y-1">
              {["Yes", "No", "Rebooked"].map((option) => (
                <li
                  key={option}
                  className="cursor-pointer p-1 rounded-md text-black hover:bg-gray-100"
                  onClick={() => handleCancelOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <Label
            htmlFor="allow-notification"
            className="text-sm text-black font-semibold mt-4 sm:text-base md:text-lg"
          >
            Allow notification
          </Label>
          <Switch
            id="allow-notification"
            onCheckedChange={() =>
              setIsNotificationEnabled(!isNotificationEnabled)
            }
            className="toggle-checkbox cursor-pointer mt-4 scale-125"
          />
        </div>
      </div>

      <div className="mt-6 pb-10">
        <hr className="border-stone-300 my-3" />
        <div className="mt-4">
          <p
            className="text-sm text-black font-semibold mt-4 sm:text-base md:text-lg cursor-pointer"
            onClick={handleSupportClick}
          >
            Support
          </p>
        </div>
        <hr className="border-stone-300 my-3" />
        <div className="mt-4">
          <p className="text-sm text-black font-semibold sm:text-base md:text-lg">
            Logout
          </p>
        </div>
      </div>

      {successMessage && (
        <div
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white border border-white text-green-900 rounded-full px-4 py-4 flex items-center shadow-md whitespace-nowrap"
          style={{ zIndex: 20 }}
        >
          <span className="mr-2">{successMessage}</span>
          <IoCheckmarkOutline className="w-6 h-6 font-bold" />
        </div>
      )}

      <FooterNavBar />
    </div>
  );
};

export default EditProfile;
