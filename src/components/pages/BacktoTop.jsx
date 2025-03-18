import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import {  FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div data-aos="fade-up" data-aos-duration="100" className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
        {/* Social Media Links */}
        <Link
          to="https://www.linkedin.com/company/dodun-soft-solutions-co"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition hover:scale-120 duration-300"
        >
          <FaLinkedin size={20} />
        </Link>
        <Link
          to="https://www.instagram.com/dodun.softsolutions/?igsh=YzdpYTFuc2k0cTBn&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white p-2 rounded-full shadow-lg hover:bg-pink-700 transition hover:scale-120 duration-300"
        >
          <FaInstagram size={20} />
        </Link>
        <Link
          to="https://wa.link/b9farw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition hover:scale-120 duration-300"
        >
          <FaWhatsapp size={20} />
        </Link>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition hover:scale-120 duration-300"
          style={{ zIndex: 9999 }}
        >
          <ArrowUp />
        </button>
      </div>
    )
  );
};

export default BackToTop;
