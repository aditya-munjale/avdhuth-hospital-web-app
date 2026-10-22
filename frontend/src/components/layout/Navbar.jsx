import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Helper to highlight active links
  const isActive = (path) =>
    location.pathname === path
      ? "text-[#006bd6] font-bold"
      : "text-gray-700 font-medium hover:text-[#006bd6] transition-colors";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#006bd6] tracking-tight flex items-center gap-2 py-4"
          onClick={closeMenu}
        >
          <LocalHospitalIcon fontSize="large" />
          Avdhuth <span className="text-gray-800">Hospital</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link to="/doctors" className={isActive("/doctors")}>
            Doctors
          </Link>
          <Link to="/departments" className={isActive("/departments")}>
            Departments
          </Link>

          {/* Services Dropdown */}
          <div className="relative group py-6">
            <button className="text-gray-700 hover:text-[#006bd6] font-medium flex items-center gap-1 transition-colors">
              Patient Services <KeyboardArrowDownIcon fontSize="small" />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-[70px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50">
              <Link
                to="/facilities"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6] border-b border-gray-50"
              >
                Facilities & Infrastructure
              </Link>
              <Link
                to="/packages"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6] border-b border-gray-50"
              >
                Health Packages
              </Link>
              <Link
                to="/diagnostics"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6] border-b border-gray-50"
              >
                Diagnostics & Labs
              </Link>
              <Link
                to="/pharmacy"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6]"
              >
                24/7 Pharmacy
              </Link>
            </div>
          </div>

          {/* More / Quick Links Dropdown */}
          <div className="relative group py-6">
            <button className="text-gray-700 hover:text-[#006bd6] font-medium flex items-center gap-1 transition-colors">
              Discover More <KeyboardArrowDownIcon fontSize="small" />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-[70px] left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50">
              <Link
                to="/resources"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6] border-b border-gray-50"
              >
                Patient Resources
              </Link>
              <Link
                to="/gallery"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6] border-b border-gray-50"
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6] border-b border-gray-50"
              >
                Health Blog
              </Link>
              <Link
                to="/careers"
                className="px-5 py-3 text-sm text-gray-700 hover:bg-[#f4f9ff] hover:text-[#006bd6]"
              >
                Careers
              </Link>
            </div>
          </div>

          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>

          <Link
            to="/appointments"
            className="ml-2 bg-[#006bd6] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-[#006bd6] transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown (Scrollable) */}
      <div
        className={`lg:hidden absolute w-full bg-white border-t shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col px-6 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
          {/* Main Links */}
          <Link
            to="/"
            className={`${isActive("/")} block text-lg`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${isActive("/about")} block text-lg`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/doctors"
            className={`${isActive("/doctors")} block text-lg`}
            onClick={closeMenu}
          >
            Find a Doctor
          </Link>
          <Link
            to="/departments"
            className={`${isActive("/departments")} block text-lg`}
            onClick={closeMenu}
          >
            Departments
          </Link>
          <Link
            to="/contact"
            className={`${isActive("/contact")} block text-lg`}
            onClick={closeMenu}
          >
            Contact & Location
          </Link>

          {/* Categorized Services */}
          <div className="pt-4 pb-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Patient Services
            </p>
            <div className="flex flex-col space-y-3 pl-4 border-l-2 border-blue-100">
              <Link
                to="/facilities"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                Facilities & Infrastructure
              </Link>
              <Link
                to="/packages"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                Health Packages
              </Link>
              <Link
                to="/diagnostics"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                Diagnostics & Labs
              </Link>
              <Link
                to="/pharmacy"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                24/7 Pharmacy
              </Link>
            </div>
          </div>

          <div className="pt-2 pb-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Discover More
            </p>
            <div className="flex flex-col space-y-3 pl-4 border-l-2 border-blue-100">
              <Link
                to="/resources"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                Patient Resources & FAQs
              </Link>
              <Link
                to="/gallery"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                Health Blog & Articles
              </Link>
              <Link
                to="/careers"
                className="text-gray-600 hover:text-[#006bd6]"
                onClick={closeMenu}
              >
                Careers
              </Link>
            </div>
          </div>

          <Link
            to="/appointments"
            className="bg-[#006bd6] text-white text-center px-4 py-3 rounded-lg font-bold w-full mt-4 shadow-md"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
