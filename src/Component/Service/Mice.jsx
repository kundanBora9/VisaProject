import React from "react";
import "../../App.css";
import { useState } from "react";
import { Card } from "flowbite-react";
import BackgroundImg from "../../assets/breadcrumb.png";
import Country3 from "../../assets/country-3.jpg";
import Country4 from "../../assets/country-4.jpg";
import Brazil from "../../assets/brazil.jpg";
import India from "../../assets/india.jpg";
import Itly from "../../assets/italy.jpg";
import Usa from "../../assets/usa.jpg";
import Training from "../../assets/training-1.jpg";
import Training1 from "../../assets/training-2.jpg";
import Training2 from "../../assets/training-3.jpg";
import Training3 from "../../assets/training-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import CounterUp from "../Home/Counter.jsx";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import serviceImg1 from "../../assets/service-1.jpg";
import serviceImg2 from "../../assets/service-2.jpg";
import serviceImg3 from "../../assets/service-3.jpg";
import Country1 from "../../assets/country-1.jpg";
import Country2 from "../../assets/country-2.jpg";
import VisaApp from "../../assets/visa-application.jpg";
import mice from "../../assets/mice.jpg";


function Mice() {
  return (
    <>
      {/* top */}
      <div className="relative">
        <img
          src={BackgroundImg}
          alt=""
          style={{ height: "50vh", width: "100%", opacity: 0.5 }}
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#303F9F] opacity-85"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center">
          <h1 className="poppins-semibold text-6xl">MICE</h1>
          <Breadcrumb
            aria-label="Default breadcrumb example"
            className="mt-3 text-[#4CAF50]"
            theme={{
              root: {
                base: "",
                list: "flex items-center",
              },
              item: {
                base: "group flex items-center",
                chevron: "mx-1 h-4 w-4 text-white group-first:hidden md:mx-2",
                href: {
                  off: "flex items-center text-sm font-medium text-white dark:test-white",
                  on: "flex items-center text-sm font-medium text-white hover:text-[#4CAF50]",
                },
                icon: "mr-2 h-4 w-4",
              },
            }}
          >
            <Breadcrumb.Item href="/" icon={HiHome} className="text-white">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" className="text-[#4CAF50]">
              Service
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="text-center mt-20">
        <h2 className=" poppins-semibold text-[#303F9F] text-3xl text-center lg:text-6xl poppins-semibold">
          MICE
        </h2>
        <p className=" mx-auto w-3/4 mt-3 text-justify lg:text-center poppins-regular">
          Experience the difference with MVTS India as your partner and let us
          transform your event into an unforgettable success story.
        </p>
      </div>

      <div className="container flex flex-col md:flex-row lg:flex-row justify-start items-start mt-10 poppins-regular">
        <div className="w-full md:w-3/4 lg:w-3/4 p-4 ">
          <p className="poppins-regular">
          Embark on a journey of seamless event management with MVTS India as your trusted partner. With a keen focus on Meetings, Incentives, Conferences, and Exhibitions (MICE), we bring innovation and professionalism to every aspect of your event. Our dedicated team of experts is committed to understanding your unique requirements and crafting tailored solutions that exceed expectations.
          </p>
          <p className="mt-5 poppins-regular">
          From conceptualization to execution, we handle every detail with precision and care, ensuring a flawless experience for you and your attendees. Whether it's coordinating logistics, securing venues, managing accommodations, or arranging engaging activities, we leverage our extensive network and expertise to deliver exceptional results.
        </p>
        <p className="mt-5 poppins-regular">
        At MVTS India, we believe in the power of collaboration and communication. We work closely with you every step of the way, providing transparent communication and personalized attention to ensure that your vision is brought to life seamlessly. With our unwavering commitment to excellence and customer satisfaction, you can trust us to elevate your MICE event to new heights.
        </p>
        </div >
        <div className=" p-4">
          <img src={mice} alt=""  className=""/>
        </div>
      </div>
    </>
  );
}

export default Mice;
