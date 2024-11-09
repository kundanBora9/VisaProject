import React from "react";
import "../../App.css";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import tourpackage from '../../assets/tour-packages.jpg'
import BackgroundImg from "../../assets/breadcrumb.png";


function PermanentSettlementVisa() {
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
              <h1 className="poppins-semibold text-4xl">PERMANENT SETTLEMENT VISA CONSULTANCY </h1>
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
                PERMANENT SETTLEMENT VISA CONSULTANCY
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
    
    <div className="container flex flex-col md:flex-row lg:flex-row justify-evenly items-center mt-10 poppins-regular">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-[#303F9F] text-5xl poppins-semibold">PERMANENT SETTLEMENT VISA CONSULTANCY</h2>
        <p className="text-xl mt-10 poppins-regular">
        MVTS India specializes in facilitating Permanent Settlement Visa services, offering comprehensive assistance to individuals seeking to establish permanent residency in various countries. With a dedicated team of experienced professionals and a deep understanding of immigration laws and regulations, we guide our clients through every step of the application process. From initial consultation to document preparation, submission, and follow-up, we provide personalized support tailored to meet the unique needs of each client. Our goal is to simplify the complex immigration process, ensuring a smooth and efficient journey towards obtaining permanent residency. With MVTS India, clients can trust in our expertise and commitment to helping them achieve their goal of settling permanently in their desired destination.
        </p>
      </div>
      <div className=" p-4 w-full md:w-1/2 flex justify-center">
        <img src={tourpackage} alt="Tour package" className="w-3/4" />
      </div>
    </div>
    
    </>
  )
}

export default PermanentSettlementVisa