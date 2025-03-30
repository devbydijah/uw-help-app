// Homepage component for displaying the logo, carousel, and waste collectors section
import React, { useState } from "react";
import UwLogo from "../../assets/images/uw-logo2.png";
import TrashBinImage from "../../assets/images/trashbin.png"; // Import the trash bin image
import { HiPlus, HiOutlineMenu, HiOutlineSearch } from "react-icons/hi"; // Import icons
import { MdTune } from "react-icons/md"; // Import the tune/filter icon
import WasteCollectors from "./WasteCollectors"; // Import the WasteCollectors component
import MenuItems from "./MenuItems"; // Import the MenuItems component
import FooterNavBar from "./FooterNavBar"; // Import the FooterNavBar component
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"; // Import Sheet component
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Import the Avatar components

const Homepage = () => {
  const [activeSection, setActiveSection] = useState(1); // State to track the active section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const handleOpenChange = (open) => {
    setIsMenuOpen(open); // Update menu state
  };

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="flex justify-between items-center p-3">
        {" "}
        {/* Reduced padding */}
        <div>
          <img src={UwLogo} alt="UW Logo" className="w-6 h-6" />
        </div>
        {/* Hamburger Icon */}
        <Sheet onOpenChange={handleOpenChange} open={isMenuOpen}>
          <SheetTrigger asChild>
            <button className="cursor-pointer">
              <HiOutlineMenu className="w-6 h-6 text-black opacity-70" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 h-full bg-white p-4 flex flex-col justify-between"
          >
            {/* Menu Header */}
            <div>
              <SheetTitle className="text-black font-semibold mb-2">
                Uw-help
              </SheetTitle>
              <hr className="border-neutral-400 mb-4" />
              {/* Import Menu Items */}
              <MenuItems />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="p-3 flex items-center">
        {" "}
        {/* Reduced padding */}
        {/* Avatar Component */}
        <div className="mr-4">
          <Avatar className="w-15 h-15">
            {" "}
            {/* Responsive size */}
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="text-lg font-bold">Hello, John Doe</h1>
          <p className="text-sm text-gray-600">How are you today?</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-3 flex items-center">
        {" "}
        {/* Reduced padding */}
        <div className="flex items-center rounded-md bg-gray-100 flex-1 p-2">
          {/* Magnifying Glass Icon */}
          <HiOutlineSearch className="w-5 h-5 text-zinc-700 ml-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none rounded-md placeholder-zinc-700 bg-transparent px-4"
          />
        </div>
        {/* Tune Icon */}
        <MdTune className="w-7 h-7 cursor-pointer text-zinc-700 ml-4" />
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ${
            activeSection === 1
              ? "translate-x-0"
              : activeSection === 2
              ? "-translate-x-full"
              : "-translate-x-[200%]"
          }`}
        >
          {/* First Section */}
          <div className="w-full flex-shrink-0">
            <div className="mt-4 mx-4 p-5 border-2 border-gray-200 rounded-md bg-gray-100">
              {" "}
              {/* Reduced margin and padding */}
              <div className="flex justify-between items-center">
                {/* Text Section */}
                <div>
                  <h1 className="text-xl font-bold">
                    Want to Dispose your waste?
                  </h1>
                  <p className="text-sm text-gray-800 mt-2">
                    Keep Environment clean and healthy
                  </p>
                  <div className="mt-4">
                    <button className="bg-green-800 text-white border border-green-800 px-4 py-2 rounded-full flex items-center cursor-pointer">
                      Dispose Waste
                      <HiPlus className="ml-1 w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div>
                  <img
                    src={TrashBinImage}
                    alt="Trash Bin"
                    className="w-32 h-40"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="w-full flex-shrink-0">
            <div className="mt-4 mx-4 p-5 border-2 border-gray-200 rounded-md bg-gray-100">
              {" "}
              {/* Reduced margin and padding */}
              <div className="flex justify-between items-center">
                {/* Text Section */}
                <div>
                  <h1 className="text-xl font-bold">Upcoming Events</h1>
                  <p className="text-sm text-gray-800 mt-2">
                    Community Sanitation & Waste Day
                  </p>
                  <div className="mt-4">
                    <button className="bg-green-800 text-white border border-green-800 px-4 py-2 rounded-full flex items-center cursor-pointer">
                      Register
                      <HiPlus className="ml-1 w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div>
                  <img
                    src={TrashBinImage}
                    alt="Trash Bin"
                    className="w-32 h-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Radio Buttons */}
      <div className="flex justify-center mt-3 space-x-4">
        {" "}
        {/* Reduced margin */}
        <button
          className={`w-4 h-4 rounded-full ${
            activeSection === 1 ? "bg-green-800" : "bg-gray-300 cursor-pointer"
          }`}
          onClick={() => setActiveSection(1)}
        ></button>
        <button
          className={`w-4 h-4 rounded-full ${
            activeSection === 2 ? "bg-green-800" : "bg-gray-300 cursor-pointer"
          }`}
          onClick={() => setActiveSection(2)}
        ></button>
      </div>

      {/* Waste Collectors Section */}
      <WasteCollectors />

      {/* Footer Navigation Bar */}
      <FooterNavBar />
    </div>
  );
};

export default Homepage;
