import React from "react";
import BlogsCard from "./BlogsCard";
const Blogs = (props) => {
  return (
    <section
      id="blogs"
      className=" career-mobile-bg   lg:pt-[5%]    px-[10%] lg:px-[5%] "
    >
      <div className="title flex justify-center mb-10 pt-[10%] lg:pt-[5%]">
        <div className="px-[8%]">
          <p className=" text-[20px] lg:text-3xl  text-kridaBlue font-[600] text-center  ">
            Blogs
          </p>
          <div className="border-gradient mt-3 w-[100px]   lg:w-[200px] grow   "></div>
        </div>
      </div>
      <div className="cards flex flex-col gap-10 lg:gap-[100px] w-full justify-center items-center lg:flex-row lg:justify-evenly mb-2">
        <BlogsCard
          title="Evaluating Impact of Mobile Video Games"
          tags="Gaming"
          author=" Kridaverse"
          date="Mar 1, 2024"
          url="https://www.google.com"
          photo="src/assets/CareerCards/MAI.png"
        />
        <BlogsCard
          title="Evaluating Impact of Mobile Video Games"
          tags="Gaming"
          author=" Kridaverse"
          date="Mar 1, 2024"
          url="https://www.google.com"
          photo="src/assets/CareerCards/Gamer.png"
        />
        <BlogsCard
          title="Evaluating Impact of Mobile Video Games"
          tags="Gaming"
          author=" Kridaverse"
          date="Mar 1, 2024"
          url="https://www.google.com"
          photo="src/assets/CareerCards/Artist.png"
        />
      </div>
    </section>
  );
};

export default Blogs;
