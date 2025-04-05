### 5th April, 2025

- `src/components/Dashboard/RatingDialog.jsx`
  : Added a rating dialog component with star-based rating functionality and a thank-you message after rating.

- `src/components/Dashboard/WasteDetailsCard.jsx`
  : Integrated the `RatingDialog` component into the waste details card. Added buttons for "Book Waste Pickup" and "Rate this service." Adjusted button spacing for better alignment.

- `src/components/shared/CompletedWasteList.jsx`
  : Ensured the completed waste list always scrolls to the top when rendered. Added simulated data for completed waste items.

- `src/components/shared/FooterNavBar.jsx`
  : Updated footer icons to display outlined icons when inactive and filled icons with green color when active.

- `src/components/Dashboard/Notifications.jsx`
  : Updated back navigation and ensured Header's hamburger menu works as expected. Ensured scroll to top on load and implemented back navigation.

- `src/components/Dashboard/Dashboard.jsx`
  : Added placeholder data, ensured scroll to top on load, and included FooterNavBar.

- `src/components/Dashboard/UserProfile.jsx`
  : Ensured scroll to top on load and implemented back navigation.

- `src/components/Dashboard/Recycle.jsx`
  : Ensured scroll to top on load and implemented back navigation.

- `src/components/Dashboard/Homepage.jsx`
  : Ensured scroll to top on load and included FooterNavBar.

- `updateChangelog.mjs`
  : Updated the script to ensure that changes made to the same file on the same day are appended under the existing entry for that file path. A new file path is only written if changes are made on a different day.
