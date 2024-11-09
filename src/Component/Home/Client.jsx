import React from 'react'
import "../../App.css";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import testimonial1 from "../../assets/testimonial-1.jpg";
import testimonial2 from "../../assets/testimonial-2.jpg";
import testimonial3 from "../../assets/testimonial-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";


function Client() {
    const swiperRef = useRef(null);
    const swiperParams = {
        spaceBetween: 30,
        speed: 1000, // Enable navigation buttons
        modules: [Navigation], 
        navigation:true,// Adjust the spacing between slides
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
            slidesPerView: 3,  // Desktop: 3 slides per view
            spaceBetween: 30,
          },
        },
      };
      
  return (
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
    {/* <div className='float-end text-3xl flex gap-3'>
    <button onClick={() => swiperRef.current.swiper.slidePrev()}><FontAwesomeIcon
                  icon={faArrowLeftLong }
                  className=""
                /> </button>
        <button onClick={() => swiperRef.current.swiper.slideNext()}><FontAwesomeIcon
                  icon={faArrowRightLong}
                  className=""
                /> </button>
    </div> */}
    
    <Swiper {...swiperParams} ref={swiperRef} className="mt-20 mb-10">

    <SwiperSlide>
  <div className=" p-3 md:p-3 lg:p-0">
        <div className="p-4 mb-5 bg-slate-100 rounded-xl h-[204px] w-full">
          <p className="text-lg mb-0 poppins-regular text-black">
          A big shoutout to MVTS for their commendable job in assisting me with my visa application. Although the process was smooth, providing a more comprehensive checklist of required documents would have added value.
          </p>
          
        </div>
          <div className="my-auto text-slate-950 poppins-regular ">
            <h5>Namita</h5>
            <div className="flex">
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
          </div>

        </div>
      </div>
      </SwiperSlide>     

<SwiperSlide>
  <div className=" p-3 md:p-3 lg:p-0">
        <div className="p-4 mb-5 bg-slate-100 rounded-xl h-[204px] w-full">
          <p className="text-lg mb-0 poppins-regular text-black">
          MVTS provided exceptional support throughout my visa application. Their prompt responses and thorough guidance made the entire process smooth and stress-free.
          </p>
          
        </div>
        
          <div className="my-auto text-slate-950 poppins-regular ">
            <h5>Rajesh</h5>
            <div className="flex">
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
          </div>
            
          
        </div>
      </div>
      </SwiperSlide>
<SwiperSlide>
  <div className=" p-3 md:p-3 lg:p-0">
        <div className="p-4 mb-5 bg-slate-100 rounded-xl  h-[204px] w-full">
          <p className="text-lg mb-0 poppins-regular text-black">
          I appreciate the personalized support provided by the MVTS. They were patient in addressing all my queries and ensured a smooth application process.
          </p>
          
        </div>
       
          
          <div className="my-auto poppins-regular text-black">
            <h5>Prateek Raj</h5>
            <div className="flex">
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
          </div>
        
        </div>
      </div>
      </SwiperSlide>
<SwiperSlide>
  <div className=" p-3 md:p-3 lg:p-0">
        <div className="p-4 mb-5 bg-slate-100 rounded-xl h-[204px] w-full">
          <p className="text-lg mb-0 poppins-regular text-black">
          I want to thank the MVTS agent for their assistance. Overall, the service was good, but a bit more clarity on the timeline expectations would improve the client experience.
          </p>
          
        </div>
          <div className="my-auto poppins-regular text-black">
            <h5>Ajit Ahuja</h5>
            <div className="flex">
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
  <div className=" p-3 md:p-3 lg:p-0">
        <div className="p-4 mb-5 bg-slate-100 rounded-xl h-[204px] w-full">
          <p className="text-lg mb-0 poppins-regular text-black">
          The attention to detail and clear communication made the visa application stress-free. Kudos to the agent for their professionalism and efficiency.
          </p>
          
        </div>
        
          <div className=" mx-5 poppins-regular text-black">
            <h5>Aditya vats</h5>
            <div className="flex">
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
          </div>
        
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
  <div className="  p-3 md:p-3 lg:p-0">
        <div className="p-4 mb-5 bg-slate-100 rounded-xl h-[204px] w-full">
          <p className="text-lg mb-0 poppins-regular text-black">
          I would like to express my gratitude to the Visa Allied team for their exceptional service. The agent was prompt, knowledgeable, and guided me through the entire visa application process with ease.
          </p>
          
        </div>

          <div className="my-auto poppins-regular text-black">
            <h5>Rajneesh</h5>
            <div className="flex">
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
            <FontAwesomeIcon icon={faStar} className="text-[#4CAF50]" />
          </div>
 
        </div>
      </div>
      </SwiperSlide>
</Swiper>
  </div>
  )
}

export default Client