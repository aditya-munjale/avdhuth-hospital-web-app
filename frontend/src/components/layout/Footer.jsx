import { Link } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 pt-16 pb-8 px-6 border-t-4 border-blue-600 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand & Emergency */}
        <div>
          <Link
            to="/"
            className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2 mb-6"
          >
            <LocalHospitalIcon fontSize="large" />
            Avdhuth Hospital
          </Link>
          <p className="text-blue-200 mb-6 text-sm leading-relaxed">
            Delivering compassionate care and advanced medicine to the
            community. Your health is our priority.
          </p>
          <div className="bg-blue-800 p-4 rounded-lg border border-blue-700">
            <p className="text-sm font-semibold uppercase tracking-wider mb-1 text-blue-300">
              Emergency (24/7)
            </p>
            <a
              href="tel:108"
              className="text-2xl font-bold text-white flex items-center gap-2 hover:text-red-400 transition"
            >
              <PhoneInTalkIcon /> 108
            </a>
          </div>
        </div>

        {/* Column 2: Patient Services */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 border-b border-blue-800 pb-2">
            Patient Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/facilities" className="hover:text-white transition">
                Facilities & Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-white transition">
                Health Packages
              </Link>
            </li>
            <li>
              <Link to="/diagnostics" className="hover:text-white transition">
                Diagnostics & Labs
              </Link>
            </li>
            <li>
              <Link to="/pharmacy" className="hover:text-white transition">
                24/7 Pharmacy
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-white transition">
                Patient Resources & FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 border-b border-blue-800 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-white transition">
                Find a Doctor
              </Link>
            </li>
            <li>
              <Link to="/departments" className="hover:text-white transition">
                Departments
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact & Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Stay Connected */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 border-b border-blue-800 pb-2">
            Discover More
          </h4>
          <ul className="space-y-3 text-sm mb-6">
            <li>
              <Link to="/blog" className="hover:text-white transition">
                Health Blog & Articles
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white transition">
                Careers
              </Link>
            </li>
          </ul>
          <Link
            to="/appointments"
            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded shadow hover:bg-blue-500 transition font-semibold w-full text-center"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        {/* Copyright */}
        <div className="text-sm text-blue-300 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Avdhuth Hospital. All rights
            reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-600 transition shadow-sm"
          >
            <FacebookIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-400 transition shadow-sm"
          >
            <TwitterIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-pink-600 transition shadow-sm"
          >
            <InstagramIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-500 transition shadow-sm"
          >
            <LinkedInIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  );
}
