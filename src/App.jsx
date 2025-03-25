import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding1 from "./components/SplashScreen/Onboarding1";
import Onboarding2 from "./components/SplashScreen/Onboarding2";
import Onboarding3 from "./components/SplashScreen/Onboarding3";
import Register from "./components/authentication/Register";
import SignUpAs from "./components/authentication/SignUpAs"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/onboarding3" element={<Onboarding3 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signupas" element={<SignUpAs />} />
      </Routes>
    </Router>
  );
}

export default App;
