import React from "react";
import "../../App.css";
import { Carousel } from "flowbite-react";
  import { Button, Card } from "flowbite-react";
import CarouselImg1 from "../../assets/carousel-1.jpg";
import CarouselImg2 from "../../assets/carousel-2.jpg";
import Aboutimg1 from "../../assets/about-2.png";
import Aboutimg2 from "../../assets/about-3.jpg"; 
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
import { HiCheckCircle } from "react-icons/hi";
import { List } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import Client from './Client.jsx'
import VisaCategory from '../VisaServices/visaCat.jsx'
import SecAbout from './Secabout.jsx'
import Micepng from '../../assets/mice.png'
import Holiday from '../../assets/Holiday.png'


function Home() {
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
        
        <h1 className="poppins-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
        Experience Hassle-Free Travel with us
        </h1>
        <p className="poppins-regular text-white md:text-lg lg:text-xl xl:text-2xl w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 text-center mx-auto mt-3">
        10+ years of experience 
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
        <h1 className="poppins-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
        Discover Your Dream Destinations with MVTS India Assistance
        </h1>
        <p className="poppins-regular text-white md:text-lg lg:text-xl xl:text-2xl w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 text-center mx-auto mt-3">
        Your Trusted Partner for Visa Solutions and Travel
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
            MAITRI VISA AND TRAVEL SERVICES
            </h2>
            <p className="poppins-regular mt-5 text-justify lg:text-left">
            We excel in offering thorough visa support and travel solutions to both individuals and businesses. Committed to delivering excellence and ensuring customer satisfaction, we focus on streamlining the visa application procedure and enabling effortless travel experiences for our clientele.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-3">
              <div className="flex justify-center items-start gap-3">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-5xl text-[#252B91]"
                />
               <div>
               <h4 className="poppins-medium text-xl text-[#252B91] ">
                VISA Services
                </h4>
                <p className="poppins-regular">The MVTS Visa Program is designed to make the process of obtaining a travel visa less of a hassle for business travelers.</p>
               </div>
              </div>
              <div className="flex justify-center items-start gap-3">
                
              <FontAwesomeIcon icon={faPlaneUp} className="text-5xl text-[#252B91]" />
                 
               
               <div>
               <h4 className="poppins-medium text-xl text-[#252B91] ">
                MICE
                </h4>
                <p className="poppins-regular">MICE is an acronym that stands for Meetings, Incentives, Conferences and Events.</p>
               </div>
              </div>
              <div className="flex justify-center items-start gap-3">
              <FontAwesomeIcon
                    icon={faTicket}
                    className="text-4xl text-[#252B91] md:text-5xl lg:text-5xl"
                  />
                <div>
                <h4 className="poppins-medium text-xl text-[#252B91] ">
                Air Tickets
                </h4>
                <p className="poppins-regular">When it comes to travelling, the fastest and the most convenient way is air travel.</p>
                </div>
                
              </div>
              <div className="flex justify-center items-start gap-3">
              <img src={Holiday} alt=""  className=" h-12 text-[#252B91]" />
               <div>
               <h4 className="poppins-medium text-xl text-[#252B91] ">
                Holiday Packages
                </h4>
                <p className="poppins-regular">Holiday tour can be of great enjoyment with us. Going to the holidays with your loved ones or family has its special importance.</p>
               </div>
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
                  10
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
                      Free: +91 9896974869
                    </p>
                  </div>
                </div>
          </div>
        </div>
      </div>

      {/* second About */}

<SecAbout/>
     

      {/* catogries */}

      <VisaCategory/>

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
          
 
   <div className="flex flex-col items-center gap-6 mt-20">
   <div className="flex flex-wrap  justify-center gap-6 md:flex-wrap lg:flex-nowrap  md:justify-between w-full">
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className="w-[300px] h-[300px] flex flex-col justify-between items-center text-center  bg-slate-100 feature-content">
                <h2 className="text-center mx-auto py-7 px-6 rounded-md ">
                <FontAwesomeIcon icon={faUserTie} 
                className="text-6xl text-[#303F9F] font-bold feature-icon"
                />
                </h2>
                <p className="poppins-medium text-md ">
                	A decade-plus of professional experience collaborating with an Embassy/High Commission.
                </p>
              </Card>
            </div>
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className="w-[300px] h-[300px] flex flex-col justify-between items-center text-center  bg-slate-100 feature-content">
                <h2 className="text-center mx-auto py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                     icon={faTicket}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <p className=" poppins-medium text-md ">
                10+ years of outstanding performance in consultancy services.
                </p>
              </Card>
            </div>
            <div className="feature p-3 md:p-3 lg:p-0 ">
              <Card className="w-[300px] h-[300px] flex flex-col justify-between items-center text-center  bg-slate-100 feature-content">
                <h2 className="text-center mx-auto -mt-10 py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <p className="poppins-medium text-md ">
                30,000+ Satisfied Customer
                </p>
              </Card>
            </div>
            
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className=" w-[300px] h-[300px] flex flex-col justify-between items-center text-center  bg-slate-100 feature-content">
                <h2 className="text-center mx-auto py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faCcVisa}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <p className="poppins-medium text-md ">
                	Exceptional expertise and comprehension of visa rules and regulations.
                </p>
              </Card>
            </div>
            </div>
            <div className="flex justify-center gap-6 w-full flex-wrap  md:flex-wrap lg:flex-nowrap max-w-4xl">
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className=" w-[300px] h-[300px] flex flex-col justify-between items-center text-center  bg-slate-100 feature-content">
                <h2 className="text-center mx-auto py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faPassport}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <p className="poppins-medium text-md ">
                High standards of personal and professional integrity.
                </p>
              </Card>
            </div>
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className=" w-[300px] h-[300px] flex flex-col justify-between items-center text-center  bg-slate-100 feature-content">
                <h2 className="text-center mx-auto py-5 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <p className="poppins-medium text-md ">
              	Unbiased, Honest, and High-Quality Guidance.
                </p>
              </Card>
            </div>
            <div className="feature p-3 md:p-3 lg:p-0">
              <Card className=" w-[300px] h-[300px] flex flex-col justify-between items-center text-center  bg-slate-100 feature-content">
                <h2 className="text-center mx-auto py-7 px-6 rounded-md ">
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="text-6xl text-[#303F9F] font-bold feature-icon"
                  />
                </h2>
                <p className="poppins-medium text-md ">
                A personalized and dedicated approach focused on the client's needs.
                </p>
              </Card>
            </div>
            </div>
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

    <Client/>

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

      {/* news latter */}

    <section>
      <div className="container mt-10">
          <div>
            <div className="flex justify-center items-center border border-black h-52">
              <p className="w-1/2">Secure your visa through a highly reputable Visa & Immigration consultancy. Our dedicated and experienced team at Visa Consultancy is committed to helping you achieve your dream destination.</p>
              <form className="flex justify-center items-center" >
                <input type="email" className="w-96 rounded-md" placeholder="Enter Email Address " />
                <button><FontAwesomeIcon icon={faPaperPlane} className="text-3xl text-white bg-[#4CAF50] p-2 rounded-md" /></button>
              </form>
            </div>
          </div>
      </div>
    </section>

    </>
  );
}

export default Home;
