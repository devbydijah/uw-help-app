import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { HiHome } from "react-icons/hi"; // Import Filled Home icon
import { HiOutlineBell } from "react-icons/hi"; // Import Bell icon
import { HiOutlineUser } from "react-icons/hi"; // Import User icon
import { HiOutlineRefresh } from "react-icons/hi"; // Import Refresh icon

const FooterNavBar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <div className="h-16 bg-white border-t border-stone-300 fixed bottom-0 left-0 w-full z-50">
      <nav className="flex justify-around items-center h-full">
        {/* Home Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-green-900"
          aria-label="Go to Home"
        >
          <HiHome className="w-6 h-6" /> {/* Filled Home Icon */}
          <span className="text-sm text-black">Home</span>
        </Link>

        {/* Notification Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-neutral-500 relative"
          aria-label="Go to Notifications"
        >
          <HiOutlineBell className="w-6 h-6" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-3 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
          <span className="text-sm text-black">Notification</span>
        </Link>

        {/* Profile Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-neutral-500"
          aria-label="Go to Profile"
        >
          <HiOutlineUser className="w-6 h-6" />
          <span className="text-sm text-black">Profile</span>
        </Link>

        {/* Recycle Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-neutral-500"
          aria-label="Go to Recycle"
        >
          <HiOutlineRefresh className="w-6 h-6" />
          <span className="text-sm text-black">Recycle</span>
        </Link>
      </nav>
    </div>
  );
};

export default FooterNavBar;
