# Frontend Information

This document provides a detailed account of all the pages and functionalities implemented in the UW Help App. Each section includes the name of the page, its file path, and a description of its purpose and functionality.

## Pages and Functionalities

### Authentication Pages

#### Login

- **File Path**: `src/components/Authentication/Login.jsx`
- **Description**: This page allows users to log in to the application using their credentials. It supports social login options via Google and Facebook. The page includes input fields for username and password, with validation for required fields.

#### Register

- **File Path**: `src/components/Authentication/Register.jsx`
- **Description**: This page enables new users to create an account. It includes input fields for user details like name, email, and password, along with validation.

#### SignUpAs

- **File Path**: `src/components/Authentication/SignUpAs.jsx`
- **Description**: This page allows users to select their role (e.g., waste depositor or waste collector) during the signup process.

### Dashboard Pages

#### Dashboard

- **File Path**: `src/components/Dashboard/Dashboard.jsx`
- **Description**: The main dashboard page displays an overview of the user's activities, including waste statistics, upcoming events, and quick navigation options.

#### Notifications

- **File Path**: `src/components/Dashboard/Notifications.jsx`
- **Description**: This page lists all notifications related to the user's activities, such as scheduled pickups and updates.

#### User Profile

- **File Path**: `src/components/Dashboard/UserProfile.jsx`
- **Description**: Displays the user's profile information and provides options to edit the profile or navigate to other settings.

#### Edit Profile

- **File Path**: `src/components/Dashboard/EditProfile.jsx`
- **Description**: Allows users to update their profile details, including name, email, and address.

#### Recycle

- **File Path**: `src/components/Dashboard/Recycle.jsx`
- **Description**: Provides information and options for recycling waste materials.

#### Past Waste

- **File Path**: `src/components/Dashboard/PastWaste.jsx`
- **Description**: Displays a history of past waste disposal activities.

#### Support

- **File Path**: `src/components/Dashboard/Support.jsx`
- **Description**: A support page where users can submit queries or issues they are facing.

### Waste Disposal Pages

#### Default

- **File Path**: `src/components/DisposeWaste/Default.jsx`
- **Description**: Allows users to set up their waste disposal preferences and schedule pickups. It includes dropdowns for selecting waste categories and locations.

### Splash Screens

#### Onboarding1

- **File Path**: `src/components/SplashScreen/Onboarding1.jsx`
- **Description**: The first onboarding screen introduces the app to new users.

#### Onboarding2

- **File Path**: `src/components/SplashScreen/Onboarding2.jsx`
- **Description**: Provides more details about the app's features and benefits.

#### Onboarding3

- **File Path**: `src/components/SplashScreen/Onboarding3.jsx`
- **Description**: Explains how the app works and guides users to the registration page.

### Shared Components

#### Header

- **File Path**: `src/components/Shared/Header.jsx`
- **Description**: A shared header component used across multiple pages. It includes navigation and branding elements.

#### FooterNavBar

- **File Path**: `src/components/Shared/FooterNavBar.jsx`
- **Description**: A shared footer navigation bar for easy access to key sections of the app.

#### MenuItems

- **File Path**: `src/components/Shared/MenuItems.jsx`
- **Description**: Contains menu items for navigation within the app.

### Waste Collector Pages

#### Collector Dashboard

- **File Path**: `src/components/WasteCollector/CollectorDashboard.jsx`
- **Description**: The main dashboard for waste collectors, showing their activities and schedules.

#### PickUpHistory

- **File Path**: `src/components/WasteCollector/PickUpHistory.jsx`
- **Description**: Displays a history of waste pickups completed by the collector.

#### UpcomingPickUp

- **File Path**: `src/components/WasteCollector/UpcomingPickUp.jsx`
- **Description**: Lists upcoming waste pickups scheduled for the collector.

#### UploadDocuments

- **File Path**: `src/components/WasteCollector/UploadDocuments.jsx`
- **Description**: Allows waste collectors to upload necessary documents for verification.

#### TransactionHistory

- **File Path**: `src/components/WasteCollector/TransactionHistory.jsx`
- **Description**: Displays a history of transactions related to waste collection activities.

### UI Components

The app includes reusable UI components located in the `src/components/ui/` directory. These components are built using the **shadcn/ui** library and styled with Tailwind CSS. Examples include:

- **Button**: `src/components/ui/button.jsx`
- **Select**: `src/components/ui/select.jsx`
- **Dialog**: `src/components/ui/dialog.jsx`
- **AlertDialog**: `src/components/ui/alert-dialog.jsx`
- **Avatar**: `src/components/ui/avatar.jsx`
- **Carousel**: `src/components/ui/carousel.jsx`

This document serves as a comprehensive guide to the frontend implementation of the UW Help App. For further details, refer to the respective files in the codebase.
