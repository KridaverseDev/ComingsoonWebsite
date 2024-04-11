import React from "react";
import Newsletter from "./Newsletter";

const Footer = (props) => {
  return (
    <footer className="w-full   bg-[#2B2B2B] px-[5%]">
      <div className="flex justify-evenly flex-col lg:flex-row  pt-10 capitalize   gap-10">
        <div className="lg:w-5/12 ">
          <div className="text-[14px] lg:text-[20px] mb-3 lg:mb-4">
            KridaVerse
          </div>
          <div className="text-[#D7D7D7] text-[11px] lg:text-[14px]">
            <p>
              In Kridaverse, we craft games that are more than just fun—they're
              educational experiences that spark curiosity and inspire
              discovery.
            </p>
            <p className="mt-3">
              Join us in Kridaverse and embark on a journey where imagination
              knows no bounds. Let's game our way to knowledge together!
            </p>
          </div>
        </div>
        <div className="lg:w-3/12 ">
          <div className=" text-[14px] lg:text-[20px] mb-3 lg:mb-4">
            Get Our Newsletter
          </div>
          <div className="text-[#D7D7D7] text-[11px] lg:text-[14px] flex flex-col gap-1 lg:gap-3">
            <Newsletter />
          </div>
        </div>
        <div className="lg:w-4/12">
          <div className="text-[14px] lg:text-[20px] mb-3 lg:mb-4">Contact</div>
          <div className="text-[#D7D7D7] text-[11px] lg:text-[14px]">
            <p className="hover:brightness-90 ">
              <a
                target="_blank"
                href="https://www.google.com/maps/dir//REVA+UNIVERSITY,+Rukmini+Knowledge+Park,+Yelahanka,+Kattigenahalli,+Bengaluru,+Sathanur,+Karnataka+560064/@13.1168745,77.6346118,15z/data=!4m17!1m7!3m6!1s0x3bae191736187a37:0x3092096ba7fb4c9b!2sREVA+UNIVERSITY!8m2!3d13.1168745!4d77.6346118!16s%2Fm%2F0pcttht!4m8!1m0!1m5!1m1!1s0x3bae191736187a37:0x3092096ba7fb4c9b!2m2!1d77.6346118!2d13.1168745!3e9?entry=ttu"
              >
                REVA Nest, Rukmini Knowledge Park, Kattigenahalli, Yelahanka,
                Bangalore, Karnataka, India, 560 064
              </a>
            </p>
            <p className="mt-3  hover:brightness-90 hover:cursor-pointer ">
              Phone: <a href="tel:9880313164">+91 98803 13164</a>{" "}
            </p>
            <p className="hover:brightness-90 hover:cursor-pointer">
              Email:
              <a href="mailto:kridaverse@gmail.com">kridaverse@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className=" pt-8  pb-[50px] lg:py-10 mx-auto text-center text-[12px] lg:text-[14px] opacity-[86%]">
        © Copyright Kridaverse. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
