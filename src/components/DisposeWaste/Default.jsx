// TEMPORARY CHANGE: Backend request removed until backend is set up.
// REMINDER: Re-enable the backend request once the backend is ready.

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UwLogo from "../../assets/images/uw-logo2.png";
import { HiOutlineMenu } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";

const Default = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [wasteCategory, setWasteCategory] = useState("");
  const [wasteType, setWasteType] = useState("");
  const [collectionMethod, setCollectionMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isFormComplete =
    state !== "" &&
    wasteCategory !== "" &&
    wasteType !== "" &&
    collectionMethod !== "";

  const handleSubmit = async () => {
    if (!isFormComplete) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Simulate a successful form submission
      setTimeout(() => {
        setSuccessMessage("Preferences saved successfully!");
        navigate("/homepage"); // Navigate to homepage after success
      }, 1000);
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center p-4">
        <div>
          <img src={UwLogo} alt="UW Logo" className="w-6 h-6" />
        </div>
        <button className="cursor-pointer">
          <HiOutlineMenu className="w-6 h-6 text-black opacity-70" />
        </button>
      </div>

      {/* Waste Disposal Preferences */}
      <div className="p-4">
        {/* Title Section */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-bold mb-3">Dispose Waste</h1>
          <p className="text-lg text-neutral-500">
            Let’s set up your waste disposal preferences
          </p>
        </div>

        <div className="mt-20">
          {/* States Available */}
          <div className="mb-4">
            <Select onValueChange={(value) => setState(value)}>
              <SelectTrigger id="state" className="w-full">
                <SelectValue
                  placeholder={
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-5 h-5 text-neutral-500" />
                      <span className="text-neutral-500">Enter location</span>
                    </div>
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-auto max-w-md">
                <SelectGroup>
                  <SelectLabel className="text-black font-semibold border-b border-zinc-600 pb-2">
                    States Available
                  </SelectLabel>
                  <SelectItem value="abuja" className="text-black">
                    Abuja
                  </SelectItem>
                  <SelectItem value="lagos" className="text-black">
                    Lagos
                  </SelectItem>
                  <SelectItem value="port-harcourt" className="text-black">
                    Port Harcourt
                  </SelectItem>
                  <SelectItem value="calabar" className="text-black">
                    Calabar
                  </SelectItem>
                  <SelectItem value="delta" className="text-black">
                    Delta
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Waste Category */}
          <div className="mb-4">
            <Select onValueChange={(value) => setWasteCategory(value)}>
              <SelectTrigger id="waste-category" className="w-full">
                <SelectValue
                  placeholder={
                    <span className="text-neutral-500">
                      Select waste category
                    </span>
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-auto max-w-md">
                <SelectGroup>
                  <SelectLabel className="text-black font-semibold border-b border-zinc-600 pb-2">
                    Waste Category
                  </SelectLabel>
                  <SelectItem value="chemical" className="text-black">
                    Chemical Waste
                  </SelectItem>
                  <SelectItem value="toxic" className="text-black">
                    Toxic Waste
                  </SelectItem>
                  <SelectItem value="commercial" className="text-black">
                    Commercial Waste
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Waste Type */}
          <div className="mb-4">
            <Select onValueChange={(value) => setWasteType(value)}>
              <SelectTrigger id="waste-type" className="w-full">
                <SelectValue
                  placeholder={
                    <span className="text-neutral-500">
                      What type of waste do you want to dispose?
                    </span>
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-auto max-w-md">
                <SelectGroup>
                  <SelectLabel className="text-black font-semibold border-b border-zinc-600 pb-2">
                    Waste Type
                  </SelectLabel>
                  <SelectItem value="personal" className="text-black">
                    Personal Waste
                  </SelectItem>
                  <SelectItem value="office" className="text-black">
                    Office Waste
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Collection Method */}
          <div className="mb-4">
            <Select onValueChange={(value) => setCollectionMethod(value)}>
              <SelectTrigger id="collection-method" className="w-full">
                <SelectValue
                  placeholder={
                    <span className="text-neutral-500">
                      Preferred collection method
                    </span>
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-auto max-w-md">
                <SelectGroup>
                  <SelectLabel className="text-black font-semibold border-b border-zinc-600 pb-2">
                    Collection Method
                  </SelectLabel>
                  <SelectItem value="collection-center" className="text-black">
                    Collection Center
                  </SelectItem>
                  <SelectItem value="doorstep" className="text-black">
                    Doorstep
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2" role="alert">
              {errorMessage}
            </p>
          )}

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-500 text-sm mt-2" role="alert">
              {successMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className={`w-full py-2 px-4 rounded-full text-white font-semibold mt-20 ${
              isFormComplete
                ? "bg-green-800 border-green-800 cursor-pointer"
                : "bg-neutral-400 border-neutral-400 cursor-not-allowed"
            }`}
            disabled={!isFormComplete || loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Default;
