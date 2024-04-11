import React from "react";
import logo from "../assets/logo.png";
const ComingSoon = (props) => {
  return (
    <section className="coming-soon-bg p-[5%]">
      <div className="soft-glow h-[80vh]  flex flex-col  rounded-[42px] coming-soon-container">
        <div className=" px-[5%] pt-[3%] text-[24px]">
          <img src={logo} alt="logo" className="w-[200px] mr-auto " />
        </div>
        <div className="flex justify-center items-center flex-col grow mt-[-150px] ">
          <div className="uppercase font-gugi text-[90px]">Coming soon</div>
          <div className="uppercase  text-[#DFDFDF]  opacity-80 text-[24px]">
            We're working on something awesome! Stay tuned for updates.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
