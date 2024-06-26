import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import iphone from "../../assets/iphone-mock.png";
import logo from "../../assets/logo.png";
import { database } from "../../firebase";

const TalentoCraftDesktop = (props) => {
  // const db = getFirestore(app);

  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    console.log("Email just printed:", email);

    try {
      const docRef = await addDoc(
        collection(database, "talentoCraftWaitlist"),
        {
          email: email,
        }
      );
      // console.log("Document written with ID: ", docRef.id);

      alert("Your email has been added to Waitlist :)");
    } catch (error) {
      console.error("Error adding email to databse: ", error);
      alert("An error occurred. Please try again later. :(");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="hero-section px-[3%] py-[3%]">
      <div className="parent max-h-[80vh]">
        <div className="hero-logo-container flex justify-center items-center">
          <div className="h-full">
            <div className="font-gugi text-4xl h-full w-full text-[#fff]">
              <img
                src={logo}
                alt="logo"
                className="w-full mx-auto max-h-full "
              />
            </div>
          </div>
        </div>
        <div className=" list-none nav-container text-kridaBlue flex  gap-10 items-center px-[5%] text-[28px] font-bold">
          <li>Mobile Apps</li>
          <a href="/coming-soon" className="hover:cursor-pointer">
            <li className="text-[#E4E3E3] opacity-[73%]">Games</li>
          </a>
        </div>
        <div className="hero-content-container flex">
          <div className="hero-left w-7/12 flex flex-col justify-center px-10 h-full overflow-auto max-h-[62vh] my-5 ">
            <div className="hero-text font-gugi text-[50px] pb-2">
              Talento Craft
            </div>
            <div className="hero-subtext capitalize text-[#DFDFDF] opacity-[52%] text-[20px] pb-5">
              Talento Craft is an innovative mobile app designed to help users
              build professional resumes tailored to job descriptions. With its
              intuitive interface and advanced features, it revolutionizes the
              job application process.
            </div>
            <div className="hero-text font-gugi text-[36px] pb-2">
              Key Features
            </div>
            <div className="hero-subtext capitalize text-[#DFDFDF] opacity-[52%] text-[20px] pb-10">
              <ul className="list-disc pl-10">
                <li>Resume building based on job description</li>
                <li>Interactive roadmap to learn programming</li>
                <li>Personalized learning recommendations</li>
                <li>Customizable resume templates</li>
              </ul>
            </div>
            <div className="hero-subtext capitalize text-[#fff] text-[20px] pb-4">
              Available soon on Google Play and App Store!.
            </div>
            <form onSubmit={handleEmailSubmit}>
              <div className="relative w-10/12">
                <input
                  type="email"
                  id="wailistEmail"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border-[.5px] border-gray-300 rounded-lg bg-[rgba(0,0,0,0)]"
                  placeholder="Enter your email to join the waitlist"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 bg-kridaBlue"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
          <div className="talento-right w-5/12 flex justify-end px-[5%]">
            <div className="h-full py-10">
              <img
                src={iphone}
                alt="mock"
                className="w-fit h-[100%] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentoCraftDesktop;
