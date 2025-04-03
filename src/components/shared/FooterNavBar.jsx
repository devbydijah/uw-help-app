import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { HiHome } from "react-icons/hi"; // Import Filled Home icon
import { HiOutlineBell } from "react-icons/hi"; // Import Bell icon
import { HiOutlineUser } from "react-icons/hi"; // Import User icon
import { HiOutlineRefresh } from "react-icons/hi"; // Import Refresh icon

const FooterNavBar = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight; // Use scrollHeight instead of offsetHeight
    setIsAtBottom(scrollPosition >= pageHeight - 1); // Add a small buffer to account for rounding issues
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  if (!isAtBottom) {
    return null; // Do not render the footer if not at the bottom
  }

  return (
    <div className="h-13 bg-white border-t border-stone-300 fixed bottom-0 left-0 w-full z-50">
      <nav className="flex justify-around items-center min-h-full">
        {/* Home Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-green-900"
        >
          <HiHome className="w-6 h-6" /> {/* Filled Home Icon */}
          <span className="text-sm text-black">Home</span>
        </Link>

        {/* Notification Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-neutral-500"
        >
          <HiOutlineBell className="w-6 h-6" />
          <span className="text-sm text-black">Notification</span>
        </Link>

        {/* Profile Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-neutral-500"
        >
          <HiOutlineUser className="w-6 h-6" />
          <span className="text-sm text-black">Profile</span>
        </Link>

        {/* Recycle Icon */}
        <Link
          to="/homepage"
          onClick={handleScrollToTop}
          className="flex flex-col items-center text-neutral-500"
        >
          <HiOutlineRefresh className="w-6 h-6" />
          <span className="text-sm text-black">Recycle</span>
        </Link>
      </nav>
    </div>
  );
};

export default FooterNavBar;
