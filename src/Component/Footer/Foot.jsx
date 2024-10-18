import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "../../App.css";
import { Button} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Foot() {
  return (
    <Footer className="mt-20">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 bg-[#303F9F]">
        <div className="flex flex-col items-start">
  <Footer.Title
    title="Contact Info"
    className="text-white poppins-semibold text-xl "
  />
  <Footer.LinkGroup col className="text-white text-lg">
    <div>123, New York, USA</div>
    <div>Info@emaple.com</div>
    <div>+0123 45 6789</div>
    <div>+0123 45 6789</div>
    <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
      <Footer.Icon
        icon={BsFacebook}
        className="text-white text-3xl"
      />
      <Footer.Icon
        icon={BsInstagram}
        className="text-white text-3xl"
      />
      <Footer.Icon
        icon={BsTwitter}
        className="text-white text-3xl"
      />
      <Footer.Icon
        icon={BsLinkedin}
        className="text-white text-3xl"
      />
    </div>
  </Footer.LinkGroup>
</div>
<div className="flex flex-col items-start">
  <Footer.Title
    title="Opening Time"
    className="text-white poppins-semibold text-xl "
  />
  <Footer.LinkGroup col className="text-white text-lg">
    <div>
      <span className="text-slate-500">Mon - Friday:</span>
      <p> 09.00 am to 07.00 pm</p>
    </div>
    <div>
      <span className="text-slate-500">Saturday</span>
      <p> 09.00 am to 07.00 pm</p>
    </div>
    <div>
      <span className="text-slate-500">Vacation:</span>
      <p> All Sunday is our vacation</p>
    </div>
  </Footer.LinkGroup>
</div>
          <div className="flex flex-col items-start">
            <Footer.Title
              title="Our Services"
              className="text-white poppins-semibold text-xl "
            />
            <Footer.LinkGroup col className="text-white text-lg ">
              <Footer.Link href="#" className="hover:text-[#4CAF50] hover:scale-110"><FontAwesomeIcon icon={faAngleRight} className="text-white text-sm " /> Business</Footer.Link>
              <Footer.Link href="#" className="hover:text-[#4CAF50] hover:scale-110"><FontAwesomeIcon icon={faAngleRight} className="text-white text-sm " /> Evalution</Footer.Link>
              <Footer.Link href="#" className="hover:text-[#4CAF50] hover:scale-110"><FontAwesomeIcon icon={faAngleRight} className="text-white text-sm " /> Migrate</Footer.Link>
              <Footer.Link href="#" className="hover:text-[#4CAF50] hover:scale-110"><FontAwesomeIcon icon={faAngleRight} className="text-white text-sm " /> Study</Footer.Link>
              <Footer.Link href="#" className="hover:text-[#4CAF50] hover:scale-110"><FontAwesomeIcon icon={faAngleRight} className="text-white text-sm " /> Counciling</Footer.Link>
              <Footer.Link href="#" className="hover:text-[#4CAF50] hover:scale-110"><FontAwesomeIcon icon={faAngleRight} className="text-white text-sm " /> Work / Career</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="flex flex-col items-start">
            <Footer.Title
              title="Newsletter"
              className="text-white poppins-semibold text-xl "
            />
            <Footer.LinkGroup col className="text-white text-lg">
              <p>
                {" "}
                Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="relative rounded-full">
                  <input type="email" placeholder="Enter Your Email" className="rounded-full w-60 h-12"/>
                  <Button
                    className="absolute right-2 top-1 rounded-full bg-[#303F9F] border-[#4CAF50]"
                    size="sm"
                  >
                    Signup
                  </Button>
                </div>
              </div>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-[#4CAF50] px-4 py-6 sm:flex sm:items-center sm:justify-center   gap-5">
          <Footer.Copyright
            href="#"
            by="Flowbite™"
            year={2022}
            className="text-white text-2xl"
          />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-white text-3xl"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-white text-3xl"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-white text-3xl"
            />
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
              className="text-white text-3xl"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Foot;
