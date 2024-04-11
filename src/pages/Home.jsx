import React, { useEffect, useState } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsMobile from "../components/AboutUs/AboutUsMobile";
import Blogs from "../components/Blogs/Blogs";
import Career from "../components/Career/Career";
import ContactUs from "../components/ContactUs/ContactUs";
import ContactUsMobile from "../components/ContactUs/ContactUsMobile";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HeroMobile from "../components/Hero/HeroMobile";

const Home = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <>
          <div className="soft-glow">
            <HeroMobile />
            <AboutUsMobile />
            <Blogs />
          </div>
          <Career />
          <ContactUsMobile />
        </>
      ) : (
        <>
          <div className="desktop-grid">
            <Hero />
            <AboutUs />
            {/* <Blogs /> */}
            <Career />
          </div>
          <ContactUs />
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
