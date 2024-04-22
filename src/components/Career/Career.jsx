import React from "react";
import CareerCard from "./CareerCard";
const Career = (props) => {
  return (
    <section
      id="career"
      className=" career-mobile-bg py-[10%]   lg:py-[3%]  px-[10%] lg:px-[5%] "
    >
      <div className="title flex justify-center mb-10 pt-[10%] lg:pt-[8%]">
        <div className="px-[8%]">
          <p className=" text-[20px] lg:text-3xl  text-kridaBlue font-[600] text-center  ">
            Career
          </p>
          <div className="border-gradient mt-3 w-[100px]   lg:w-[200px] grow   "></div>
        </div>
      </div>
      <div className="cards flex flex-col gap-[60px] w-full justify-center items-center lg:flex-row lg:justify-evenly mb-10">
        <CareerCard
          title="Mobile Application <br /> Intern"
          skills=" Flutter, UI/UX design"
          url="https://forms.gle/io17imkpQkfW653dA"
          photo="/static/CareerCards/MAI.png"
        />
        <CareerCard
          title="MERN Stack Developer"
          skills="React Js, Node, MongoDB"
          url="https://forms.gle/io17imkpQkfW653dA"
          photo="/static/CareerCards/Gamer.png"
        />
        <CareerCard
          title="Human resource"
          skills="Communication skills, Recruitment"
          url="https://forms.gle/io17imkpQkfW653dA"
          photo="/static/CareerCards/Artist.png"
        />
      </div>
    </section>
  );
};

export default Career;
