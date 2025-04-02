// TODO: Remember to set up the submit button logic when a user selects a role and clicks submit
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import WasteCollector from "../../assets/images/waste-collector.png";
import WasteDepositor from "../../assets/images/waste-depositor.png";

const SignUpAs = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleBackClick = () => {
    navigate("/register");
  };

  const handleSubmit = () => {
    console.log("Submit clicked, selectedRole:", selectedRole);
    if (selectedRole === "collector") {
      navigate("/homepage"); // Navigate to the homepage for Waste Collectors
    } else if (selectedRole === "depositor") {
      navigate("/default"); // Navigate to the Default page for Waste Depositors
    }
  };

  const handleRoleSelect = (role) => {
    console.log("Role selected:", role);
    setSelectedRole(role);
  };

  return (
    <div className="relative flex flex-col items-center mt-5">
      <div className="absolute left-2 top-2">
        <button onClick={handleBackClick} className="text-lg flex items-center">
          <FaArrowLeft className="mr-1" />
          Back
        </button>
      </div>
      <div className="mt-15 text-center">
        <h1 className="text-black font-semibold text-2xl w-[335.2px] h-[29px] leading-[120%] tracking-[-2%] mb-4">
          Signup As
        </h1>
        <p className="text-neutral-500 w-[335.2px] h-[48px]">
          {selectedRole
            ? "Choose who you want to signup as"
            : "Sign up now to schedule your first waste pickup and start making an impact."}
        </p>
      </div>
      <div className="flex justify-around w-full px-5">
        <div
          className={`w-1/2 cursor-pointer flex flex-col items-center justify-center ${
            selectedRole === "collector"
              ? "shadow-lg border-4 border-green-900 bg-green-900 text-white"
              : ""
          }`}
          style={{
            width: "150px",
            height: "200px",
            borderRadius: "12px",
            padding: "12px",
            boxShadow:
              selectedRole === "collector"
                ? "0px 4px 10px 0px #0000001A"
                : "none",
          }}
          onClick={() => handleRoleSelect("collector")}
        >
          <img
            src={WasteCollector}
            alt="Waste Collector"
            className="w-full h-full object-cover"
          />
          <p
            className={`mt-2 font-bold text-sm ${
              selectedRole === "collector" ? "text-white" : "text-black"
            }`}
          >
            Waste Collector
          </p>
        </div>
        <div
          className={`w-1/2 cursor-pointer flex flex-col items-center justify-center ${
            selectedRole === "depositor"
              ? "shadow-lg border-4 border-green-900 bg-green-900 text-white"
              : ""
          }`}
          style={{
            width: "150px",
            height: "200px",
            borderRadius: "12px",
            padding: "12px",
            boxShadow:
              selectedRole === "depositor"
                ? "0px 4px 10px 0px #0000001A"
                : "none",
          }}
          onClick={() => handleRoleSelect("depositor")}
        >
          <img
            src={WasteDepositor}
            alt="Waste Depositor"
            className="w-full h-full object-cover"
          />
          <p
            className={`mt-2 font-bold text-sm ${
              selectedRole === "depositor" ? "text-white" : "text-black"
            }`}
          >
            Waste Depositor
          </p>
        </div>
      </div>
      <div className="mt-20 flex justify-center w-full">
        <button
          onClick={handleSubmit}
          className={`py-2 px-4 rounded-full w-[350px] h-[40px] flex items-center justify-center gap-2 ${
            selectedRole ? "bg-green-800 cursor-pointer" : "bg-neutral-400"
          } text-white`}
          disabled={!selectedRole}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpAs;
