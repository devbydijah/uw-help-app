import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { HiBell, HiOutlineBell } from "react-icons/hi";
import { HiUser, HiOutlineUser } from "react-icons/hi";
import { HiRefresh, HiOutlineRefresh } from "react-icons/hi";

const FooterNavBar = () => {
  const location = useLocation();

  return (
    <div className="h-13 bg-white border-t border-stone-300 sticky bottom-0 left-0 w-full z-50">
      <nav className="flex justify-around items-center min-h-full">
        {/* Home Icon */}
        <Link
          to={{
            pathname: "/homepage",
            state: { from: location.pathname },
          }}
          className="flex flex-col items-center"
        >
          {location.pathname === "/homepage" ? (
            <HiHome className="w-6 h-6 text-green-900" />
          ) : (
            <HiOutlineHome className="w-6 h-6 text-black" />
          )}
          <span
            className={`text-sm ${
              location.pathname === "/homepage"
                ? "text-green-900"
                : "text-black"
            }`}
          >
            Home
          </span>
        </Link>

        {/* Notification Icon */}
        <Link
          to={{
            pathname: "/notifications",
            state: { from: location.pathname },
          }}
          className="flex flex-col items-center"
        >
          {location.pathname === "/notifications" ? (
            <HiBell className="w-6 h-6 text-green-900" />
          ) : (
            <HiOutlineBell className="w-6 h-6 text-black" />
          )}
          <span
            className={`text-sm ${
              location.pathname === "/notifications"
                ? "text-green-900"
                : "text-black"
            }`}
          >
            Notification
          </span>
        </Link>

        {/* Profile Icon */}
        <Link
          to={{
            pathname: "/userProfile",
            state: { from: location.pathname },
          }}
          className="flex flex-col items-center"
        >
          {location.pathname === "/userProfile" ? (
            <HiUser className="w-6 h-6 text-green-900" />
          ) : (
            <HiOutlineUser className="w-6 h-6 text-black" />
          )}
          <span
            className={`text-sm ${
              location.pathname === "/userProfile"
                ? "text-green-900"
                : "text-black"
            }`}
          >
            Profile
          </span>
        </Link>

        {/* Recycle Icon */}
        <Link
          to={{
            pathname: "/recycle",
            state: { from: location.pathname },
          }}
          className="flex flex-col items-center"
        >
          {location.pathname === "/recycle" ? (
            <HiRefresh className="w-6 h-6 text-green-900" />
          ) : (
            <HiOutlineRefresh className="w-6 h-6 text-black" />
          )}
          <span
            className={`text-sm ${
              location.pathname === "/recycle" ? "text-green-900" : "text-black"
            }`}
          >
            Recycle
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default FooterNavBar;
