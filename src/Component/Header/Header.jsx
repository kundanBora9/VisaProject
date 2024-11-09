"use client";
import React, { useState } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import "../../App.css"; // Ensure the path is correct
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png"

function Header() {
  const [active, setActive] = useState("home"); // Track active link
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Toggle navbar on mobile
  const [dropdownVisible, setDropdownVisible] = useState(false); // Manage dropdown visibility

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
              <p>info@mvtsindia.com</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FontAwesomeIcon icon={faPhone} />
              <p>+91 9896974869</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-5 p-3">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-white text-xl bg-[#303F9F] border border-white rounded-full p-1 hover:bg-[#4CAF50] hover:border-[#4CAF50]"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
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
          <img src={logo} className="mr-3 h-14 bg-black" alt="" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Logo
          </span> */}
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle onClick={() => setIsNavbarOpen(!isNavbarOpen)} />

        {/* Navbar Collapse */}
        <Navbar.Collapse className={`${isNavbarOpen ? "block" : "hidden"}`}>
          {/* Home Link */}
          <Navbar className="text-lg">
            <Link
              to="/"
              className={active === "home" ? "active-link" : ""}
              onClick={() => handleLinkClick("home")}
              style={{
                color: active === "home" ? "#303F9F" : "",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </Navbar>

          {/* About Link */}
          <Navbar className="text-lg">
            <Link
              to="/about"
              className={active === "about" ? "active-link" : ""}
              onClick={() => handleLinkClick("about")}
              style={{
                color: active === "about" ? "#303F9F" : "",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </Navbar>

          {/* Services Dropdown */}
          <Navbar className="text-lg">
            <div
              className="relative"
              onMouseOver={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <span
                className={`cursor-pointer ${
                  active === "service" ? "text-[#303F9F]" : ""
                }`}
              >
                Service
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0  w-48 bg-white border rounded-lg shadow-lg transition-all duration-200 ease-in-out ${
                  dropdownVisible ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/visaservice"
                  className="hover:bg-gray-200 px-4 py-2 block uppercase"
                  onClick={() => handleLinkClick("service-option1")}
                  style={{
                    color: active === "service-option1" ? "#303F9F" : "",
                    textDecoration: "none",
                  }}
                  
                >
                 Visa Service
                </Link>
                <Link
                  to="/mice"
                  className="hover:bg-gray-200 px-4 py-2 block uppercase"
                  onClick={() => handleLinkClick("service-option2")}
                  style={{
                    color: active === "service-option2" ? "#303F9F" : "",
                    textDecoration: "none",
                  }}
                >
                mice
                </Link>
                <Link
                  to="/tourpackages"
                  className="hover:bg-gray-200 px-4 py-2 block uppercase"
                  onClick={() => handleLinkClick("Tour packages")}
                  style={{
                    color: active === "Tour packages" ? "#303F9F" : "",
                    textDecoration: "none",
                  }}
                >
                Tour packages
                </Link>
                <Link
                  to="/airticket"
                  className="hover:bg-gray-200 px-4 py-2 block uppercase"
                  onClick={() => handleLinkClick("air tickets")}
                  style={{
                    color: active === "air tickets" ? "#303F9F" : "",
                    textDecoration: "none",
                  }}
                >
                air tickets
                </Link>
              </div>
            </div>
          </Navbar>

          {/* Contact Link */}
          <Navbar className="text-lg">
            <Link
              to="/contact"
              className={active === "contact" ? "active-link" : ""}
              onClick={() => handleLinkClick("contact")}
              style={{
                color: active === "contact" ? "#303F9F" : "",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </Navbar>

          {/* Get A Quote Button */}
          <button className="px-5 py-2 bg-[#4CAF50] hover:bg-[#303F9F] text-white rounded-[50px]">
            Get A Quote
          </button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
