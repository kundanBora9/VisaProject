import React from "react";
import "../../App.css";
import SecAbout from '../Home/Secabout.jsx'
import Aboutimg1 from "../../assets/about-2.png";
import Aboutimg2 from "../../assets/about-3.jpg";
import BackgroundImg from "../../assets/breadcrumb.png";
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
import { HiCheckCircle } from "react-icons/hi";
import { List } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CounterUp from '../Home/Counter.jsx';
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Holiday from '../../assets/Holiday.png'
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
  <div className="">
  <div className="relative">
    <img src={BackgroundImg} alt="" style={{ height: '50vh', width: '100%', opacity: 0.5 }} className="object-cover" />
    <div className="absolute top-0 left-0 w-full h-full bg-[#303F9F] opacity-85"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center">
      <h1 className="poppins-semibold text-6xl">About</h1>
      <Breadcrumb aria-label="Default breadcrumb example" className="mt-3 text-[#4CAF50]">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" className="text-[#4CAF50]">About</Breadcrumb.Item>
    </Breadcrumb>
    </div>
  </div>
</div>


{/* about */}

<div className="container mx-auto mt-20">
<div className="text-center">
            <h2 className=" poppins-semibold text-[#303F9F] text-3xl text-center lg:text-6xl">
            At MAITRI VISA AND TRAVEL SERVICES
            </h2>
            <p className=" poppins-regular mx-auto w-3/4 mt-3 text-justify lg:text-center">
            We excel in offering thorough visa support and travel solutions to both individuals and businesses. Committed to delivering excellence and ensuring customer satisfaction, we focus on streamlining the visa application procedure and enabling effortless travel experiences for our clientele.
            </p>
          </div>
</div>

<div>

</div>

<div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-start">
          <div className="mx-auto  rounded-xl border-b-[#003A66] overflow-hidden">
            <div className="relative bg-slate-100">
              <img src={Aboutimg1} alt="" />
              <div className="absolute  w-full h-full bg-slate-100 ">
                <img src={Aboutimg2} alt="" className="rounded-t-full" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <p className="poppins-regular  mt-5 text-justify lg:text-justify">
            Our skilled team is committed to providing customized services designed to accommodate the distinct requirements and desires of every client. Whether you're arranging a vacation, business trip, or immigration endeavor, we offer professional guidance and assistance throughout the entire process.From visa consultation and document preparation to appointment scheduling and visa status tracking, we expertly manage every step of the visa application process with accuracy and effectiveness. Our aim is to guarantee a seamless visa application experience, ensuring you're fully equipped for your travel adventure.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-3 mt-3">
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
                <FontAwesomeIcon
                  icon={faPlaneUp}
                  className="text-5xl text-[#252B91]"
                />
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

<div className="container mx-auto poppins-regular ">
<p className="text-justify">
At MAITRI VISA AND TRAVEL SERVICES, we specialize in providing comprehensive visa assistance and travel services to individuals and businesses. With a commitment to excellence and customer satisfaction, we strive to simplify the visa application process and facilitate seamless travel experiences for our clients.
Our team of experienced professionals is dedicated to delivering personalized services tailored to meet the unique needs and preferences of each client. Whether you're planning a leisure trip, business travel, or immigration, we offer expert guidance and support every step of the way.
From visa consultation and document preparation to appointment scheduling and visa status tracking, we handle all aspects of the visa application process with precision and efficiency. Our goal is to ensure that your visa application is processed smoothly and that you are well-prepared for your travel journey.
In addition to visa services, we also provide a range of travel-related services, including flight bookings, hotel reservations, travel insurance, and more. With our comprehensive approach to travel assistance, we aim to make your travel experience hassle-free and memorable.
At MAITRI VISA AND TRAVEL SERVICES, we believe in building long-term relationships with our clients based on trust, integrity, and reliability. We are committed to exceeding expectations and delivering exceptional service that consistently meets the highest standards of quality.

</p>
</div>

{/* sec -about */}
  
<SecAbout/>


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

   {/* traning */}

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
    </>
  )
}

export default About