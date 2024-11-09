import React from "react";
import "../../App.css";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import tourpackage from '../../assets/tour-packages.jpg'
import BackgroundImg from "../../assets/breadcrumb.png";

function Familyvisa() {
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
              <h1 className="poppins-semibold text-4xl">SPOUSE/FAMILY VISA ASSISTANCE</h1>
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
                SPOUSE/FAMILY VISA ASSISTANCE
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
    
    <div className="container flex flex-col md:flex-row lg:flex-row justify-evenly items-center mt-10 poppins-regular">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-[#303F9F] text-5xl poppins-semibold">SPOUSE/FAMILY VISA ASSISTANCE</h2>
        <p className="text-xl mt-10 poppins-regular">
        At MVTS India, we understand the importance of family reunification and the significance of spouse and family visas in bringing loved ones together. Our dedicated team is committed to simplifying the visa application process, ensuring a seamless experience for our clients. With a focus on efficiency and reliability, we provide personalized assistance tailored to the unique needs of each family. From guiding you through the documentation requirements to offering support and guidance at every step, our experts are here to help you navigate the intricacies of the visa process. Trust MVTS India to facilitate your spouse and family visa services, making your reunion dreams a reality.
        </p>
      </div>
      <div className=" p-4 w-full md:w-1/2 flex justify-center">
        <img src={tourpackage} alt="Tour package" className="w-3/4" />
      </div>
    </div>
    
    </>
  )
}

export default Familyvisa