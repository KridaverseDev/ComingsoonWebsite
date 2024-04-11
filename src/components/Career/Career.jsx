import React from "react";
import CareerCard from "./CareerCard";
const Career = (props) => {
  return (
    <section
      id="career"
      className=" career-mobile-bg py-[10%] lg:py-[5%]  px-[10%] lg:px-[5%] "
    >
      <div className="title flex justify-center mb-10 pt-[10%] lg:pt-[5%]">
        <div className="px-[8%]">
          <p className=" text-[20px] lg:text-3xl  text-kridaBlue font-[600] text-center  ">
            Career
          </p>
          <div className="border-gradient mt-3 w-[100px]   lg:w-[200px] grow   "></div>
        </div>
      </div>
      <div className="cards flex flex-col gap-[100px] w-full justify-center items-center lg:flex-row lg:justify-evenly mb-10">
        <CareerCard
          title="Mobile Application <br /> Intern"
          skills=" Flutter, UI/UX design"
          url="https://docs.google.com/forms/d/e/1FAIpQLScqzNJndIbC7NddsrLGZPf2ur5IJzbZryqGf8VZmmETgB2wAg/viewform"
          photo="src/assets/CareerCards/MAI.png"
        />
        <CareerCard
          title="Game Designer / Level <br /> Designer Intern"
          skills="Unreal Engine, Unity"
          url="https://docs.google.com/forms/d/e/1FAIpQLScqzNJndIbC7NddsrLGZPf2ur5IJzbZryqGf8VZmmETgB2wAg/viewform"
          photo="src/assets/CareerCards/Gamer.png"
        />
        <CareerCard
          title="2D/3D Artist   <br /> Intern"
          skills="Blender, Maya"
          url="https://docs.google.com/forms/d/e/1FAIpQLScqzNJndIbC7NddsrLGZPf2ur5IJzbZryqGf8VZmmETgB2wAg/viewform"
          photo="src/assets/CareerCards/Artist.png"
        />
      </div>
    </section>
  );
};

export default Career;
