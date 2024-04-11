import React from "react";
import getStarted from "../../assets/get-started-button.png";
import logo from "../../assets/logo.png";
import robot from "../../assets/robot.png";
import Navbar from "../Navbar/Navbar";
const Hero = (props) => {
  return (
    <section
      id="hero"
      className=" hero-section px-[3%] pt-[5%]   overflow-hidden"
    >
      <div className="parent  h-[85vh] ">
        <div className="hero-logo-container  flex justify-center items-center">
          {" "}
          <a href="/#hero" className="h-full">
            <div className="font-gugi text-4xl h-full w-full text-[#fff]">
              <img
                src={logo}
                alt="logo"
                className="w-full mx-auto max-h-full "
              />
            </div>{" "}
          </a>
        </div>
        <div className="nav-container ">
          <Navbar />{" "}
        </div>
        <div className="hero-content-container  flex ">
          <div className="hero-left w-7/12 flex flex-col justify-center px-10 h-full">
            <div className=" hero-text font-gugi text-[50px] pb-5">
              Welcome To Kridaverse
            </div>
            <div className="hero-subtext capitalize text-[#DFDFDF] opacity-[52%] text-[20px] pb-10">
              Welcome to the world where learning meets adventure, where
              education is not just a task but a thrilling journey. Step into
              Kridaverse, where we believe that gaming isn't just about
              entertainment—it's about unlocking the power of learning through
              immersive experiences
            </div>
            <div className="w-fit">
              <a href="#about-us">
                {" "}
                <img
                  src={getStarted}
                  draggable="false"
                  alt="get started button"
                  className="w-fit   duration-300 active:scale-95 active:brightness-[80%]"
                />
              </a>
            </div>
          </div>
          <div className="hero-right  w-5/12">
            <img
              id="hero-desktop-robot-image"
              draggable="false"
              src={robot}
              alt="robot-image"
              className=" max-h-[100%] absolute bottom-0 sm:right-[-20%] md:right-[-15vw] lg:right-[-5%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
