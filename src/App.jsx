import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Default = lazy(() => import("./components/DisposeWaste/Default"));
const Login = lazy(() => import("./components/Authentication/Login"));
const Register = lazy(() => import("./components/Authentication/Register"));
const Homepage = lazy(() => import("./components/Dashboard/Homepage"));
const Notifications = lazy(() => import("./components/Dashboard/Notifications"));
const UserProfile = lazy(() => import("./components/Dashboard/UserProfile"));
const Recycle = lazy(() => import("./components/Dashboard/Recycle"));

function App() {
  return (
    <Router basename="/uw-help-app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dispose-waste" element={<Default />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/recycle" element={<Recycle />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
