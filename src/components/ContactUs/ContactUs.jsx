import React from "react";
import locationIcon from "../../assets/icons/location.png";
import mailIcon from "../../assets/icons/mail.png";
import callIcon from "../../assets/icons/phone.png";
import timeIcon from "../../assets/icons/time.png";
const ContactUs = (props) => {
  return (
    <section id="contact-us" className="  px-[5%]  contact-us-bg  py-[5%]">
      <div className="flex   ">
        <div className="left w-5/12 flex items-center">
          <div className="contact-us-content-box-border my-auto  pr-[15%]  capitalize p-8 mr-[-5%]">
            <div className=" text-kridaBlue text-[30px] font-[600] mb-5  ">
              Contact Us
            </div>
            <div className="text-[#7E7E7E]">
              We'd love to hear from you! Whether you have a question about our
              games, want to explore partnership opportunities, or just want to
              say hello, feel free to reach out. Your feedback and ideas are
              what drive us to create amazing experiences in Kridaverse.
            </div>
          </div>
        </div>
        <div className="right w-7/12">
          <div className="p-12 flex flex-col gap-10 bg-[#2B2B2B] contact-details-box w-fit rounded-[59px]">
            {/* location box */}
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//REVA+UNIVERSITY,+Rukmini+Knowledge+Park,+Yelahanka,+Kattigenahalli,+Bengaluru,+Sathanur,+Karnataka+560064/@13.1168745,77.6346118,15z/data=!4m17!1m7!3m6!1s0x3bae191736187a37:0x3092096ba7fb4c9b!2sREVA+UNIVERSITY!8m2!3d13.1168745!4d77.6346118!16s%2Fm%2F0pcttht!4m8!1m0!1m5!1m1!1s0x3bae191736187a37:0x3092096ba7fb4c9b!2m2!1d77.6346118!2d13.1168745!3e9?entry=ttu"
              className="hover:brightness-90 hover:cursor-pointer "
            >
              {" "}
              <div className="flex gap-4    py-3 px-5 bg-[#3D3D3D] rounded-[22px] max-w-[846px]   ">
                <div className="contact-box-icon my-auto   ">
                  <img
                    src={locationIcon}
                    alt="icon"
                    width="33"
                    className="min-w-[30px]"
                  />
                </div>
                <div className="    dotted-divider"></div>
                <div className="contact-box-content  ">
                  <p className="text-[21px]">Location:</p>
                  <p className=" opacity-[57%]">
                    REVA Nest,Knowledge Park,Kattigenahalli, Yelahanka,
                    Bangalore,Karnataka, India, 560 064
                  </p>
                </div>
              </div>
            </a>
            {/* mail box */}
            <a
              href="mailto:kridaverse@gmail.com"
              className=" hover:brightness-90 hover:cursor-pointer"
            >
              <div className="flex gap-4  py-3 px-5 bg-[#3D3D3D] rounded-[22px] max-w-[846px] ">
                <div className="contact-box-icon my-auto   ">
                  <img
                    src={mailIcon}
                    alt="icon"
                    width="33"
                    className="min-w-[30px]"
                  />
                </div>
                <div className="    dotted-divider"></div>
                <div className="contact-box-content  ">
                  <p className="text-[21px]">Mail:</p>
                  <p className=" opacity-[57%]">Rkridaverse@gmail.com</p>
                </div>
              </div>
            </a>
            {/* call box */}
            <a
              href="tel:9880313164"
              className=" hover:brightness-90 hover:cursor-pointer"
            >
              {" "}
              <div className="flex gap-4    py-3 px-5 bg-[#3D3D3D] rounded-[22px] max-w-[846px] ">
                <div className="contact-box-icon my-auto   ">
                  <img
                    src={callIcon}
                    alt="icon"
                    width="33"
                    className="min-w-[30px]"
                  />
                </div>
                <div className="    dotted-divider"></div>
                <div className="contact-box-content  ">
                  <p className="text-[21px]">Call:</p>
                  <p className=" opacity-[57%]">+91 98803 13164</p>
                </div>
              </div>
            </a>
            {/* hours box */}
            <div className="flex gap-4    py-3 px-5 bg-[#3D3D3D] rounded-[22px] max-w-[846px]  hover:brightness-90">
              <div className="contact-box-icon my-auto   ">
                <img
                  src={timeIcon}
                  alt="icon"
                  width="33"
                  className="min-w-[30px]"
                />
              </div>
              <div className="    dotted-divider"></div>
              <div className="contact-box-content  ">
                <p className="text-[21px]">Open Hours:</p>
                <p className=" opacity-[57%]">9AM - 5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
