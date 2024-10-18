import React from "react";
import "../../App.css";
import { Carousel } from "flowbite-react";
import CounterUp from "./Counter.jsx";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/css/navigation';
import { Button, Card } from "flowbite-react";
import CarouselImg1 from "../../assets/carousel-1.jpg";
import CarouselImg2 from "../../assets/carousel-2.jpg";
import Aboutimg1 from "../../assets/about-2.png";
import Aboutimg2 from "../../assets/about-3.jpg";
import BackgroundImg from "../../assets/breadcrumb.png";
import serviceImg1 from "../../assets/service-1.jpg";
import serviceImg2 from "../../assets/service-2.jpg";
import serviceImg3 from "../../assets/service-3.jpg";
import Country1 from "../../assets/country-1.jpg";
import Country2 from "../../assets/country-2.jpg";
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
import officeAus from "../../assets/office-2.jpg";
import officeCanda from "../../assets/office-1.jpg";
import officeUnited from "../../assets/office-3.jpg";
import officeIndia from "../../assets/office-4.jpg";
import testimonial1 from "../../assets/testimonial-1.jpg";
import testimonial2 from "../../assets/testimonial-2.jpg";
import testimonial3 from "../../assets/testimonial-3.jpg";
import { HiCheckCircle } from "react-icons/hi";
import { List } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";



