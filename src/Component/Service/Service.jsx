import React from "react";
import "../../App.css";
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
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import CounterUp from '../Home/Counter.jsx';
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import serviceImg1 from "../../assets/service-1.jpg";
import serviceImg2 from "../../assets/service-2.jpg";
import serviceImg3 from "../../assets/service-3.jpg";
import Country1 from "../../assets/country-1.jpg";
import Country2 from "../../assets/country-2.jpg";

function Service () {
  return (
    <>

  <div>
  <div className="relative">
    <img src={BackgroundImg} alt="" style={{ height: '50vh', width: '100%', opacity: 0.5 }} className="object-cover" />
    <div className="absolute top-0 left-0 w-full h-full bg-[#303F9F] opacity-85"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center">
      <h1 className="poppins-semibold text-6xl">Our Service</h1>
      <Breadcrumb aria-label="Default breadcrumb example" className="mt-3 text-[#4CAF50]"
  theme={{
    root: {
      base: "",
      list: "flex items-center"
    },
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-4 w-4 text-white group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-sm font-medium text-white dark:test-white",
        on: "flex items-center text-sm font-medium text-white hover:text-[#4CAF50]",
      },
      icon: "mr-2 h-4 w-4"
    }
  }}>
  <Breadcrumb.Item href="#" icon={HiHome} className="text-white">
    Home
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#" className="text-[#4CAF50]">
    Service
  </Breadcrumb.Item>
</Breadcrumb>


    </div>
  </div>
</div>

