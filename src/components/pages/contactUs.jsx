import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import BackToTop from "./BacktoTop";

const contactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(""); // Reset response message

    // ✅ Phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setResponseMessage("Phone number must be exactly 10 digits!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/submit", formData);
      if (res.data.error && res.data.error === "Email already exists") {
        setResponseMessage(
          "Email already exists. Please use a different email."
        );
        return;
      }

      setShowPopup(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      }); // Reset form
      // setTimeout(() => setResponseMessage(""),3000)
    } catch (error) {
      setResponseMessage(error.response?.data?.error || "An error occurred!");
    }
  };
  const contactInfo = [
    {
      icon: "fa-envelope",
      title: "Chat to us",
      description: "Our friendly team is here to help.",
      link: "mailto:dodunsoftsolutions@gmail.com",
      linkText: "dodunsoftsolutions@gmail.com",
    },
    {
      icon: "fa-location-dot",
      title: "Office",
      description:
        "GM Plaza, Phase -7 Industrial Area, Sector-73, Mohali, India",
    },
    {
      icon: "fa-phone",
      title: "Phone",
      description: "Mon-Sat from 10:30am to 7:30pm",
      link: "tel:+91-8968881110",
      linkText: "+91-8968881110",
    },
  ];

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <BackToTop />
      <div className="bg-white manrope p-6 md:p-10">
        {/* Heading section */}
        <div data-aos="fade-down" className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            See Your Digital Transformative Growth With Us. Get all your
            questions answered by our business development team.
          </p>
        </div>

        {/* Contact Info Section */}
        <div
          data-aos="fade-down"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left px-4 md:px-10 lg:px-20"
        >
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md border-4 border-blue-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg mx-auto w-full max-w-sm"
            >
              <i className={`fa-solid ${item.icon} text-blue-300 text-3xl`}></i>
              <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {item.description}
              </p>
              {item.link && (
                <Link
                  to={item.link}
                  className="text-blue-500 hover:underline break-words"
                >
                  {item.linkText}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-10 px-4 flex justify-center">
          <div className="w-full md:w-7/8 aspect-video border">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d714.3050127920549!2d76.69969712989423!3d30.713347056154703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739168399841!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gradient-to-r from-sky-200 to-blue-400 md:p-10 w-full md:w-7/8 mt-10 md:mx-10 lg:mx-20 flex flex-col md:flex-row items-center overflow-hidden shadow-lg">
          <div data-aos="fade-up-right" className="w-full md:w-1/2">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/blog-listing-hero.svg?updatedAt=1739170233142"
              alt="Contact Illustration"
              className="w-full rounded-lg mt-5"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up-left"
            className="mx-5 mt-5 md:w-1/2 bg-white p-2 mb-5 md:ml-10 shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Get in Touch
            </h2>

            <div className="flex flex-col lg:flex-row md:space-x-4">
              <div className="w-full lg:w-1/2">
                <label className="block text-lg font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full lg:w-1/2 mt-4 md:mt-0">
                <label className="block text-lg font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label className="block text-lg font-semibold text-gray-700 mt-4">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="block text-lg font-semibold text-gray-700 mt-4">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              pattern="\d{10}"
              title="Phone number must be exactly 10 digits"
            />

            <label className="block text-lg font-semibold text-gray-700 mt-4">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full mt-6 p-3 bg-yellow-500 text-white rounded-md font-bold transition-all duration-300 hover:bg-yellow-600 shadow-md"
            >
              Submit
            </button>
            {responseMessage && (
              <p
                className={`mt-4 text-center ${
                  responseMessage.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {responseMessage}
              </p>
            )}
          </form>
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Form Submitted Successfully!
                </h3>
                <button
                  onClick={closePopup}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contactUs;
