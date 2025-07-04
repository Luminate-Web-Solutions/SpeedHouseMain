import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) => {
    return location.pathname === path
      ? "text-blue-900 font-semibold border-b-2 border-blue-900"
      : "hover:text-blue-900 transition";
  };

  return (
    <header className="bg-gradient-to-r from-blue-200 to-blue-200 text-black font-bold shadow-lg z-50 sticky top-0">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 relative">
        
        {/* Logo */}
        <div className="w-[120px] transform hover:scale-105 transition duration-300">
          <Link to="/">
            <img src="./logo.png" alt="Company Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg items-center">
          <li><Link to="/" className={linkClass("/")}>Home</Link></li>
          <li><Link to="/aboutus" className={linkClass("/aboutus")}>About Us</Link></li>
          <li><Link to="/service" className={linkClass("/service")}>Service</Link></li>
          <li><Link to="/ourproject" className={linkClass("/ourproject")}>Our Projects</Link></li>
          <li><Link to="/contact" className={linkClass("/contact")}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden bg-blue-100 ${
          isOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-lg text-black">
          <li>
            <Link to="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={linkClass("/aboutus")} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/service" className={linkClass("/service")} onClick={() => setIsOpen(false)}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/ourproject" className={linkClass("/ourproject")} onClick={() => setIsOpen(false)}>
              Our Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass("/contact")} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
