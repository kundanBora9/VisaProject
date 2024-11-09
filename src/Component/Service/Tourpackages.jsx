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
import tourpackage from '../../assets/tour-packages.jpg'

function Tourpackages() {
  return (
<>

<div className="relative">
        <img
          src={BackgroundImg}
          alt=""
          style={{ height: "50vh", width: "100%", opacity: 0.5 }}
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#303F9F] opacity-85"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center">
          <h1 className="poppins-semibold text-6xl">Tour Packages </h1>
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
            Tour Packages
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

<div className="container flex flex-col md:flex-row lg:flex-row justify-evenly items-start mt-10 poppins-regular">
  <div className="w-full md:w-1/2 p-4">
    <h2 className="text-[#303F9F] text-6xl poppins-semibold">TOUR PACKAGES</h2>
    <p className="text-xl mt-10 poppins-regular">
    MVTS India stands as a premier international tour package planner, offering meticulously crafted itineraries to suit every traveler's preferences and needs. With a dedicated team boasting years of experience in the travel industry, MVTS India ensures that each journey is not just a trip but an unforgettable experience. From exotic destinations to cultural immersion tours, adventure getaways to luxurious retreats, MVTS India caters to diverse tastes and interests. With a focus on personalized service and attention to detail, they strive to exceed client expectations by delivering seamless travel experiences from start to finish. Whether it's exploring ancient ruins, indulging in gourmet cuisine, or simply unwinding on pristine beaches, MVTS India transforms travel dreams into reality with passion and expertise.
    </p>
  </div>
  <div className=" p-4 w-full md:w-1/2 flex justify-center">
    <img src={tourpackage} alt="Tour package" className="w-3/4" />
  </div>
</div>

</>

    
  )
}

export default Tourpackages