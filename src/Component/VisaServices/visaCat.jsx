import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import serviceImg1 from "../../assets/service-1.jpg";
import serviceImg2 from "../../assets/service-2.jpg";
import serviceImg3 from "../../assets/service-3.jpg";
function visaCat() {
  return (
    <div className="container service overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5">
            <div className="sub-style">
              <h5 className="sub-title uppercase text-[#252B91] poppins-medium text-xl  lg:text-center">
              Our experts 
              </h5>
            </div>
            <h1 className="poppins-semibold text-[#252B91] text-3xl w-11/12 mx-auto text-center lg:text-center lg:text-6xl leading-relaxed">
    we are at your service to facilitate exceptional Visa processing
</h1>
            <p className="mx-auto w-3/4 mt-3   md:text-center text-justify lg:text-center ">
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 md:flex-wrap lg:flex-nowrap md:justify-center w-full">
            <div className="">
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
                         EDUCATIONAL OPPORTUNITIES ABROAD
                        </a>
                      </div>
                      <Link to='/studyvisa' className=" block  text-[#252B91] rounded-full py-3 px-5 mb-4">
                      Explore More
                      </Link>
                    </div>
                    <div className="service-content pb-4">
                      <a href="#">
                        <h4 className="text-white mb-4 py-3 px-3 text-xl poppins-medium ">
                        EDUCATIONAL OPPORTUNITIES ABROAD
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white ">
                        MVTS India specializes in providing comprehensive educational opportunities abroad. With a dedicated team of experienced professionals, we assist students... 
                        </p>
                        <Link to='/studyvisa' className=" text-white bg-[#4CAF50] rounded-full py-3 px-5">
                      Explore More
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
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
                          VISITOR/TRAVEL VISA
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
                        VISITOR/TRAVEL VISA
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                        MVTS India specializes in providing comprehensive visa facilitation services for travelers and B2B travel partners seeking Visitor and Travel Visas assistance...
                        </p>
                        <Link to='/travelvisa' className=" text-white bg-[#4CAF50] rounded-full py-3 px-5">
                      Explore More
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
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
                         CORPORATE VISA  ASSISTANCE
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
                        CORPORATE VISA <br/> ASSISTANCE
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                        MVTS India specializes in facilitating Corporate Visa Assistance services, offering a comprehensive solution to meet the needs of corporate travelers. With a dedicated...
                        </p>
                        <Link to='/corporate' className=" text-white bg-[#4CAF50] rounded-full py-3 px-5">
                      Explore More
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
            </div>
            <div  className="flex justify-center flex-wrap   gap-6 md:flex-wrap lg:flex-nowrap md:justify-center  w-full max-w-3xl">
            <div className="">
              <div className="service-item md:col-span-1 md:col-start-2">
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
                          PERMANENT RESIDENCE VISA
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
                        PERMANENT RESIDENCE VISA
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white ">
                        MVTS India specializes in facilitating Permanent Settlement Visa services, offering comprehensive assistance to...
                        </p>
                        <Link to='/permanent' className=" text-white bg-[#4CAF50] rounded-full py-3 px-5">
                      Explore More
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="service-item md:col-span-1 md:col-start-2">
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
                          SPOUSE/FAMILY VISA
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
                        SPOUSE/FAMILY VISA
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                        At MVTS India, we understand the importance of family reunification and the significance of spouse and family visas in bringing loved ones together...
                        </p>
                        <Link to='/familyvisa' className=" text-white bg-[#4CAF50] rounded-full py-3 px-5">
                      Explore More
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default visaCat