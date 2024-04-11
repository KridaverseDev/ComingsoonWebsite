import React from "react";
import logo from "../assets/logo.png";
import MobileNavbar from "../components/Navbar/MobileNavbar";
const ComingSoon = (props) => {
  return (
    <section className="coming-soon-bg ">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="soft-glow h-[80vh] m-[5%] flex flex-col  rounded-[42px] coming-soon-container">
        <div className=" px-[5%] pt-[3%] text-[24px] hidden lg:block">
          <img src={logo} alt="logo" className="w-[200px] mr-auto " />
        </div>
        <div className="flex justify-center items-center flex-col grow mt-[-150px] ">
          <div className="uppercase font-gugi text-[45px] text-center lg:text-[90px]">
            Coming soon
          </div>
          <div className="uppercase  text-[#DFDFDF]  opacity-80 text-[18px] text-center lg:text-[24px]">
            We're working on something awesome! Stay tuned for updates.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
