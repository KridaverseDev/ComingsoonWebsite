import React from "react";

const AboutUsMobile = (props) => {
  return (
    <section
      id="about-us"
      className=" about-us-grid mx-[3%] my-[10%] lg:my-[3%]"
    >
      <div className="title flex justify-center">
        <div className="px-[8%]">
          <p className="text-[20px]  text-kridaBlue font-[600] text-center  ">
            About Us
          </p>
          <div className="border-gradient mt-3   w-[100px] grow   "></div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="mobile-fading-container mobile-fading-container-balls w-6/12">
          <div className="about-us-content font-jetBrains pt-5 text-[#DFDFDF] opacity-50  text-[12px]   ">
            <div className="font-[100]">
              At Kridaverse, we're not just another video game company. We're on
              a mission to revolutionize education by harnessing the potential
              of gaming. Our team of passionate developers and educators is
              dedicated to creating interactive experiences that captivate
              players' imaginations while fostering critical thinking,
              problem-solving skills, and a love for learning.
            </div>
          </div>
        </div>
        <div className="mobile-fading-container w-6/12">
          <div className="about-us-content font-jetBrains pt-5 text-[#DFDFDF] opacity-50  text-[12px]  ">
            <div className="font-[100]">
              In Kridaverse, every game is meticulously crafted to blend fun and
              education seamlessly. Whether exploring ancient civilizations,
              mastering mathematics, or unraveling scientific mysteries, our
              games are designed to inspire curiosity and empower players to
              explore new worlds of knowledge
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMobile;
