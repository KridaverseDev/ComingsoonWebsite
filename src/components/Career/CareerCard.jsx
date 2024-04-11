import React from "react";
import MAI from "../../assets/CareerCards/MAI.png";

const CareerCard = ({ title, skills, url, photo }) => {
  const handleRedirect = () => {
    // Redirect to the URL passed as prop
    window.location.href = url;
  };
  return (
    <>
      <div className="fading-card rounded-[13px] lg:rounded-[59px] p-5  flex justify-center items-center flex-col  h-[350px] min-w-[25vw] max-w-[500px] w-full">
        <div className="card-image ">
          <img src={photo} width="150" className="rounded-[42px]" />
        </div>
        <div
          className="card-title text-[#D0D5DD] text-[14px] lg:text-[22px] text-center mt-5 "
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div className="card-desc text-[#7E7E7E] text-[12px] lg:text-[16px] text-center mt-3 mb-5">
          Skills required: {skills}
        </div>
        <div
          className="card-action absolute bottom-[-5%]  shadow-soft hover:shadow-softHover  duration-300 active:scale-95 bg-[rgb(0,128,255)]  rounded-[11px]"
          onClick={handleRedirect}
        >
          <button className=" px-8 py-2">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