function Home() {
  const swiperParams = {
    spaceBetween: 30,
    speed: 1000, // Enable navigation buttons
    modules: [], // Adjust the spacing between slides
    breakpoints: {
      320: {
        slidesPerView: 1,  // Mobile: 1 slide per view
        spaceBetween: 10,  // Less space between slides
      },
      640: {
        slidesPerView: 2,  // Tablet: 2 slides per view
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,  // Desktop: 3 slides per view
        spaceBetween: 30,
      },
    },
  };
  const swiperRef = useRef(null); 
  return (
    <>
      {/* carousel */}

      <div className="h-96 w-full md:h-96 lg:h-screen xl:h-screen 2xl:h-96 overflow-hidden"> {/* w-full instead of w-screen */}
  <Carousel
    onSlideChange={(index) => console.log("")}
    className="carousel-button"
    theme={{
      root: {
        base: "relative h-full w-full",
        leftControl:
          "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
        rightControl:
          "absolute right-0 top-0 flex h-full items-center justify-center px-6 focus:outline-none",
      },
      indicators: {
        active: {
          off: "bg-[#252B91] hover:bg-[#252B91] dark:bg-[#252B91]",
          on: "bg-[#252B91] dark:bg-[#252B91]",
        },
        base: "h-3 w-3 rounded-full",
        wrapper:
          "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
      },
      item: {
        base: "flex items-center justify-center h-full",
        wrapper: {
          off: "w-full flex-shrink-0 transform cursor-default snap-center",
          on: "w-full flex-shrink-0 transform cursor-grab snap-center",
        },
      },
      img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#252B91]/30 group-hover:bg-[#252B91] group-focus:outline-none group-focus:ring-4 group-focus:ring-[#252B91] dark:bg-[#252B91]/30 dark:group-hover:bg-[#252B91]/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-white dark:bg-[#252B91] sm:h-6 sm:w-6",
      },
      scrollContainer: {
        base: "flex h-full snap-mandatory overflow-hidden snap-x scroll-smooth rounded-none", 
        snap: "snap-x",
      },
    }}
  >
    {/* Slide 1 */}
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src={CarouselImg1}
        alt="Slide 1"
        className="brightness-50 w-full h-full object-cover"
      />
      <div className="absolute text-center md:text-lg lg:text-xl">
        <span className="poppins-medium text-white text-md mb-3 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
          Solution for all types of visa
        </span>
        <h1 className="poppins-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
          Immigration Process <br /> Starts Here!
        </h1>
        <p className="poppins-regular text-white md:text-lg lg:text-xl xl:text-2xl w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 text-center mx-auto mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s.
        </p>
        <button className="bg-[#4CAF50] hover:bg-[#303F9F] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-white poppins-regular rounded-full mt-4">
          More Details
        </button>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src={CarouselImg2}
        alt="Slide 2"
        className="brightness-50 w-full h-full object-cover"
      />
      <div className="absolute text-center">
        <span className="poppins-medium text-white text-md mb-3 sm:text-lg md:text-2xl lg:text-4xl xl:text-4xl">
          Solution for all types of visa
        </span>
        <h1 className="poppins-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
          Best Visa <br /> Immigration Services
        </h1>
        <p className="poppins-regular text-white md:text-lg lg:text-xl xl:text-2xl w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 text-center mx-auto mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s.
        </p>
        <button className="bg-[#4CAF50] hover:bg-[#303F9F] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-white poppins-regular rounded-full mt-4">
          More Details
        </button>
      </div>
    </div>
  </Carousel>
</div>

  



      {/* About the company */}

      <div className="container mx-auto p-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mx-auto  rounded-xl border-b-[#003A66] overflow-hidden">
            <div className="relative bg-slate-100">
              <img src={Aboutimg1} alt="" />
              <div className="absolute  w-full h-full bg-slate-100 ">
                <img src={Aboutimg2} alt="" className="rounded-t-full" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-[#252B91] text-xl  uppercase poppins-medium text-center lg:text-left ">
              About the company
            </h2>
            <h2 className="text-[#252B91] capitalize text-5xl poppins-medium mt-2 text-center lg:text-left">
              We’re Trusted Immigration Consultant Agency.
            </h2>
            <p className="poppins-regular text-slate-500 mt-5 text-justify lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              architecto consectetur iusto perferendis blanditiis assumenda
              dignissimos, commodi fuga culpa earum explicabo libero sint est
              mollitia saepe! Sequi asperiores rerum nemo!
            </p>
            <div className="flex justify-start items-center mt-5 flex-wrap gap-3 md:flex-nowrap lg:flex-nowrap md:justify-center lg:justify-center xl:justify-center">
              <div className="flex justify-center items-center gap-3">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-5xl text-[#252B91]"
                />
                <h4 className="poppins-medium text-xl text-[#252B91] ">
                  Best Immigration Resources
                </h4>
              </div>
              <div className="flex justify-center items-center gap-3">
                <FontAwesomeIcon
                  icon={faPassport}
                  className="text-5xl text-[#252B91]"
                />
                <h4 className="poppins-medium text-xl text-[#252B91] ">
                  Return Visas Availabile
                </h4>
              </div>
            </div>
            <div className="flex justify-start items-start md:justify-center lg:justify-start gap-5 mt-5">
              <div className="flex justify-center items-center flex-col md:flex-row lg:flex-col bg-slate-100 rounded-xl">
                <h2>
                  <FontAwesomeIcon
                    icon={faTicket}
                    className="text-4xl text-[#252B91] md:text-5xl lg:text-7xl"
                  />
                </h2>
                <h2 className="poppins-bold text-[#252B91] text-3xl md:text-6xl lg:text-6xl">
                  34
                </h2>
                <p className="poppins-regular text-slate-500 w-1/2 text-center text-sm">
                  Years of Experience
                </p>
              </div>
              <div>
                <List>
                  <List className="text-[#252B91] flex items-start md:items-center lg:items-center poppins-medium">
                    <HiCheckCircle className="me-2 h-3.5 w-3.5 flex-shrink-0 text-[#252B91]" />
                    Offer 100 % Genuine Assistance
                  </List>
                  <List className="text-[#252B91] flex items-start md:items-center lg:items-center poppins-medium">
                    <HiCheckCircle className="me-2 h-3.5 w-3.5 flex-shrink-0 text-[#252B91]" />
                    It’s Faster & Reliable Execution
                  </List>
                  <List className="text-[#252B91] flex  items-start md:items-center lg:items-center poppins-medium">
                    <HiCheckCircle className="me-2 h-3.5 w-3.5 flex-shrink-0 text-[#252B91]" />
                    Accurate & Expert Advice
                  </List>
                </List>
              </div>
            </div>
            <div className="flex justify-center mt-3  lg:-mt-10  md:justify-center lg:justify-center gap-5">
                  <div className="flex justify-start items-start">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-3xl text-[#252B91] md:text-5xl lg:text-5xl shake-icon "
                    />
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="text-[#303F9F]"
                    />
                  </div>
                  <div>
                    <p>Have any questions?</p>
                    <p className="poppins-semibold text-sm md:text-lg lg:text-lg text-[#252B91]">
                      Free: +0123 456 7890
                    </p>
                  </div>
                </div>
          </div>
        </div>
      </div>

      {/* second About */}


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

      {/* catogries */}

      <div className="container service overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5">
            <div className="sub-style">
              <h5 className="sub-title uppercase text-[#252B91] poppins-medium text-xl  lg:text-center">
                Visa Categories
              </h5>
            </div>
            <h1 className="poppins-semibold text-[#252B91] text-3xl  w-11/12 mx-auto text-center  lg:text-center  lg:text-6xl">
              Enabling Your Immigration Successfully
            </h1>
            <p className="mx-auto w-3/4 mt-3   md:text-center text-justify lg:text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
                          className=" text-white px-3 poppins-medium text-3xl  mb-0"
                        >
                          Job Visa
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
                          Job Visa
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-slate-500">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia fugit dolores nesciunt adipisci
                          obcaecati veritatis cum, ratione aspernatur autem
                          velit.
                        </p>
                        <a
                          className="text-white bg-[#4CAF50] rounded-full py-3 px-5"
                          href="#"
                        >
                          Explore More
                        </a>
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
                          className=" text-white mb-0 poppins-medium text-3xl"
                        >
                          Business Visa
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
                          Business Visa
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-slate-500">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia fugit dolores nesciunt adipisci
                          obcaecati veritatis cum, ratione aspernatur autem
                          velit.
                        </p>
                        <a
                          className=" text-white bg-[#4CAF50] rounded-full py-3 px-5"
                          href="#"
                        >
                          Explore More
                        </a>
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
                          className=" text-white mb-0 poppins-medium text-3xl"
                        >
                          Diplomatic Visa
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
                        <h4 class="text-white mb-4 py-3 text-xl poppins-medium">
                          Diplomatic Visa
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-slate-500">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia fugit dolores nesciunt adipisci
                          obcaecati veritatis cum, ratione aspernatur autem
                          velit.
                        </p>
                        <a
                          className="text-white bg-[#4CAF50] rounded-full py-3 px-5"
                          href="#"
                        >
                          Explore More
                        </a>
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
                          className=" text-white mb-0 poppins-medium text-3xl"
                        >
                          Residence Visa
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
                        <h4 class="text-white mb-4 py-3 poppins-medium text-xl">
                          Residence Visa
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-slate-500">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia fugit dolores nesciunt adipisci
                          obcaecati veritatis cum, ratione aspernatur autem
                          velit.
                        </p>
                        <a
                          className="text-white bg-[#4CAF50] rounded-full py-3 px-5"
                          href="#"
                        >
                          Explore More
                        </a>
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
                          className=" text-white mb-0 poppins-medium text-3xl"
                        >
                          Tourist Visa
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
                        <h4 class="text-white mb-4 py-3 text-xl poppins-medium">
                          Tourist Visa
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-slate-500">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia fugit dolores nesciunt adipisci
                          obcaecati veritatis cum, ratione aspernatur autem
                          velit.
                        </p>
                        <a
                          className="text-white bg-[#4CAF50] rounded-full py-3 px-5"
                          href="#"
                        >
                          Explore More
                        </a>
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
                          className=" text-white poppins-medium p-3 text-3xl "
                        >
                          Student Visa
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
                        <h4 class="text-white mb-4 py-3 text-xl poppins-medium">
                          Student Visa
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-slate-500">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia fugit dolores nesciunt adipisci
                          obcaecati veritatis cum, ratione aspernatur autem
                          velit.
                        </p>
                        <a
                          className="text-white bg-[#4CAF50] rounded-full py-3 px-5"
                          href="#"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}

      <section className="mt-24">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="uppercase text-[#303F9F] poppins-medium text-xl text-center">
              Why Choose Us
            </span>
            <h2 className=" poppins-semibold text-[#303F9F] text-3xl text-center lg:text-6xl">
              Offer Tailor Made Services That Our <br /> Client Requires
            </h2>
            <p className=" mx-auto w-3/4 mt-3 text-justify lg:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat
            </p>
          </div>

          <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 mt-10">
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className=" text-center  bg-slate-100 feature-content">
                <h2 className="bg-slate-200 mx-auto py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <h5 className="text-2xl font-bold text-[#303F9F]">
                  Cost-Effective
                </h5>
                <p className="font-normal ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className=" text-[#303F9F]">Read More</button>
              </Card>
            </div>
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className=" text-center  bg-slate-100 feature-content ">
                <h2 className="text-[#303F9F] text-6xl flex justify-center items-center bg-slate-200 mx-auto py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faCcVisa}
                    className="feature-icon text-[#303F9F]"
                  />
                </h2>
                <h5 className="text-2xl font-bold text-[#303F9F]">
                  Visa Assistance
                </h5>
                <p className="font-normal ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className=" text-[#303F9F]">Read More</button>
              </Card>
            </div>
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className=" text-center  bg-slate-100  feature-content">
                <h2 className="bg-slate-200 mx-auto py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faPassport}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <h5 className="text-2xl font-bold text-[#303F9F]">
                  Faster Processing
                </h5>
                <p className="font-normal ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className=" text-[#303F9F]">Read More</button>
              </Card>
            </div>
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className="text-center  bg-slate-100 feature-content ">
                <h2 className="bg-slate-200 mx-auto py-5 px-6 rounded-md">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <h5 className="text-2xl font-bold text-[#303F9F]">
                  Direct Interviews
                </h5>
                <p className="font-normal ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className=" text-[#303F9F]">Read More</button>
              </Card>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#4CAF50] text-white hover:bg-[#303F9F] poppins-medium px-5 py-3 mt-5 rounded-full">
              {" "}
              More Feature
            </button>
          </div>
        </div>
      </section>

      {/* Countries  */}

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


      {/* Owl carousel */}

      <div className="container mx-auto mt-24">
        <div className="text-center">
          <span className="uppercase text-[#303F9F] poppins-medium text-xl">
            OUR CLIENTS RIVIEWS
          </span>
          <h2 className=" poppins-semibold text-[#303F9F] text-3xl text-center lg:text-6xl">
            What Our Clients Say
          </h2>
          <p className=" mx-auto w-3/4 mt-3 text-justify lg:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat
          </p>
        </div>
        <Swiper {...swiperParams} className="mt-20 mb-10">
    <SwiperSlide>
      <div className="item testimonial-item p-3 md:p-3 lg:p-0">
            <div className="p-4 mb-5 bg-slate-100 rounded-xl">
              <p className="text-lg mb-0 poppins-regular text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitati eiusmod tempor
                incididunt.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
              </div>
            </div>
            <div className="flex">
              <div className="rounded-full w-24 h-24 me-4">
                <img className="rounded-full" src={testimonial3} alt="img" />
              </div>
              <div className="my-auto text-slate-950 poppins-regular ">
                <h5>Person Name</h5>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>
          </SwiperSlide>
    <SwiperSlide>
      <div className=" item testimonial-item p-3 md:p-3 lg:p-0">
            <div className="p-4 mb-5 bg-slate-100 rounded-xl   w-full">
              <p className="text-lg mb-0 poppins-regular text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitati eiusmod tempor
                incididunt.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
              </div>
            </div>
            <div className="flex">
              <div className="rounded-full w-24 h-24 me-4">
                <img className="rounded-full" src={testimonial1} alt="img" />
              </div>
              <div className="my-auto poppins-regular text-black">
                <h5>Person Name</h5>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>
          </SwiperSlide>
    <SwiperSlide>
      <div className=" item testimonial-item p-3 md:p-3 lg:p-0">
            <div className="p-4 mb-5 bg-slate-100 rounded-xl">
              <p className="text-lg mb-0 poppins-regular text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitati eiusmod tempor
                incididunt.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
                <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
              </div>
            </div>
            <div className="flex">
              <div className="rounded-full w-24 h-24 me-4">
                <img className="rounded-full" src={testimonial2} alt="img" />
              </div>
              <div className="my-auto poppins-regular text-black">
                <h5>Person Name</h5>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div></SwiperSlide>
  </Swiper>
      </div>

      {/* Traning */}


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
            <p className="mx-auto w-full md:w-3/4  mt-3 text-justify lg:text-center text-base">
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

      

      {/* offices */}

      <section className="mt-20">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="uppercase text-[#303F9F] poppins-medium text-xl">
              Worlwide Offices
            </span>
            <h2 className=" poppins-semibold text-[#303F9F] text-6xl text-center">
              Explore Our Office Worldwide
            </h2>
            <p className=" mx-auto w-3/4 mt-3 text-justify lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat
            </p>
          </div>
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
              <div className="office p-3 md:p-3 lg:p-0">
                <Card className=" text-center  office-item">
                  <img
                    src={officeAus}
                    alt=""
                    className="office-img rounded-md"
                  />
                  <h5 className="text-2xl  text-[#303F9F] poppins-semibold">
                    Australia
                  </h5>
                  <p className="text-[#303F9F] poppins-medium text-xl">
                    +123.456.789
                  </p>
                  <p className="poppins-medium text-xl text-slate-500 hover:text-[#303F9F]">
                    travisa@company.com
                  </p>
                  <p className="poppins-regular  text-slate-500 ">
                    123, First Floor, 123 St Roots Terrace, Los Angeles 90010
                    Unitd States of America
                  </p>
                </Card>
              </div>
              <div className="office p-3 md:p-3 lg:p-0">
                <Card className="text-center office-item">
                  <img
                    src={officeCanda}
                    alt=""
                    className="office-img rounded-md"
                  />
                  <h5 className="text-2xl text-[#303F9F] poppins-semibold">
                    Canada
                  </h5>
                  <p className="text-[#303F9F] poppins-medium text-xl">
                    +123.456.789
                  </p>
                  <p className="text-xl poppins-medium text-slate-500 hover:text-[#303F9F]">
                    info@company.com
                  </p>
                  <p className="text-slate-500 poppins-regular">
                    123, First Floor, 123 St Roots Terrace, Los Angeles 90010
                    Unitd States of America
                  </p>
                </Card>
              </div>
              <div className="office p-3 md:p-3 lg:p-0">
                <Card className="text-center office-item ">
                  <img
                    src={officeUnited}
                    alt=""
                    className="office-img rounded-md"
                  />
                  <h5 className="text-2xl text-[#303F9F] poppins-semibold">
                    United Kingdom
                  </h5>
                  <p className="text-[#303F9F] poppins-medium text-xl">
                    +123.456.789
                  </p>
                  <p className="text-slate-500 poppins-medium text-xl hover:text-[#303F9F]">
                    info@company.com
                  </p>
                  <p className="text-slate-500 poppins-regular">
                    123, First Floor, 123 St Roots Terrace, Los Angeles 90010
                    Unitd States of America
                  </p>
                </Card>
              </div>
              <div className="office p-3 md:p-3 lg:p-0">
                <Card className="text-center office-item">
                  <img
                    src={officeIndia}
                    alt=""
                    className="office-img rounded-md"
                  />
                  <h5 className="text-2xl text-[#303F9F] poppins-semibold ">
                    India
                  </h5>
                  <p className="text-[#303F9F] poppins-medium text-xl">
                    +123.456.789
                  </p>
                  <p className="text-slate-500 poppins-medium text-xl hover:text-[#303F9F]">
                    info@company.com
                  </p>
                  <p className="text-slate-500 poppins-regular">
                    123, First Floor, 123 St Roots Terrace, Los Angeles 90010
                    Unitd States of America
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
