import "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-green-900 text-white relative">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 mr-3 rounded-full" />
          <span className="text-xl font-bold">Games Hub</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500 transition duration-300 text-sm">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition duration-300 text-sm">
            About
          </Link>
          <Link to="/tournament/:id" className="hover:text-blue-500 transition duration-300 text-sm">
            Tournaments
          </Link>
          <Link to="/register" className="hover:text-blue-500 transition duration-300 text-sm">
            Register
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition duration-300 text-sm">
            Contact
          </Link>
          <Link to="/faq" className="hover:text-blue-500 transition duration-300 text-sm">
            FAQs
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-30 bg-green-900 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-1xl absolute top-6 left-6 focus:outline-none"
        >
          <FaTimes />
        </button>
        <nav className="mt-16 px-4 space-y-3 pb-6 text-sm">
          <Link
            to="/"
            className="block hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/tournament/:id"
            className="block hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Tournaments
          </Link>
          <Link
            to="/packages"
            className="block hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Register
          </Link>
          <Link
            to="/book"
            className="block hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          
          <Link
            to="/faq"
            className="block hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            FAQs
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;