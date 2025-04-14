import React, { memo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../shared/Header";
import FooterNavBar from "../shared/FooterNavBar";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineChrome } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

/**
 * Marks a notification as read.
 * @param {number} notificationId - The ID of the notification to mark as read.
 */
function markAsRead(notificationId) {
  console.log(`Notification ${notificationId} marked as read`);
}

// Memoize the Notifications component to prevent unnecessary re-renders
const Notifications = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBackClick = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  // Memoize the event handler for marking notifications as read
  const handleMarkAsRead = useCallback((notificationId) => {
    markAsRead(notificationId);
  }, []);

  const notifications = [
    {
      id: 1,
      title: "Subscription Expired",
      description: "This is for April Subscription",
    },
    {
      id: 2,
      title: "Subscription Expired",
      description: "This is for April Subscription",
    },
    {
      id: 3,
      title: "Subscription Expired",
      description: "This is for April Subscription",
    },
    {
      id: 4,
      title: "Subscription Expired",
      description: "This is for April Subscription",
    },
    {
      id: 5,
      title: "Subscription Expired",
      description: "This is for April Subscription",
    },
    {
      id: 6,
      title: "New Feature Added",
      description: "Check out the new dashboard feature",
    },
    {
      id: 7,
      title: "System Maintenance",
      description: "Scheduled maintenance on April 10th",
    },
    {
      id: 8,
      title: "Welcome to the App",
      description: "Thank you for signing up!",
    },
    {
      id: 9,
      title: "Update Available",
      description: "Version 2.0 is now available",
    },
    {
      id: 10,
      title: "Subscription Renewed",
      description: "Your subscription has been successfully renewed",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex items-center justify-between mt-4 px-4">
        <FaArrowLeft
          className="w-4 h-4 text-black cursor-pointer"
          onClick={handleBackClick}
        />
        <h1 className="text-center text-2xl font-semibold text-black flex-grow">
          Notifications
        </h1>
      </div>

      <div className="flex flex-col items-start justify-start mt-4 px-4">
        <h2 className="text-lg font-semibold text-black mb-2">
          Recent notification
        </h2>
        <div className="space-y-4 w-full">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-between bg-white rounded-lg p-4"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                  <AiOutlineChrome className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-black">
                    {notification.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {notification.description}
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-center bg-neutral-400 border border-neutral-400 rounded-full p-1 cursor-pointer"
                onClick={() => handleMarkAsRead(notification.id)}
              >
                <FaChevronDown className="text-black text-base" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterNavBar />
    </div>
  );
});

export default Notifications;
