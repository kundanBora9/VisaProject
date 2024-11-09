import React from "react";
import "../../App.css";
import BackgroundImg from "../../assets/breadcrumb.png";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import airticket from '../../assets/air-ticket.jpg'

function AirTickets() {
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
          <h1 className="poppins-semibold text-6xl">AIR TICKETS
          </h1>
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
  <div className="w-full md:w-3/4 p-4">
    <h2 className="text-[#303F9F] text-6xl poppins-semibold">AIR TICKETS</h2>
    <p className="text-xl mt-3 poppins-regular">
    MVTS India also offers comprehensive travel solutions, including air ticket booking services to meet your travel needs. Whether you're planning a business trip, a family vacation, or a solo adventure, our experienced team can assist you in finding the best flight options tailored to your preferences and budget. With access to a wide network of airlines and competitive pricing, we strive to ensure a seamless booking experience for our clients. From economy class to business class, domestic to international destinations, we are committed to providing efficient and reliable air ticketing services to make your travel experience hassle-free. Trust MVTS India to handle all your travel arrangements with professionalism and attention to detail.
    </p>
  </div>
  <div className=" p-4 w-full h-full md:w-3/4 flex justify-center">
    <img src={airticket} alt="Tour package" className="w-3/4" />
  </div>
</div>
    </>
   

      
  )
}

export default AirTickets