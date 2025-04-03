import React from "react";
import UwLogo from "../../assets/images/uw-logo2.png";
import { HiOutlineMenu } from "react-icons/hi";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import MenuItems from "./MenuItems";

const Header = ({ isMenuOpen, handleOpenChange }) => {
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
  );
};

export default Header;
