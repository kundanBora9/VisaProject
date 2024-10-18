
  import { faClone } from "@fortawesome/free-solid-svg-icons";
  import { faShare } from "@fortawesome/free-solid-svg-icons";
  import React from "react";
  import  { useState } from 'react';
  import "../../App.css";
  import { Card } from "flowbite-react";
  import BackgroundImg from "../../assets/breadcrumb.png";
  import officeAus from "../../assets/office-2.jpg";
  import officeCanda from "../../assets/office-1.jpg";
  import officeUnited from "../../assets/office-3.jpg";
  import officeIndia from "../../assets/office-4.jpg";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
  import { faTty } from '@fortawesome/free-solid-svg-icons';
  import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
  import { Breadcrumb } from "flowbite-react";
  import { HiHome } from "react-icons/hi";



  const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [project, setProject] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const errorMessages = {};
    
      if (name.trim() === '') {
        errorMessages.name = 'Name is required';
      }
      if (email.trim() === '' || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        errorMessages.email = 'Invalid email address';
      }
      if (phone.trim() === '') {
        errorMessages.phone = 'Phone number is required';
      }
      if (project.trim() === '') {
        errorMessages.project = 'Project name is required';
      }
      if (subject.trim() === '') {
        errorMessages.subject = 'Subject is required';
      }
      if (message.trim() === '') {
        errorMessages.message = 'Message is required';
      }
    
      if (Object.keys(errorMessages).length > 0) {
        setErrors(errorMessages);
      } else {
        try {
          const response = await fetch('http://localhost:3000/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              name,
              email,
              phone,
              project,
              subject,
              message
            })
          });
    
          if (response.ok) {
            setSuccessMessage('Form submitted successfully!');
            setShowPopup(true);
            setTimeout(() => {
              setShowPopup(false);
              setSuccessMessage('');
              window.location.reload();
            }, 1000);
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error('Error submitting the form:', error);
        }
      }
    }
    return (
      <>

  <div>
    <div className="relative">
      <img src={BackgroundImg} alt="" style={{ height: '50vh', width: '100%', opacity: 0.5 }} className="object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#303F9F] opacity-85"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center">
        <h1 className="poppins-semibold text-6xl">Contact Us</h1>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-3 text-[#4CAF50]">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" className="text-[#4CAF50]">Contact</Breadcrumb.Item>
      </Breadcrumb>
      </div>
    </div>
  </div>

  <div className="container grid grid-cols-1 lg:grid-cols-2 mb-12 mt-10 mx-auto max-w-screen-xl">
    {/* Left Column */}
    <div className="px-10">
      <div className="mb-5">
        <h5 className=" text-[#303F9F] text-3xl poppins-regular text-center md:text-start lg:text-start">Quick Contact</h5>
      </div>
      <h1 className="text-3xl text-center md:text-left lg:text-left md:text-6xl poppins-semibold text-[#303F9F] mb-4">Have Questions?</h1>
      <h1 className="text-3xl md:text-6xl text-center md:text-left lg:text-left poppins-semibold text-[#303F9F] mb-4"> Don't Hesitate to</h1>
      <h1 className="text-3xl md:text-6xl text-center md:text-left lg:text-left poppins-semibold text-[#303F9F] mb-4"> Contact Us</h1>
      <p className="mb-5 w-11/12 poppins-regular text-slate-500 sm:mx-auto  text-justify md:text-start lg:text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat totam deserunt tempora. Tempore neque necessitatibus corporis error earum sint quae?
      </p>

      {/* Location */}
      <div className="flex items-start border-b border-b-slate-400 pb-4 mb-4">
        <div className="bg-slate-100 rounded p-3">
          <FontAwesomeIcon icon={faMapLocationDot} className="text-6xl text-[#303F9F]" />
        </div>
        <div className="ml-3">
          <h5 className="poppins-semibold text-[#303F9F] text-xl">Location</h5>
          <p className='poppins-regular text-slate-500'>
            123, First Floor, 123 St Roots Terrace, Los Angeles<br/> 90010 United States of America
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="flex items-start">
          <FontAwesomeIcon icon={faTty} className='text-6xl text-[#303F9F]'/>
          <div className="ml-3">
            <h5 className="text-xl text-[#303F9F] poppins-medium uppercase mb-2">Quick Contact</h5>
            <div className='poppins-regular text-[#303F9F]'>
              <h6 className="mb-0 poppins-semibold">Phone:</h6>
              <a href="tel:+01234567890" className="text-primary text-lg">+012 3456 7890</a>
            </div>
            <div className='poppins-regular text-[#303F9F]'>
              <h6 className="mb-0 poppins-semibold">Email:</h6>
              <a href="mailto:travisa@example.com" className="text-primary text-lg">travisa@example.com</a>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <FontAwesomeIcon icon={faClone} className='text-6xl text-[#303F9F]'/>
          <div className="ml-3 poppins-regular text-[#303F9F]">
            <h5 className="mb-2 poppins-medium text-2xl">Opening Hrs</h5>
            <div>
              <h6 className="mb-0 poppins-semibold">Mon - Friday:</h6>
              <span className="text-primary text-lg">09.00 am to 07.00 pm</span>
            </div>
            <div>
              <h6 className="mb-0 poppins-semibold">Saturday:</h6>
              <span className="text-primary text-lg">10.00 am to 05.00 pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3 md:items-center lg:items-center pt-5 mb-3">
        <div className="p- rounded text-[#303F9F]">
          <FontAwesomeIcon icon={faShare} className='text-3xl md:text-5xl lg:text-5xl bg-slate-200 p-3 md:p-5 lg:p-5 rounded-md'/>
        </div>
        <div className="flex-wrap md:flex lg:flex">
          <a className=" text-[#303F9F] poppins-regular -px-3 md:px-3 lg:px-3 py-2" href="#">facebook <FontAwesomeIcon icon={faCircleChevronRight} /></a>
          <a className="text-[#303F9F] poppins-regular px-3 py-2" href="#"> twitter <FontAwesomeIcon icon={faCircleChevronRight} /></a>
          <a className="text-[#303F9F] poppins-regular px-3 py-2" href="#"> instagram <FontAwesomeIcon icon={faCircleChevronRight} /></a>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col items-start justify-start w-full px-6">
      <div className="mb-5">
        <h5 className="text-xl text-[#303F9F] poppins-medium mb-2 uppercase">Let’s Connect</h5>
      </div>
      <h1 className="text-5xl poppins-semibold text-[#303F9F] mb-4">Send Your Message</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} action="send-email.php" method="POST" className="w-full max-w-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 form-floating w-full">
            <input
              type="text"
              className="form-input rounded-md h-14 w-full"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="name"></label>
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
          <div className="col-span-2 md:col-span-1 form-floating w-full">
            <input
              type="email"
              className="form-input rounded-md h-14 w-full"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="email"></label>
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div className="col-span-2 md:col-span-1 form-floating w-full">
            <input
              type="tel"
              className="form-input rounded-md h-14 w-full"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <label htmlFor="phone"></label>
            {errors.phone && <div className="text-red-500">{errors.phone}</div>}
          </div>
          <div className="col-span-2 md:col-span-1 form-floating w-full">
            <input
              type="text"
              className="form-input rounded-md h-14 w-full"
              id="project"
              placeholder="Project"
              value={project}
              onChange={(event) => setProject(event.target.value)}
            />
            <label htmlFor="project"></label>
            {errors.project && <div className="text-red-500">{errors.project}</div>}
          </div>
          <div className="col-span-2 form-floating w-full">
            <input
              type="text"
              className="form-input rounded-md h-14 w-full"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            <label htmlFor="subject"></label>
            {errors.subject && <div className="text-red-500">{errors.subject}</div>}
          </div>
          <div className="col-span-2 form-floating w-full">
            <textarea
              className="form-input h-40 rounded-md w-full"
              id="message"
              placeholder="Leave a message here"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <label htmlFor="message"></label>
            {errors.message && <div className="text-red-500">{errors.message}</div>}
          </div>
        </div>
        <button type="submit" className="border border-[#4CAF50] bg-[#4CAF50] hover:bg-[#303F9F] text-white poppins-regular rounded-md w-full py-3 mt-5">
          Send Message
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#003A66] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Success!</h2>
            <p>{successMessage}</p>
          </div>
        </div>
      )}
    </div>
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
            <p className=" mx-auto w-3/4 mt-3 text-justify lg:text-center">
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
      </>
    );
  };

  export default Contact;
