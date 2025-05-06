# UW Help App

## Project Overview

The UW Help App is designed to assist users in managing waste disposal efficiently. It provides features like waste disposal preferences, notifications, and user profiles.

## Features

- Onboarding screens for new users.
- User authentication (Login, Register, Social Login via Google and Facebook).
- Dashboard with waste statistics and navigation.
- Waste disposal preferences setup and scheduling pickups.
- Notifications and user profile management.
- Support section for user queries.

## Tech Stack

### Frameworks and Libraries

- **React**: The primary framework for building the user interface.
- **React Router**: For routing and navigation within the app.
- **Tailwind CSS**: For styling and responsive design.
- **Radix UI**: A set of accessible, unstyled components used for building UI elements like dialogs, menus, and switches.
- **shadcn/ui**: A library for accessible and customizable UI components built on Radix UI.
- **Lucide React**: For modern and customizable icons.
- **React Icons**: Provides a wide range of icons from various libraries.
- **Embla Carousel React**: For implementing carousels.
- **Firebase**: For authentication and backend services.
- **Axios**: For making HTTP requests.

### Build Tools

- **Vite**: Used as the build tool for fast development and production builds.
- **ESLint**: For linting and maintaining code quality.

## UI Components

The app includes custom UI components built using Radix UI primitives and styled with Tailwind CSS. These components are implemented using the **shadcn/ui** library, which provides accessible and customizable building blocks for modern web applications. The components include:

- **Button**: Customizable buttons.
- **Select**: Dropdown selection menus.
- **Dialog**: Modal dialogs for user interactions.
- **AlertDialog**: Alerts for critical actions.
- **Avatar**: User profile images.
- **Carousel**: For navigating through sections or features.

## Directory Structure

```
src/
  components/
    Authentication/
      Login.jsx
      Register.jsx
      SignUpAs.jsx
    Dashboard/
      Dashboard.jsx
      Notifications.jsx
      ...
    DisposeWaste/
      Default.jsx
    Shared/
      FooterNavBar.jsx
      Header.jsx
    UI/
      select.jsx
      button.jsx
      ...
  assets/
    images/
      uw-logo.png
      ...
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd uw-help-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Access the app at `http://localhost:3000` after starting the development server.
- Navigate through the app using the footer navigation bar.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.
