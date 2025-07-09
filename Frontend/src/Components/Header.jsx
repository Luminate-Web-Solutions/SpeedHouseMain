import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const linkClass = (path) =>
    `relative px-3 py-1 transition duration-200 font-semibold ${
      activePath === path
        ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[2px] after:bg-black after:rounded-full"
        : "text-black hover:text-gray-700 hover:after:w-8 hover:after:bg-gray-700"
    } after:transition-all after:duration-300 after:scale-100`;

  return (
    <header className="bg-gradient-to-r from-blue-200 to-blue-200 text-black font-bold shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 relative">
        {/* Logo with Link */}
        <a href="/" className="w-[140px] transform hover:scale-105 transition duration-300">
          <img src="./logo.png" alt="Company Logo" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg items-center">
          <li><a href="/" className={linkClass("/")}>Home</a></li>
          <li><a href="/aboutus" className={linkClass("/aboutus")}>About Us</a></li>
          <li><a href="/service" className={linkClass("/service")}>Service</a></li>
          <li><a href="/ourproject" className={linkClass("/ourproject")}>Our Projects</a></li>
          <li><a href="/contact" className={linkClass("/contact")}>Contact</a></li>
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
          <li><a href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/aboutus" className={linkClass("/aboutus")} onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="/service" className={linkClass("/service")} onClick={() => setIsOpen(false)}>Service</a></li>
          <li><a href="/ourproject" className={linkClass("/ourproject")} onClick={() => setIsOpen(false)}>Our Projects</a></li>
          <li><a href="/contact" className={linkClass("/contact")} onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
