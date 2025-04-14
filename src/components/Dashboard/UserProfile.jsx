import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import { FaArrowLeft, FaChevronRight, FaCircleNotch } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../ui/select";
import { Switch } from "../ui/switch";

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true); // Set initial state to checked
  const [userDetails, setUserDetails] = useState({
    name: "Courtney Henry",
    address: "2118 Thornridge Cir. Syracuse 35624",
    email: "georgia.young@example.com",
  });
  const [phoneDetails, setPhoneDetails] = useState({
    countryCode: "+234",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBackClick = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  const handleNotificationToggle = () => {
    setIsNotificationEnabled((prev) => {
      const newValue = !prev;
      console.log(
        newValue ? "Notifications enabled" : "Notifications disabled"
      );
      return newValue;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setPhoneDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (value) => {
    setPhoneDetails((prevDetails) => ({
      ...prevDetails,
      countryCode: value,
    }));
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

  return (
    <div>
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-screen">
          <FaCircleNotch
            className="w-16 h-16 animate-spin"
            style={{
              background: "linear-gradient(to right, #065f46, #16a34a)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          />
          <p className="text-lg font-semibold mt-4">Please hold on</p>
        </div>
      )}

      {isSuccess && (
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src="/assets/images/thumbs-up.png"
            alt="Success"
            className="w-16 h-16"
          />
          <p className="text-lg font-semibold mt-4">Profile edit successfully</p>
          <button
            onClick={() => {
              setIsSuccess(false);
              navigate("/homepage");
            }}
            className="text-green-600 underline mt-2"
          >
            Go back homepage
          </button>
        </div>
      )}

      {!isLoading && !isSuccess && (
        <>
          <Header />
          <div className="flex items-center justify-between mt-4 px-4">
            <FaArrowLeft
              className="w-4 h-4 text-black cursor-pointer"
              onClick={handleBackClick}
            />
            <h1 className="text-center text-2xl font-semibold text-black flex-grow">
              Profile
            </h1>
          </div>

          <div className="flex flex-col items-start mt-6 px-4">
            <div className="relative">
              <img
                src="https://github.com/shadcn.png"
                alt="Profile"
                className="w-15 h-15 rounded-full object-cover"
              />
              <div
                className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer"
                onClick={() => document.getElementById("profile-upload").click()}
              >
                <MdOutlineCameraAlt className="text-green-900 text-md" />
              </div>
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                capture="user"
                className="hidden"
                onChange={(e) =>
                  console.log("Profile picture uploaded:", e.target.files[0])
                }
              />
            </div>
            <div className="flex items-center justify-between w-full mt-4">
              <h2 className="text-lg font-semibold">{userDetails.name}</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center text-green-900 text-base font-semibold underline">
                    <FiEdit2 className="mr-1 text-lg" /> Edit
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="bg-white border border-neutral-300 rounded-lg p-6 shadow-md w-full max-w-md mx-auto"
                  aria-describedby="dialog-description"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                >
                  <DialogTitle className="text-lg font-semibold text-center mb-4">
                    Edit Profile
                  </DialogTitle>
                  <p id="dialog-description" className="text-sm text-black mb-4">
                    Basic Information
                  </p>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="border border-neutral-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="address"
                      value={userDetails.address}
                      onChange={handleInputChange}
                      className="border border-neutral-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Address"
                    />
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="border border-neutral-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Email"
                    />
                    <div className="flex space-x-2">
                      <Select
                        onValueChange={handleCountryCodeChange}
                        value={phoneDetails.countryCode}
                      >
                        <SelectTrigger className="border border-neutral-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-500">
                          {phoneDetails.countryCode}
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-neutral-300 rounded-lg">
                          <SelectItem value="+234">🇳🇬</SelectItem>
                          <SelectItem value="+233">🇬🇭</SelectItem>
                          <SelectItem value="+221">🇸🇳</SelectItem>
                          <SelectItem value="+225">🇨🇮</SelectItem>
                          <SelectItem value="+220">🇬🇲</SelectItem>
                          <SelectItem value="+229">🇧🇯</SelectItem>
                          <SelectItem value="+226">🇧🇫</SelectItem>
                          <SelectItem value="+228">🇹🇬</SelectItem>
                          <SelectItem value="+223">🇲🇱</SelectItem>
                          <SelectItem value="+224">🇬🇳</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={phoneDetails.phoneNumber}
                        onChange={handlePhoneChange}
                        className="border border-neutral-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Phone Number"
                      />
                    </div>
                    <button
                      onClick={() => {
                        handleSaveClick();
                      }}
                      className="bg-green-800 text-white px-6 py-2 rounded-full font-semibold"
                    >
                      Save
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-sm text-black font-semibold">
              {userDetails.address}
            </p>
            <p className="text-sm text-black font-semibold">{userDetails.email}</p>
          </div>

          <div className="mt-6 px-4">
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-sm font-bold text-black flex items-center">
                Active Pickup
                <span className="w-3 h-3 bg-green-900 rounded-full ml-3"></span>
              </h3>
            </div>
            <hr className="border-stone-300 my-3 w-screen -ml-4" />
            <p className="text-sm text-black font-semibold mt-4">
              Scheduled pickup request
            </p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-black font-semibold mt-4">
                Live Status updates
              </p>
              <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full mt-4">
                Pending
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-black font-semibold mt-4">Cancel Pickup</p>
              <FaChevronRight className="text-black mt-4" />
            </div>

            <div className="flex items-center justify-between mt-4">
              <Label
                htmlFor="allow-notification"
                className="text-sm text-black font-semibold mt-4"
              >
                Allow notification
              </Label>
              <Switch
                id="allow-notification"
                checked={isNotificationEnabled}
                onCheckedChange={handleNotificationToggle}
                className="toggle-checkbox cursor-pointer mt-4 scale-125"
              />
            </div>
          </div>

          <div className="mt-6 px-4 pb-10">
            <hr className="border-stone-300 my-3 w-screen -ml-4" />
            <div className="mt-4">
              <p className="text-sm text-black font-semibold mt-4">Support</p>
            </div>
            <hr className="border-stone-300 my-3 w-screen -ml-4" />
            <div className="mt-4">
              <p className="text-sm text-black font-semibold">Logout</p>
            </div>
          </div>

          <FooterNavBar />
        </>
      )}
    </div>
  );
};

export default UserProfile;
