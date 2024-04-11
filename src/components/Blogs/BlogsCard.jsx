import React from "react";
import MAI from "../../assets/CareerCards/MAI.png";
import calIcon from "../../assets/icons/cal.svg";
import userIcon from "../../assets/icons/user.svg";
const BlogsCard = ({ title, author, tags, url, photo, date }) => {
  const handleRedirect = () => {
    // Redirect to the URL passed as prop
    window.open(url, "_blank");
  };
  return (
    <>
      <div
        className="fading-card rounded-[13px] lg:rounded-[59px] py-3 lg:py-5 px-5 lg:px-10 flex justify-center   flex-col   min-w-[25vw] max-w-[500px] hover:scale-105 hover:cursor-pointer active:scale-100 duration-300"
        onClick={handleRedirect}
      >
        <div className="card-image w-[100%] h-[200px] ">
          <img
            src={photo}
            className="lg:rounded-[42px] rounded-[22px] w-[100%] h-full object-cover"
          />
        </div>
        <div className="card-desc text-[#7E7E7E] text-[12px] lg:text-[16px] text-left   mt-5 mb-1">
          {tags}
        </div>

        <div className="card-title text-[#D0D5DD] text-[14px] lg:text-[22px]  ">
          {title}
        </div>

        <div className="flex gap-3 items-center mt-1  ">
          <div>
            <img src={userIcon} className="h-[16px]" />
          </div>
          <div className="card-desc text-[#7E7E7E] text-[12px] lg:text-[16px] text-left   ">
            {author}
          </div>
        </div>
        <div className="flex gap-3 items-center mt-1 mb-5  ">
          <div>
            <img src={calIcon} className="h-[16px]" />
          </div>
          <div className="card-desc text-[#7E7E7E] text-[12px] lg:text-[16px] text-left   ">
            {date}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
