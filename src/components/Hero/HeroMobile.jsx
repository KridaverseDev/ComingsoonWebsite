import React from "react";
import getStarted from "../../assets/get-started-button.png";
import robotMobile from "../../assets/robot-mobile.png";
import MobileNavbar from "../Navbar/MobileNavbar";
import Navbar from "../Navbar/Navbar";
const HeroMobile = (props) => {
  return (
    <section>
      <MobileNavbar />

      <div className="hero-content-container hero-bg-pattern  mobile-hero-container  flex m-5 rounded-[12px] overflow-x-hidden  ">
        <div className=" w-9/12 flex flex-col justify-center py-10 px-5 h-full">
          <div className=" font-gugi text-[18px] pb-5">
            Welcome To Kridaverse
          </div>
          <div className="capitalize text-[#DFDFDF] opacity-[52%] text-[12px] pb-10">
            Welcome to the world where learning meets adventure, where education
            is not just a task but a thrilling journey. Step into Kridaverse,
            where we believe that gaming isn't just about entertainment—it's
            about unlocking the power of learning through immersive experiences
          </div>
          <div className="w-fit">
            <a href="#about-us">
              {" "}
              <img
                src={getStarted}
                draggable="false"
                alt="get started button"
                className="w-[144px]   duration-300 active:scale-95 active:brightness-[80%]"
              />
            </a>
          </div>
        </div>
        <div className="hero-right  w-3/12">
          <img
            id="mobile-hero-robot"
            draggable="false"
            src={robotMobile}
            alt="robot-image"
            className=" max-h-[100%] absolute bottom-0 right-[-50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
