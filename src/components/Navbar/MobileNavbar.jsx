import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Accordian, { AccordianItem } from "../Accordian";
import "./Navbar.css";

const MobileNavbar = (props) => {
  const [inputActive, setInputActive] = useState(false);

  const handleInputChange = () => {
    setInputActive((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setInputActive(false); // Close the navigation menu when a link is clicked
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  if (inputActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <>
      <nav className="mobile-nav w-full h-[9vh] flex justify-between items-center px-[5%] ">
        <a href="/#hero">
          <img src={logo} alt="logo" className=" w-[130px] " />
        </a>
        <div>
          {" "}
          <label className="hamburger-menu">
            <input
              type="checkbox"
              onChange={handleInputChange}
              checked={inputActive}
            />
          </label>
        </div>
      </nav>
      <aside className={`sidebar ${inputActive ? "sidebar-active" : ""}`}>
        <ul className="flex flex-col gap-[2rem] px-5 text-[20px]">
          <li
            onClick={handleLinkClick}
            className="  hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75"
          >
            <a href="/#hero">Home</a>
          </li>
          <li onClick={handleLinkClick}>
            <a
              className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75"
              href="/#about-us"
            >
              About
            </a>
          </li>
          {/* <li onClick={handleLinkClick}>
            <a
              className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75"
              href="talento-craft"
            >
              Our Work
            </a>
          </li> */}
          <li>
            <Accordian>
              <AccordianItem value="1" trigger="Our Work">
                <li className="mt-4">
                  <a href="/talento-craft" onClick={handleLinkClick}>
                    Mobile Apps
                  </a>
                </li>
                <li className="mt-4">
                  <a onClick={handleLinkClick} href="/coming-soon">
                    Games
                  </a>
                </li>
              </AccordianItem>
            </Accordian>
          </li>
          <li onClick={handleLinkClick}>
            <a
              className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75"
              href="/#career"
            >
              Career
            </a>
          </li>
          <li onClick={handleLinkClick}>
            <a
              className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75"
              href="/#contact-us"
            >
              Contact us
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default MobileNavbar;
