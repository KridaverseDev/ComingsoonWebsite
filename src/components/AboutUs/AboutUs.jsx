import React from "react";

const AboutUs = (props) => {
  return (
    <section id="about-us" className="mx-[3%] mt-[3%]">
      <div className="fading-container">
        <div className="title flex justify-center">
          <div className="px-[8%]">
            <p className="text-3xl  text-kridaBlue font-[600] text-center  ">
              About Us
            </p>
            <div className="border-gradient mt-3   w-[200px] grow   "></div>
          </div>
        </div>
        <div className="about-us-content font-jetBrains pt-10 text-[#fff]  text-[20px] font-thin text-justify">
          <ul className="list-disc">
            <li>
              At Kridaverse, we're not just another video game company. We're on
              a mission to revolutionize education by harnessing the potential
              of gaming. Our team of passionate developers and educators is
              dedicated to creating interactive experiences that captivate
              players' imaginations while fostering critical thinking,
              problem-solving skills, and a love for learning.
            </li>
            <li className="mt-4">
              In Kridaverse, every game is meticulously crafted to blend fun and
              education seamlessly. Whether exploring ancient civilizations,
              mastering mathematics, or unraveling scientific mysteries, our
              games are designed to inspire curiosity and empower players to
              explore new worlds of knowledge
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
