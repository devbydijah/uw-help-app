import React from "react";
import {
  HiOutlineBookOpen,
  HiOutlineArchiveBox,
  HiOutlineCreditCard,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";

const MenuItems = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Menu Items */}
      <ul className="space-y-6">
        <li className="flex items-center text-black cursor-pointer">
          <HiOutlineBookOpen className="w-5 h-5 text-purple-500 mr-2" />
          Dashboard
        </li>
        <li className="flex items-center text-black cursor-pointer">
          <HiOutlineArchiveBox className="w-5 h-5 text-blue-500 mr-2" />
          Past Waste
        </li>
        <li className="flex items-center text-black cursor-pointer">
          <HiOutlineCreditCard className="w-5 h-5 text-pink-700 mr-2" />
          Subscription
        </li>
        <li className="flex items-center text-black cursor-pointer">
          <HiOutlineQuestionMarkCircle className="w-5 h-5 text-green-500 mr-2" />
          Support
        </li>
        <li className="flex items-center text-black cursor-pointer">
          <HiOutlineCog className="w-5 h-5 text-yellow-600 mr-2" />
          Settings
        </li>
      </ul>

      {/* Logout Item */}
      <ul className="mt-auto pt-85">
        <li className="flex items-center text-black cursor-pointer">
          <FiLogOut className="w-5 h-5 text-black mr-2" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
