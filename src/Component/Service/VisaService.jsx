import React from "react";
import "../../App.css";
import { useState } from "react";
import BackgroundImg from "../../assets/breadcrumb.png";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import VisaApp from '../../assets/visa-application.jpg'

function VisaService() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
          <h1 className="poppins-semibold text-6xl">Visa Service</h1>
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

      <div className="flex items-start gap-5 mt-20 mb-5 flex-wrap  mx-auto container md:flex-nowrap md:items-start md:gap-5 lg:flex-nowrap lg:items-start lg:gap-5">
  <div className="flex-1">
    <div className="sub-style">
      <h5 className="sub-title uppercase text-[#252B91] poppins-medium text-xl w-full lg:text-left">
        Visa Services
      </h5>
    </div>
    <div>
      <h1 className="poppins-semibold text-[#252B91] text-3xl w-full lg:text-6xl">
        Services Offered by MAITRI VISA AND TRAVEL SERVICES:
      </h1>
      <p className="w-full mt-3 md:text-center text-justify lg:text-left poppins-regular">
      At MAITRI VISA AND TRAVEL SERVICES, we strive to provide comprehensive and personalized services to meet all your visa and travel needs. Contact us today to learn more about how we can assist you with your travel plans.
      </p>
    </div>
  </div>
  <div className="flex-shrink-0">
    <img src={VisaApp} alt="" className="h-96 object-contain rounded-md" />
  </div>
</div>

{/* cards */}
      <div className=" ">
        <div className=" container  flex  flex-wrap gap-3 justify-items-center">
        {/* <div className=" feature p-3 md:p-3 lg:p-0">
        <Card className=" bg-slate-100 ">
          <h2 className="bg-slate-200 mx-auto py-5 px-6 rounded-md ">
            <FontAwesomeIcon
              icon={faPassport}
              className="text-6xl text-[#303F9F] font-bold text-center feature-icon"
            />
          </h2>
          <h5 className="text-2xl font-bold text-[#303F9F] text-center">
            Visa Assistance
          </h5>
          <div className="px-4">
            <ul className=" text-slate-700 list-disc">
              <li>Guidance on visa interview preparation</li>
              <li>Tracking visa application status</li>
            </ul>
           
          </div>
          {isOpen && (
              <div className="px-4">
                <ul className=" text-slate-700 list-disc">
                  <li>Consultation on visa requirements and eligibility</li>
                  <li>Assistance with visa application forms and documentation</li>
                </ul>
              </div>
            )}
          <button onClick={handleToggle} className="text-[#303F9F]">
            {isOpen ? "Close" : "Read More"}
          </button>
          
        </Card>
      </div> */}

        <div className="p-4 container border rounded-md bg-slate-200 max-w-xs">
         
            <h4 className="text-[#303F9F] text-2xl py-3  poppins-medium text-center">
           	Visa Consultancy Services
            </h4>
        
          <div className="px-4">
            <ul className="mb-4 text-slate-700 list-disc">
              <li>Expert guidance</li>
              <li>Compliant assistance</li>
              <li>Preparation support</li>
              <li>Efficient tracking</li>
            </ul>
          </div>
        </div>


        <div className=" container p-4 border rounded-md  bg-slate-200 max-w-xs">
          
            <h4 class="text-[#303F9F] text-2xl py-3 poppins-medium">
              Travel Services
            </h4>
          
          <div className="px-4">
            <ul className="mb-4 text-slate-700 list-disc">
              <li>Flight bookings</li>
              <li>Travel insurance</li>
              <li>Airport transfers</li>
              <li>Hotel reservations</li>
              <li>Group travel arrangements</li>
              <li>Customized travel itineraries</li>
              <li>Travel advisory and assistance</li>
            </ul>
          </div>
        </div>


        <div className="container p-4 border rounded-md  bg-slate-200 max-w-xs">
          <a href="#">
            <h4 class="text-[#303F9F] text-2xl py-3 poppins-medium">
              Travel Packages
            </h4>
          </a>
          <div className="px-4">
            <ul className="mb-4 text-slate-700 list-disc">
              <li> Honeymoon packages</li>
              <li> Corporate travel packages</li>
              <li>Adventure travel packages</li>
              <li>Religious and spiritual travel packages</li>
              <li>Tailored travel packages for individuals, families, and groups</li>
            </ul>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default VisaService;
