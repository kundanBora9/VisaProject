import React from "react";
import "../../App.css";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import tourpackage from '../../assets/tour-packages.jpg'
import BackgroundImg from "../../assets/breadcrumb.png";

function Corporate() {
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
              <h1 className="poppins-semibold text-4xl">CORPORATE VISA ASSISTANCE </h1>
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
                CORPORATE VISA ASSISTANCE
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
    
    <div className="container flex flex-col md:flex-row lg:flex-row justify-evenly items-center mt-10 poppins-regular">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-[#303F9F] text-5xl poppins-semibold">CORPORATE VISA ASSISTANCE</h2>
        <p className="text-xl mt-10 poppins-regular">
        MVTS India specializes in facilitating Corporate Visa Assistance services, offering a comprehensive solution to meet the needs of corporate travelers. With a dedicated team of professionals well-versed in visa regulations and procedures, we streamline the application process, ensuring efficiency and accuracy every step of the way. Our personalized approach caters to the unique requirements of each client, providing prompt assistance and expert guidance throughout the visa application journey. Whether it's arranging documentation, scheduling appointments, or navigating embassy protocols, MVTS India is committed to delivering exceptional service and facilitating smooth corporate travel experiences. Trust us to handle your Corporate Visa needs with professionalism, reliability, and a commitment to excellence.
        </p>
      </div>
      <div className=" p-4 w-full md:w-1/2 flex justify-center">
        <img src={tourpackage} alt="Tour package" className="w-3/4" />
      </div>
    </div>
    
    </>
  )
}

export default Corporate