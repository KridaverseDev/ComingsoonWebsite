import React from "react";
import iphone from "../../assets/iphone-mock.png";
import MobileNavbar from "../Navbar/MobileNavbar";

const TalentoCraftMobile = (props) => {
  const handleEmailSubmit = (event) => {
    event.preventDefault();

    const email = document.getElementById("wailistEmail").value;
    console.log("Email:", email);

    alert("Email added to Waitlist :)");
  };
  return (
    <section className="soft-glow">
      <MobileNavbar />
      <div className="  hero-content-container hero-bg-pattern  mobile-hero-container  flex m-5 rounded-[12px] overflow-x-hidden  ">
        <div className=" w-full flex flex-col justify-center py-10 px-5 h-full">
          <div className=" hero-text font-gugi text-[35px] pb-2">
            Talento Craft
          </div>
          <div className="hero-subtext capitalize text-[#DFDFDF] opacity-[52%] text-[16px] pb-5">
            Talento Craft is an innovative mobile app designed to help users
            build professional resumes tailored to job descriptions. With its
            intuitive interface and advanced features, it revolutionizes the job
            application process.
          </div>
          <div className=" hero-text font-gugi text-[35px] pb-2">
            Key Features
          </div>
          <div className="hero-subtext capitalize text-[#DFDFDF] opacity-[52%] text-[16px] pb-10">
            <ul className=" list-disc pl-5">
              <li>Resume building based on job description</li>
              <li>Interactive roadmap to learn programming</li>
              <li>Personalized learning recommendations</li>
              <li> Customizable resume templates</li>
            </ul>
          </div>

          <div className=" talento-right  flex justify-end px-[5%] pb-10   ">
            <div className="h-full  ">
              <img
                src={iphone}
                alt="mock"
                className="w-fit h-[100%]  shadow-2xl "
              />
            </div>
          </div>

          <div className=" ">
            <div className="hero-subtext capitalize text-[#fff]   text-[16px] text-center pb-8">
              {" "}
              Available soon on Google Play and App Store!.
            </div>
            <form onSubmit={handleEmailSubmit} className="relative w-full">
              <input
                type="email"
                id="wailistEmail"
                className="block w-full p-5 ps-2  pe-2 text-[9px] text-gray-900 border-[.5px] border-gray-300 rounded-lg bg-[rgba(0,0,0,0)]    "
                placeholder="Enter your email to join the waitlist"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-kridaBlue  "
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentoCraftMobile;
