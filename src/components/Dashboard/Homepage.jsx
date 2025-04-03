import React, { useState } from "react";
import Header from "../shared/Header";
import UserGreeting from "./UserGreeting";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import WasteCollectors from "./WasteCollectors";
import FooterNavBar from "../shared/FooterNavBar";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsMenuOpen(open);
  };

  return (
    <div className="relative">
      <Header isMenuOpen={isMenuOpen} handleOpenChange={handleOpenChange} />
      <UserGreeting />
      <SearchBar />
      <Carousel
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <WasteCollectors />
      <FooterNavBar />
    </div>
  );
};

export default Homepage;
