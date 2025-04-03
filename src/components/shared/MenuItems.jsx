import React from "react";
import {
  HiOutlineBookOpen,
  HiOutlineArchiveBox,
  HiOutlineCreditCard,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: <HiOutlineBookOpen className="w-5 h-5 text-purple-500 mr-2" />,
    path: "/dashboard",
  },
  {
    name: "Past Waste",
    icon: <HiOutlineArchiveBox className="w-5 h-5 text-blue-500 mr-2" />,
    path: "/pastWaste",
  },
  {
    name: "Subscription",
    icon: <HiOutlineCreditCard className="w-5 h-5 text-pink-700 mr-2" />,
    path: "/subscription",
  },
  {
    name: "Support",
    icon: (
      <HiOutlineQuestionMarkCircle className="w-5 h-5 text-green-500 mr-2" />
    ),
    path: "/support",
  },
  {
    name: "Settings",
    icon: <HiOutlineCog className="w-5 h-5 text-yellow-600 mr-2" />,
    path: "/settings",
  },
];

const MenuItems = () => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-black cursor-pointer"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "font-bold text-purple-700" : ""
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
        <li className="mt-80 flex items-center text-black cursor-pointer">
          <FiLogOut className="w-5 h-5 text-black mr-2" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
