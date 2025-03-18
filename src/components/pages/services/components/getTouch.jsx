import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const getTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
      setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "" }); // Reset form
    } catch (error) {
      setResponseMessage(error.response?.data?.error || "An error occurred!");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [offsetY, setOffsetY] = useState(0);

  // Track the scroll position
  const handleScroll = () => {
    setOffsetY(window.scrollY * -0.1); // Adjust speed by changing multiplier
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative manrope w-full min-h-[800px] flex items-center justify-center text-center overflow-hidden px-4 md:px-8">
        {/* Background Image */}
        <img
          src="https://ik.imagekit.io/jncw2kb8u/getintouch.jpg?updatedAt=1739354646829"
          alt="Blog Background"
          className="absolute inset-0 w-full h-[1200px] object-cover"
          style={{
            transform: `translateY(${offsetY}px)`,
            willChange: "transform", // Optimize for performance
          }}
        />
        {/* Overlay Content */}
        <div className="absolute bg-black w-full h-full opacity-30 shadow-lg backdrop-blur-lg"></div>

        <div className="relative z-10 w-full max-w-4xl">
          <div className="text-black py-12 px-6">
            {/* Heading Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl text-white font-bold">
                Get In Touch With Us
              </h2>
              <h3 className="text-white text-lg md:text-2xl mt-2">
                We’d love to hear from you. Please reach out with any questions
                or feedback.
              </h3>
            </div>

            {/* Form Container */}
            <div className="max-w-3xl mx-auto p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg md:text-xl text-white mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name"
                      className="w-full px-4 py-3 text-white bg-transparent border-2 border-white focus:ring-2 focus:ring-black outline-none placeholder:text-white"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg md:text-xl text-white mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name"
                      className="w-full px-4 py-3 text-white bg-transparent border-2 border-white focus:ring-2 focus:ring-black outline-none placeholder:text-white"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg md:text-xl text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter a valid Email Address"
                    className="w-full px-4 py-3 text-white bg-transparent border-2 border-white focus:ring-2 focus:ring-black outline-none placeholder:text-white"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-lg md:text-xl text-white mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    className="w-full px-4 py-3 text-white bg-transparent border-2 border-white focus:ring-2 focus:ring-black outline-none placeholder:text-white"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    pattern="\d{10}"
                    title="Phone number must be exactly 10 digits"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-lg md:text-xl text-white border-2 border-white hover:scale-105 py-3 rounded-md font-medium transition-all duration-300 "
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default getTouch;