{/* visa category */}
<div className="container service overflow-hidden mt-10">
        <div className="container py-5">
          <div className="section-title text-center mb-5">
            <div className="sub-style">
              <h5 className="sub-title uppercase text-[#252B91] poppins-medium text-xl  lg:text-center">
                Visa Services
              </h5>
            </div>
            <h1 className="poppins-semibold text-[#252B91] text-3xl  w-11/12 mx-auto text-center  lg:text-center  lg:text-6xl">
            Services Offered by MAITRI VISA AND TRAVEL SERVICES:
            </h1>
            <p className="mx-auto w-3/4 mt-3  md:text-center text-justify lg:text-center ">
            At MAITRI VISA AND TRAVEL SERVICES, we strive to provide comprehensive and personalized services to meet all your visa and travel needs. Contact us today to learn more about how we can assist you with your travel plans.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner flex flex-col item-center">
                  <div className="service-img">
                    <img src={serviceImg1} alt="Image" className="p-3 rounded-md  md:p-3 lg:p-0" />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] rounded p-3 mx-5 mb-4 inline-block">
                        <a
                          href="#"
                          className=" text-white px-3 poppins-medium text-xl  mb-0"
                        >
                          Visa Assistance
                        </a>
                      </div>
                      <a
                        className=" block  text-[#252B91] rounded-full py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 className="text-white mb-4 py-3 text-xl poppins-medium">
                        Visa Assistance
                        </h4>
                      </a>
                      <div className="px-4">
                        <ul className="mb-4 text-slate-300 list-disc">
                          <li>Consultation on visa requirements and eligibility</li>
                          <li>Assistance with visa application forms and documentation</li>
                          <li>Guidance on visa interview preparation</li>
                          <li>Tracking visa application status</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={serviceImg2}
                      className="p-3 rounded-md  md:p-3 lg:p-0"
                      alt="Image "
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] text-center rounded p-3 mx-5 mb-4 inline-block">
                        <a
                          href="#"
                          className=" text-white mb-0 poppins-medium text-xl"
                        >
                          Visa Types
                        </a>
                      </div>
                      <a
                        className=" block text-[#252B91] py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 class="text-white mb-4 py-3 text-xl poppins-medium">
                        Visa Types
                        </h4>
                      </a>
                      <div className="px-4">
                      <ul className="mb-4 text-slate-300 list-disc">
                          <li> Tourist visas</li>
                          <li>Business visas</li>
                          <li>Student visas</li>
                          <li>Work visas</li>
                          <li>Transit visas</li>
                          <li>Immigration visas</li>
                          <li>Family and spouse visas</li>
                          <li>Special category visas (e.g., diplomatic visas)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={serviceImg3}
                      className="p-3 rounded-md  md:p-3 lg:p-0"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] text-center rounded p-3 mx-5 mb-4 inline-block">
                        <a
                          href="#"
                          className=" text-white mb-0 poppins-medium text-xl"
                        >
                          Travel Services
                        </a>
                      </div>
                      <a
                        className=" block  text-[#252B91]  py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 class="text-white mb-4 py-3 poppins-medium">
                        Travel Services
                        </h4>
                      </a>
                      <div className="px-4">
                      <ul className="mb-4 text-slate-300 list-disc">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={serviceImg1}
                      className="p-3 rounded-md  md:p-3 lg:p-0"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] inline-block text-center rounded p-3 mx-5 mb-4">
                        <a
                          href="#"
                          className=" text-white mb-0 poppins-medium text-xl"
                        >
                         Passport Services
                        </a>
                      </div>
                      <a
                        className=" block  text-[#252B91]  py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 class="text-white mb-4 py-3 poppins-medium">
                          Residence Visa
                        </h4>
                      </a>
                      <div className="px-4">
                      <ul className="mb-4 text-slate-300 list-disc">
                          <li>Passport renewal services</li>
                          <li>Passport application assistance</li>
                          <li>Lost or damaged passport assistance</li>
                          <li>Name or address change on passport</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={serviceImg2}
                      className="p-3 rounded-md  md:p-3 lg:p-0"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] inline-block text-center rounded p-3 mx-5 mb-4">
                        <a
                          href="#"
                          className=" text-white mb-0 poppins-medium text-xl"
                        >
                        Document Attestation
                        </a>
                      </div>
                      <a
                        className=" block  text-[#252B91]  py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 class="text-white mb-4 py-3 poppins-medium">
                        Document Attestation
                        </h4>
                      </a>
                      <div className="px-4">
                      <ul className="mb-4 text-slate-300 list-disc">
                          <li>Notary services</li>
                          <li>Apostille services</li>
                          <li>Document legalization</li> 
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={serviceImg3}
                     className="p-3 rounded-md  md:p-3 lg:p-0"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] text-center rounded p-3 mx-auto   mb-4 inline-block whitespace-nowrap">
                        <a
                          href="#"
                          className=" text-white poppins-medium  text-xl "
                        >
                          Immigration Consultation
                        </a>
                      </div>
                      <a
                        className=" block  text-[#252B91]  py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 class="text-white mb-4 py-3 poppins-medium">
                          Student Visa
                        </h4>
                      </a>
                      <div className="px-4">
                        <ul className="mb-4 text-slate-300 list-disc">
                         <li>Immigration document preparation</li>
                         <li>Assistance with immigration applications</li>
                         <li>Consultation on immigration policies and procedures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={serviceImg3}
                     className="p-3 rounded-md  md:p-3 lg:p-0"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] text-center rounded p-3 mx-auto   mb-4 inline-block whitespace-nowrap">
                        <a
                          href="#"
                          className=" text-white poppins-medium  text-xl "
                        >
                          Travel Packages
                        </a>
                      </div>
                      <a
                        className=" block  text-[#252B91]  py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 class="text-white mb-4 py-3 poppins-medium">
                        Travel Packages
                        </h4>
                      </a>
                      <div className="px-4">
                        <ul className="mb-4 text-slate-300 list-disc">
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
              </div>
            </div>
            <div className="lg :grid-cols-6 xl:grid-cols-4">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={serviceImg3}
                     className="p-3 rounded-md  md:p-3 lg:p-0"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-[#252B91] text-center rounded p-3 mx-auto   mb-4 inline-block whitespace-nowrap">
                        <a
                          href="#"
                          className=" text-white poppins-medium  text-xl "
                        >
                          Additional Services
                        </a>
                      </div>
                      <a
                        className=" block  text-[#252B91]  py-3 px-5 mb-4"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 class="text-white mb-4 py-3 poppins-medium">
                        Additional Services
                        </h4>
                      </a>
                      <div className="px-4">
                        <ul className="mb-4 text-slate-300 list-disc">
                         <li>Translation services</li>
                         <li>Travel concierge services</li>
                         <li>Travel visa consultation and advisory</li>
                         <li>Travel health and vaccination advice</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* country */}

