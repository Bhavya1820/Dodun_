import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Digital Marketing",
    subMenu: [
      { title: "SEO", link: "/Seo" },
      { title: "Pay Per Click", link: "/Ppc" },
      { title: "Content Marketing", link: "/ContentMarketing" },
      { title: "Social Media Marketing", link: "/SocialMediaMarketing" },
      { title: "Email Marketing", link: "/EmailMarketing" },
    ],
  },
  {
    title: "Designing",
    subMenu: [
      { title: "Web Designing", link: "/WebDesigning" },
      { title: "UI/UX Designing", link: "/UiUxDesigning" },
      { title: "Graphic Designing", link: "/GraphicDesigning" },
      { title: "Logo Designing", link: "/LogoDesigning" },
      { title: "Video Editing", link: "/VideoEditing" },
    ],
  },
  {
    title: "Development",
    subMenu: [
      { title: "iOS App Development", link: "/IosAppDevelopment" },
      { title: "Android App Development", link: "/AndroidAppDevelopment" },
      { title: "Web Development", link: "/WebDevelopment" },
      { title: "Windows Development", link: "/WindowsDevelopment" },
    ],
  },
  { title: "Hosting", link: "/Hosting" },
  { title: "Animated Videos", link: "/AnimatedVideos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // if (window.innerWidth >= 768) {
        // Only for desktop
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
          setOpenDropdown(null);
        }
      // }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="sticky manrope top-0 left-0 w-full z-50 transition-all duration-300 bg-white">
      <div className="container mx-auto md:text-sm lg:text-lg flex items-center justify-between px-4">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/jncw2kb8u/image.png?updatedAt=1742284109869"
            alt="Logo"
            className="h-20 w-50 hover:scale-110 transition duration-300"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-black hover:text-blue-500 hover:scale-110 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-blue-500 hover:scale-110 transition duration-300">
            About Us
          </Link>
          <div
            className="relative inline-block text-left hover:cursor-pointer"
            ref={dropdownRef}
          >
            <button
              className="text-black rounded-lg flex items-center gap-2 hover:text-blue-500 hover:scale-110 transition duration-300"
              onClick={toggleDropdown}
            >
              Services <ChevronDown size={16} />
            </button>
            {isOpen && (
              <div className="absolute mt-2 bg-white border shadow-lg w-45">
                {services.map((service, index) => (
                  <div key={index} className="relative">
                    {service.subMenu ? (
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        {service.title} <ChevronRight size={14} />
                        {openDropdown === index && (
                          <div className="absolute left-full top-0 mt-0 w-45 bg-white border shadow-lg">
                            {service.subMenu.map((sub, subIndex) => (
                              <Link
                                key={subIndex}
                                to={sub.link}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={service.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" className="text-black hover:text-blue-500 hover:scale-110 transition duration-300">
            Blog
          </Link>
          <Link to="/contact" className="text-black hover:text-blue-500 hover:scale-110 transition duration-300">
            Contact Us
          </Link>
        </div>
        <div className="hidden md:block bg-gradient-to-r from-sky-400 to-blue-800 hover:scale-105 transition duration-300 rounded-lg shadow-lg hover:shadow-xl">
          <button
            type="tel"
            className="bg-white m-1 p-10 text-black text-md px-4 py-2 rounded-[calc(0.5rem-1px)]"
          >
            <Link to="tel:+91-8968881110">+91-8968881110</Link>
          </button>
        </div>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div ref={dropdownRef} className="md:hidden absolute bg-white p-4 space-y-2 shadow-lg w-full">
          <Link to="/" className="block text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block text-gray-800 hover:text-blue-500">
            About Us
          </Link>
          <div className="relative inline-block text-left hover:cursor-pointer">
            <button
              className="text-black rounded-lg flex items-center gap-2 hover:text-blue-500 focus:outline-none"
              onClick={toggleDropdown}
            >
              Services <ChevronDown size={16} />
            </button>
            {isOpen && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-40 z-50">
                {services.map((service, index) => (
                  <div key={index} className="relative">
                    {service.subMenu ? (
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        {service.title} <ChevronRight size={14} />
                        {openDropdown === index && (
                          <div className="absolute left-full top-0 mt-0 w-40 bg-white border rounded-lg shadow-lg z-50">
                            {service.subMenu.map((sub, subIndex) => (
                              <Link
                                key={subIndex}
                                to={sub.link}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={service.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" className="block text-gray-800 hover:text-blue-500">
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-gray-800 hover:text-blue-500"
          >
            Contact Us
          </Link>
          <button className="w-full bg-gradient-to-r from-sky-400 to-blue-800 text-white text-md px-4 py-2">
            <Link to="tel:+91-8968881110">+91-8968881110</Link>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
