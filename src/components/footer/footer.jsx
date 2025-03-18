import React from 'react'
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="manrope bg-white py-10 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img
            src="https://ik.imagekit.io/jncw2kb8u/image.png?updatedAt=1738665004511"
            alt="Logo"
            className="h-30 w-60 md:w-80 object-cover"
          />
          <p className="text-gray-600 text-sm mx-5">
            We are more than just an IT services provider. We are a team of dedicated professionals who
            strive to provide our clients with top-notch solutions and services to help them achieve their business goals.
          </p>
          <h3 className="mt-4 mx-6 font-bold">Follow Us</h3>
          <div className="flex space-x-4 mt-2 mx-6">
            <Link to="https://www.instagram.com/dodun.softsolutions/?igsh=YzdpYTFuc2k0cTBn&utm_source=qr" className="text-pink-500 text-3xl hover:scale-110 transition duration-300"><FaInstagram /></Link>
            <Link to="https://www.linkedin.com/company/dodun-soft-solutions-co" className="text-blue-700 text-3xl hover:scale-110 transition duration-300"><FaLinkedin /></Link>
            <Link to="https://wa.link/b9farw" className="text-green-500 text-3xl hover:scale-110 transition duration-300"><FaWhatsapp /></Link>
          </div>
        </div>
        <div className='grid grid-cols-2'>
        <div className='mt-10 mx-5'>
          <h3 className="font-bold">Quick Navigation</h3>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link to="/Career" className="hover:text-blue-500">Career</Link></li>
            <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
          </ul>
        </div>
        <div className='mt-10 mx-5'>
          <h3 className="font-bold">Our Services</h3>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li><Link to="/DigitalMarketing" className="hover:text-blue-500">Digital Marketing</Link></li>
            <li><Link to="/Designing" className="hover:text-blue-500">Designing</Link></li>
            <li><Link to="/Development" className="hover:text-blue-500">Development</Link></li>
            <li><Link to="/Hosting" className="hover:text-blue-500">Hosting</Link></li>
            <li><Link to="/AnimatedVideos" className="hover:text-blue-500">Animated Videos</Link></li>
          </ul>
        </div>
        </div>
        <div className='mt-10 mx-5 md:mx-0'>
          <h3 className="font-bold">Contact Us</h3>
          <p className="text-gray-600 mt-2">
            <strong>Address:</strong> GM Plaza, Phase -7 Industrial Sector-73, Mohali, India
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> dodunsoftsolutions@gmail.com
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Phone No:</strong> +91-8968881110
          </p>
        </div>
      </div>
    </footer>
  )
}

export default footer