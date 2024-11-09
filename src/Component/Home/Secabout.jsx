import React from 'react'
import "../../App.css";
import CounterUp from "./Counter.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
function Secabout() {
  return (
    <div className="sec-about min-h-screen flex justify-center items-center lg:mt-20 mt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-20 z-0 w-full px-4">
     
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
              Total Visa<br/> Processed 
              </p>
              <div className="flex justify-center items-center">
                <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                  <CounterUp end={32} duration={5000} />
                </p>
                <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                  K+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     
     
      {/* Card 1 */}
      <div className="flex items-center justify-center">
        <div className="counter">
          <div className="relative bg-white rounded-full shadow-lg w-40 h-40  md:w-48 md:h-48 flex flex-col items-center justify-center">
            <div className="mt-14 sm:mt-20 text-center">
              <p className="text-[#252B91] font-bold uppercase poppins-regular text-xs sm:text-sm md:text-base">
              Happy Journeys
              </p>
              <div className="flex justify-center items-center">
                <p className="text-[#252B91] text-xl sm:text-3xl md:text-3xl font-bold counter-value">
                  <CounterUp end={25} duration={5000} />
                </p>
                <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                  K+
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
              Our Happy Clients
              </p>
              <div className="flex justify-center items-center">
                <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                  <CounterUp end={30} duration={5000} />
                </p>
                <p className="text-[#252B91] text-xl sm:text-2xl md:text-3xl font-bold counter-value">
                  K+
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
                  <CounterUp end={100} duration={5000} />
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
  )
}

export default Secabout