<section className="mt-24 country">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="uppercase text-[#303F9F] poppins-medium text-xl">
              COUNTRIES WE OFFER
            </span>
            <h2 className=" poppins-semibold text-[#303F9F] text-3xl text-center lg:text-6xl">
              Immigration & visa services <br />
              following Countries
            </h2>
            <p className=" mx-auto w-3/4 mt-3 text-justify lg:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat
            </p>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-16 lg:gap-10 mt-20">
            <div className="country-item ">
              <div className="rounded overflow-hidden">
                <img src={Country1} alt="" className="rounded-xl p-3 md:p-3 lg:p-0" />
                <div>
                  <img
                    src={Brazil}
                    alt=""
                    style={{
                      position: "absolute",
                      bottom: "80%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    className=" country-flag rounded-full outline outline-4 outline-white"
                  />
                </div>
              </div>

              <div className="country-name">
                <a
                  href="#"
                  className="text-white text-3xl poppins-medium hover:text-[#4CAF50] "
                >
                  Brazil
                </a>
              </div>
            </div>
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src={Country2} alt="" className="rounded  p-3 md:p-3 lg:p-0" />
              </div>
              <div>
                <img
                  src={India}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  className=" country-flag rounded-full outline outline-4 outline-white"
                />
              </div>
              <div className="country-name">
                <a
                  href="#"
                  className="text-white text-3xl poppins-medium hover:text-[#4CAF50] "
                >
                  India
                </a>
              </div>
            </div>
            <div className="country-item ">
              <div className="rounded overflow-hidden">
                <img src={Country3} alt="" className="rounded p-3 md:p-3 lg:p-0" />
              </div>
              <div>
                <img
                  src={Usa}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  className=" country-flag rounded-full outline outline-4 outline-white"
                />
              </div>
              <div className="country-name">
                <a
                  href="#"
                  className="text-white text-3xl poppins-medium hover:text-[#4CAF50] "
                >
                  NewYork
                </a>
              </div>
            </div>
            <div>
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <img src={Country4} alt="" className="rounded p-3 md:p-3 lg:p-0" />
                </div>
                <div>
                  <img
                    src={Itly}
                    alt=""
                    style={{
                      position: "absolute",
                      bottom: "80%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    className=" country-flag rounded-full outline outline-4 outline-white"
                  />
                </div>
                <div className="country-name">
                  <a
                    href="#"
                    className="text-white text-3xl poppins-medium hover:text-[#4CAF50]"
                  >
                    Italy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* sec about */}
<div className="sec-about min-h-screen flex justify-center items-center lg:mt-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-20 z-0 w-full px-4">
          {/* Card 1 */}
          <div className="flex items-center justify-center">
            <div className="counter">
              <div className="relative bg-white rounded-full shadow-lg w-40 h-40  md:w-48 md:h-48 flex flex-col items-center justify-center">
                <div className="mt-14 sm:mt-20 text-center">
                  <p className="text-[#252B91] font-bold uppercase poppins-regular text-xs sm:text-sm md:text-base">
                    VISA CATEGORIES
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-[#252B91] text-xl sm:text-3xl md:text-3xl font-bold counter-value">
                      <CounterUp end={31} duration={5000} />
                    </p>
                    <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                      +
                    </p>
                  </div>
                </div>
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#252B91] rounded-t-lg w-40 h-20  md:w-48 md:h-24 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPassport}
                    className="text-white text-5xl  md:text-6xl counter-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-center">
            <div className="counter">
              <div className="relative bg-white rounded-full shadow-lg w-40 h-40 sm:w-36 sm:h-36 md:w-48 md:h-48 flex flex-col items-center justify-center">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#252B91] rounded-t-lg w-40 h-20 sm:w-36 sm:h-18 md:w-48 md:h-24 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-white text-5xl sm:text-4xl md:text-6xl counter-icon"
                  />
                </div>
                <div className="mt-14 sm:mt-20 text-center">
                  <p className="text-[#252B91] font-bold uppercase poppins-regular text-xs sm:text-sm md:text-base">
                    Team Members
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                      <CounterUp end={377} duration={5000} />
                    </p>
                    <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-center">
            <div className="counter">
              <div className="relative bg-white rounded-full shadow-lg w-40 h-40 sm:w-36 sm:h-36 md:w-48 md:h-48 flex flex-col items-center justify-center">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#252B91] rounded-t-lg w-40 h-20 sm:w-36 sm:h-18 md:w-48 md:h-24 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="text-white text-5xl sm:text-4xl md:text-6xl counter-icon"
                  />
                </div>
                <div className="mt-14 sm:mt-20 text-center">
                  <p className="text-[#252B91] font-bold uppercase poppins-regular text-xs sm:text-sm md:text-base">
                    Visa Process
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                      <CounterUp end={4.9} duration={5000} />
                    </p>
                    <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                      K
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-center">
            <div className="counter">
              <div className="relative bg-white rounded-full shadow-lg w-40 h-40 sm:w-36 sm:h-36 md:w-48 md:h-48 flex flex-col items-center justify-center">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#252B91] rounded-t-lg w-40 h-20 sm:w-36 sm:h-18 md:w-48 md:h-24 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="text-white text-5xl sm:text-4xl md:text-6xl counter-icon"
                  />
                </div>
                <div className="mt-14 sm:mt-20 text-center">
                  <p className="text-[#252B91] font-bold uppercase poppins-regular text-xs sm:text-sm md:text-base">
                    Success Rates
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                      <CounterUp end={98} duration={5000} />
                    </p>
                    <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                      %
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




{/* trainig */}

<div className="bg-[#F0F5FB] p-1">
         <section className="mx-4 my-10 lg:mx-24 lg:my-24 ">
        <div className="container mx-auto training">
          <div className="text-center">
            <span className="uppercase  text-[#303F9F] poppins-medium text-base lg:text-xl ">
              CHECK OUR TRAINING
            </span>
            <h2 className="poppins-semibold text-[#303F9F] text-2xl lg:text-4xl xl:text-6xl mt-4">
              Get the Best Coaching Service <br /> Training with Our Travisa
            </h2>
            <p className="mx-auto w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mt-3 text-justify lg:text-center text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10">
            {/* Training Card 1 */}
            <div className="training-item">
              <div className="relative training-inner">
                <img
                  src={Training}
                  alt="IELTS Coaching"
                  className="brightness-50 rounded-xl w-full h-96 md:h-full lg:h-full  object-cover"
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <h2 className="text-lg lg:text-xl poppins-semibold">IELTS</h2>
                  <h2 className="text-lg lg:text-xl poppins-semibold">
                    Coaching
                  </h2>
                </div>
              </div>
              <div className="training-content bg-[#303F9F] p-4 text-start rounded-b-xl">
                <a href="#">
                  <h4 className="text-white text-lg lg:text-xl poppins-medium">
                    IELTS Coaching
                  </h4>
                </a>
                <p className="text-slate-300 text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  className="text-white text-sm lg:text-base p-0 poppins-regular"
                  href="#"
                >
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>

            {/* Training Card 2 */}
            <div className="training-item">
              <div className="relative training-inner">
                <img
                  src={Training1}
                  alt="TOEFL Coaching"
                  className="brightness-50 rounded-xl w-full h-96 md:h-full lg:h-full  object-cover"
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <h2 className="text-lg lg:text-xl poppins-semibold">TOEFL</h2>
                  <h2 className="text-lg lg:text-xl poppins-semibold">
                    Coaching
                  </h2>
                </div>
              </div>
              <div className="training-content bg-[#303F9F] p-4 text-start rounded-b-xl">
                <a href="#">
                  <h4 className="text-white text-lg lg:text-xl poppins-medium">
                    TOEFL Coaching
                  </h4>
                </a>
                <p className="text-slate-300 text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  className="text-white text-sm lg:text-base p-0 poppins-regular"
                  href="#"
                >
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>

            {/* Training Card 3 */}
            <div className="training-item">
              <div className="relative training-inner">
                <img
                  src={Training2}
                  alt="PTE Coaching"
                  className="brightness-50 rounded-xl w-full h-96 md:h-full lg:h-full  object-cover"
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <h2 className="text-lg lg:text-xl poppins-semibold">PTE</h2>
                  <h2 className="text-lg lg:text-xl poppins-semibold">
                    Coaching
                  </h2>
                </div>
              </div>
              <div className="training-content bg-[#303F9F] p-4 text-start rounded-b-xl">
                <a href="#">
                  <h4 className="text-white text-lg lg:text-xl poppins-medium">
                    PTE Coaching
                  </h4>
                </a>
                <p className="text-slate-300 text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  className="text-white text-sm lg:text-base p-0 poppins-regular"
                  href="#"
                >
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>

            {/* Training Card 4 */}
            <div className="training-item">
              <div className="relative training-inner">
                <img
                  src={Training3}
                  alt="OET Coaching"
                  className="brightness-50 rounded-xl w-full h-96 md:h-full lg:h-full  object-cover"
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <h2 className="text-lg lg:text-xl poppins-semibold">OET</h2>
                  <h2 className="text-lg lg:text-xl poppins-semibold">
                    Coaching
                  </h2>
                </div>
              </div>
              <div className="training-content bg-[#303F9F] p-4 text-start rounded-b-xl">
                <a href="#">
                  <h4 className="text-white text-lg lg:text-xl poppins-medium">
                    OET Coaching
                  </h4>
                </a>
                <p className="text-slate-300 text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  className="text-white text-sm lg:text-base p-0 poppins-regular"
                  href="#"
                >
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-[#4CAF50] text-white hover:bg-[#303F9F] poppins-medium px-5 py-3 mt-5 rounded-full">
              View More
            </button>
          </div>
        </div>
      </section>
         </div>
    </>
  )
}

export default Service