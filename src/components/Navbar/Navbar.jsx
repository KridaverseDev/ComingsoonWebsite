import React from "react";

const Navbar = (props) => {
  return (
    <div className=" desktop-nav h-full w-full">
      <ul className="w-full flex justify-evenly items-center h-full text-[25px] text-[#E4E3E3] opacity-[73%] font-bold">
        <li className="  hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75">
          <a>Home</a>
        </li>
        <li className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75">
          <a href="#about-us">About</a>
        </li>
        <li className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75">
          <a href="talento-craft">Our Work</a>
        </li>
        <li className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75">
          <a href="#career">Career</a>
        </li>
        <li className=" hover:cursor-pointer hover:text-kridaBlue active:scale-95 active:brightness-75">
          <a href="#contact-us">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
