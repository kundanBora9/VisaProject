"use client";
import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import "../../App.css"; // Make sure this path is correct based on your project structure
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [active, setActive] = useState("home");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActive(link);
    setIsNavbarOpen(false); // Close the navbar after clicking a link
  };

  return (
    <>
      {/* Top Bar */}
      <div className="">
        <div className="flex justify-around items-center flex-wrap md:flex-nowrap lg:flex-nowrap bg-[#303F9F] text-white">
          <div className="flex justify-center items-center gap-3 flex-wrap md:flex-nowrap lg:flex-nowrap">
            <div className="flex justify-center items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>example@gmail.com</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FontAwesomeIcon icon={faPhone} />
              <p>+123 456 7890</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-5 p-3">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-white text-xl bg-[#303F9F] border border-white rounded-full p-1 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
            />
            <FontAwesomeIcon icon={faFacebookF}
              className="text-white text-xl bg-[#303F9F] border border-white rounded-full px-2 py-1 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-white text-xl bg-[#303F9F] border border-white rounded-full px-1.5 py-1 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-xl bg-[#303F9F] border border-white rounded-full p-1 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-white text-xl bg-[#303F9F] border border-white rounded-full p-1 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
            />
          </div>

          {/* Help/Support/Contact Links */}
          <div className="flex justify-center items-center gap-3">
            <p>Help /</p>
            <p>Support /</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar fluid rounded className="poppins-regular sticky top-0 z-10">
        <Navbar.Brand href="/">
          <img src="" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Logo
          </span>
        </Navbar.Brand>
        
        {/* Navbar Toggle to open/close on mobile */}
        <Navbar.Toggle onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        
        {/* Navbar Collapse */}
        <Navbar.Collapse className={`${isNavbarOpen ? "block" : "hidden"}`}>
          <Navbar className="text-lg">
            <Link
              to="/"
              className={active === "home" ? "active-link" : ""}
              // onMouseOver={() => setActive("home")}
              // onMouseLeave={()=> setActive("")}
              onClick={() => handleLinkClick("home")}
              style={{
                color: active === "home" ? "#303F9F" : "",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </Navbar>
          <Navbar className="text-lg">
            <Link
              to="/about"
              className={active === "about" ? "active-link" : ""}
              // onMouseOver={() => setActive("about")}
              // onMouseLeave={()=> setActive("")}
              onClick={() => handleLinkClick("about")}
              style={{
                color: active === "about" ? "#303F9F" : "",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </Navbar>
          <Navbar className="text-lg">
            <Link
              to="/service"
              className={active === "service" ? "active-link" : ""}
              // onMouseOver={() => setActive("service")}
              // onMouseLeave={()=> setActive("")}
              onClick={() => handleLinkClick("service")}
              style={{
                color: active === "service" ? "#303F9F" : "",
                textDecoration: "none",
              }}
            >
              Service
            </Link>
          </Navbar>
          <Navbar className="text-lg">
            <Link
              to="/contact"
              className={active === "contact" ? "active-link" : ""}
              // onMouseOver={() => setActive("contact")}
              // onMouseLeave={()=> setActive("")}
              onClick={() => handleLinkClick("contact")}
              style={{
                color: active === "contact" ? "#303F9F" : "",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </Navbar>
          <button className="  px-5 py-2  bg-[#4CAF50] hover:bg-[#303F9F] text-white rounded-[50px]">
            Get A Quote
          </button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
