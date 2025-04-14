import React, { lazy, Suspense } from "react";

// Lazy load the Notifications component
const Notifications = lazy(() => import("./Notifications"));

/**
 * Component: Dashboard
 * Purpose: Displays an overview of user-specific data and navigation options.
 * - Shows total waste statistics, last disposal date, and upcoming events.
 * - Provides navigation to other pages like 'Past Waste' and 'Notifications'.
 */
const Dashboard = () => {
  return (
    <Suspense fallback={<div aria-live="polite">Loading...</div>}>
      <Notifications />
    </Suspense>
  );
};

export default Dashboard;
