import React, { useState } from "react";
import UwLogo from "../../assets/images/uw-logo2.png";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import MenuItems from "./MenuItems";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenChange = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4">
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
          <div className="flex justify-between items-center mb-4">
            <SheetTitle className="text-black font-semibold">Uw-help</SheetTitle>
            <HiX
              className="w-6 h-6 text-black cursor-pointer"
              onClick={() => handleOpenChange(false)}
            />
          </div>
          <hr className="border-neutral-400 mb-4" />
          {/* Import Menu Items */}
          <MenuItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
