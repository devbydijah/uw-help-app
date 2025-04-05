## 1. General Project Guidelines

* **Mobile-First Development:**
    * Prioritize mobile styles using Tailwind CSS breakpoint modifiers (`sm:`, `md:`, `lg:`).
    * **Specification:** Design for mobile first, then progressively enhance for larger screens using Tailwind's responsive modifiers.
* **Clean Code:**
    * Indent with 2 spaces.
    * Limit lines to 100 characters.
    * Use arrow functions where appropriate.
    * **Specification:** Maintain consistent code formatting for readability and maintainability.
* **React Best Practices:**
    * Use functional components with Hooks (`useState`, `useEffect`, `useContext`).
    * **Specification:** Employ modern React patterns for efficient development.
* **Naming Conventions:**
    * PascalCase for component names (e.g., `WasteCollectorCard`).
    * camelCase for variables and functions (e.g., `handleButtonClick`).
    * **Specification:** Follow consistent naming conventions for clarity and organization.
* **Error Handling:**
    * Use `try...catch` for API calls.
    * Display user-friendly error messages.
    * **Specification:** Implement robust error handling to ensure application stability.
* **Performance Optimization:**
    * Avoid unnecessary re-renders (`React.memo`, `useCallback`, `useMemo`).
    * Lazy load assets.
    * **Specification:** Optimize code for performance, especially on mobile.
* **Security Best Practices:**
    * Escape user input.
    * Avoid storing sensitive data in local storage.
    * **Specification:** Adhere to security best practices to protect user data.

## 2. UI Guidelines

* **Tailwind CSS:**
    * Primarily use utility classes.
    * Use CSS Modules (kebab-case) for necessary custom styles.
    * **Specification:** Style components consistently using Tailwind CSS.
* **Responsiveness:**
    * Use Flexbox and Grid for layout.
    * Test on multiple screens.
    * Use Tailwind's responsive modifiers.
    * **Specification:** Ensure the UI adapts to different screen sizes.
* **Design Consistency:**
    * Follow the predefined color palette and typography.
    * Maintain established UI patterns.
    * **Specification:** Create a cohesive and professional user experience.
* **User Feedback:**
    * Use visual cues (animations, transitions).
    * Display helpful error and validation messages.
    * **Specification:** Provide clear and informative feedback to users.
* **Accessibility:**
    * Use semantic HTML.
    * Provide `alt` text for images.
    * Ensure keyboard navigation.
    * **Specification:** Make the application accessible to all users.

## 3. Build and Run Instructions

* **Project Structure:**
    * Feature-based component directories (`src/components/`).
    * PascalCase for component files.
    * camelCase for functions.
    * kebab-case for CSS modules.
    * Separate pages in `src/pages/`.
    * **Specification:** Organize the project with a consistent and maintainable structure.
* **Dependencies:**
    * Use npm or yarn.
    * Specify exact versions in `package.json`.
    * **Specification:** Manage dependencies consistently and reliably.
* **Development Server:**
    * Run with `npm start` or `yarn start` (port 3000).
    * **Specification:** Start the development server for local development.
* **Production Build:**
    * Use `npm run build` or `yarn build`.
    * Configure environment variables.
    * **Specification:** Build the application for production deployment.
* **Testing:**
    * Use Jest and React Testing Library for unit and integration tests.
    * **Specification:** Implement comprehensive testing to ensure code quality.

## 4. Code Quality, Debugging, and Testing

* **Error Prevention:**
    * Analyze requirements.
    * Write defensive code.
    * **Specification:** Proactively minimize the introduction of errors.
* **Error Detection:**
    * Review code.
    * Consider edge cases.
    * Use linters (ESLint).
    * **Specification:** Systematically identify potential errors in the code.
* **Error Correction:**
    * Automatically correct syntax errors.
    * Fix logical errors.
    * Implement error handling.
    * **Specification:** Ensure the application handles errors gracefully.
* **Debugging:**
    * Use browser developer tools.
    * Use `console.log()`.
    * Use debugging extensions.
    * **Specification:** Employ effective debugging techniques to diagnose and resolve issues.
* **Testing (Performance, UI Journey, Functionality):**
    * Write testable code (modular, decoupled).
    * **Performance Testing:**
        * Measure rendering time.
        * Use profiling.
        * Test on mobile with varying networks.
        * Simulate load.
        * **Specification:** Ensure optimal performance across devices and conditions.
    * **UI Journey Testing:**
        * Test user flows.
        * Test navigation.
        * Test UI updates.
        * Test responsiveness (Cypress/Playwright).
        * **Specification:** Verify a smooth and intuitive user experience.
    * **Functionality Testing:**
        * Unit tests with React Testing Library (props, state, events).
        * Test Hooks and utilities.
        * Mock API calls (`jest-fetch-mock`/`msw`).
        * Test form validation.
        * **Specification:** Validate the correct behavior of all components and features.
    * **Testing Libraries:**
        * Jest.
        * React Testing Library.
        * Cypress/Playwright.
        * `PerformanceObserver` API.
        * **Specification:** Utilize appropriate testing tools and frameworks.
    * **Test Case Examples:**
        * Component rendering.
        * Event handling.
        * Data fetching.
        * Form validation.
        * Navigation.
        * Performance metrics.
        * Edge cases.
        * **Specification:** Provide comprehensive test coverage.
    * **Continuous Testing:**
        * Test frequently.
        * Integrate into CI/CD.
        * Monitor performance and UI journeys.
        * **Specification:** Implement a continuous testing strategy.

## 5. Change Logging

* For every file change, add a summary to `Changelog.md` in the root directory:

    ```markdown
    ### 5th April, 2025

    * `path/to/changed/file.js`: Brief description of the change.
    ```

* Organize `Changelog.md` by date (Day Month, Year), most recent at the top.

* **Specification:** Maintain a detailed change log for traceability.

## IMPORTANT NOTE!!!

* When writing code, ONLY change or add code that's specifically requested. Avoid rewriting or changing existing code unless absolutely necessary.
* **Specification:** Prevent unintended side effects by minimizing unnecessary code modifications.