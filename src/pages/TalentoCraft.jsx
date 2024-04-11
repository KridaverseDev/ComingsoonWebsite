import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import TalentoCraftDesktop from "../components/TalentoCraft/TalentoCraftDesktop";
import TalentoCraftMobile from "../components/TalentoCraft/TalentoCraftMobile";
const TalentoCraft = (props) => {
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
      {isMobile ? <TalentoCraftMobile /> : <TalentoCraftDesktop />}
      <Footer />
    </>
  );
};
export default TalentoCraft;
