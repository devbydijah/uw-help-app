import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
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
        <li>
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              `flex items-center cursor-pointer ${
                isActive ? "font-semibold" : "text-black"
              }`
            }
            aria-label="Go to Dashboard"
          >
            <HiOutlineBookOpen className="w-5 h-5 text-purple-500 mr-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              `flex items-center cursor-pointer ${
                isActive ? "font-semibold" : "text-black"
              }`
            }
            aria-label="Go to Past Waste"
          >
            <HiOutlineArchiveBox className="w-5 h-5 text-blue-500 mr-2" />
            Past Waste
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              `flex items-center cursor-pointer ${
                isActive ? "font-semibold" : "text-black"
              }`
            }
            aria-label="Go to Subscription"
          >
            <HiOutlineCreditCard className="w-5 h-5 text-pink-700 mr-2" />
            Subscription
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              `flex items-center cursor-pointer ${
                isActive ? "font-semibold" : "text-black"
              }`
            }
            aria-label="Go to Support"
          >
            <HiOutlineQuestionMarkCircle className="w-5 h-5 text-green-500 mr-2" />
            Support
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              `flex items-center cursor-pointer ${
                isActive ? "font-semibold" : "text-black"
              }`
            }
            aria-label="Go to Settings"
          >
            <HiOutlineCog className="w-5 h-5 text-yellow-600 mr-2" />
            Settings
          </NavLink>
        </li>
      </ul>

      {/* Logout Item */}
      <ul className="mt-auto pt-86">
        <li>
          <button
            className="flex items-center text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Logout"
          >
            <FiLogOut className="w-5 h-5 text-black mr-2" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
