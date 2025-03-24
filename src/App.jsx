import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding1 from "./SplashScreen/Onboarding1";
import Onboarding2 from "./SplashScreen/Onboarding2";
import Onboarding3 from "./SplashScreen/Onboarding3";
import Register from "./components/authtentication/Register";  component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/onboarding3" element={<Onboarding3 />} />
      </Routes>
    </Router>
  );
=========
import React from 'react'
import Register from './components/authtentication/Register'

const App = () => {
  return (
    <div>
      <Register />
    </div>
  )
>>>>>>>>> Temporary merge branch 2
}

export default App;
