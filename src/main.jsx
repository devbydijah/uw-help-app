import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

const CLIENT_ID =
  "751807253098-0uvptb6cqi8a3iuqahmppvcseh7o7onl.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter basename="/uw-help-app">
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
