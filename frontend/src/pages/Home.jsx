import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ShieldIcon from "@mui/icons-material/Shield";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>Avdhuth Hospital | Better Health, Brighter Tomorrow</title>
        <meta
          name="description"
          content="Avdhuth Hospital provides world-class healthcare with state-of-the-art facilities and expert medical professionals dedicated to your well-being."
        />
      </Helmet>

      {/* 1. HERO SECTION (With extra bottom padding for floating cards) */}
      <section className="relative w-full bg-[#f4f9ff] overflow-hidden flex items-center min-h-[600px] pb-24">
        {/* Seamless Fading Background Image */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f9ff] via-[#f4f9ff]/90 to-transparent z-10 md:via-[#f4f9ff]/20"></div>
          <img
            src="https://images.unsplash.com/photo-1775947933085-30050ddad6b3?q=80&w=2070&auto=format&fit=crop"
            alt="Doctor caring for patient"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-16">
          <div className="max-w-xl">
            <span className="text-gray-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4 block flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#006bd6] inline-block"></span>
              Health • Care • Trust
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#002855] leading-[1.15] mb-6 tracking-tight">
              Better Health <br />{" "}
              <span className="text-[#006bd6]">Brighter Tomorrow</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-md font-medium">
              Avdhuth Hospital provides world-class healthcare with
              state-of-the-art facilities and expert medical professionals
              dedicated to your complete well-being.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/about"
                className="w-full sm:w-auto bg-white border-2 border-[#006bd6] text-[#006bd6] px-8 py-3.5 rounded-xl font-bold hover:bg-[#006bd6] hover:text-white transition-all text-center shadow-sm"
              >
                Explore Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING ACTION CARDS (Replaces the ugly red banner) */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 -mt-28 mb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Emergency Card (Premium Red Gradient) */}
          <div className="bg-gradient-to-br from-[#da291c] to-[#a81a10] rounded-2xl p-8 text-white shadow-2xl flex flex-col justify-between transform transition hover:-translate-y-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Emergency</h3>
                <p className="text-red-100 text-sm">24/7 Trauma & Ambulance</p>
              </div>
              <PhoneCallbackIcon
                sx={{ fontSize: 40 }}
                className="text-white opacity-80 animate-pulse"
              />
            </div>
            <a
              href="tel:108"
              className="bg-white text-[#da291c] text-center py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-md"
            >
              Dial 108
            </a>
          </div>

          {/* Book Appointment Card (Premium Blue Gradient) */}
          <div className="bg-gradient-to-br from-[#006bd6] to-[#00478f] rounded-2xl p-8 text-white shadow-2xl flex flex-col justify-between transform transition hover:-translate-y-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Book a Visit</h3>
                <p className="text-blue-100 text-sm">
                  Schedule your consultation
                </p>
              </div>
              <CalendarMonthIcon
                sx={{ fontSize: 40 }}
                className="text-white opacity-80"
              />
            </div>
            <Link
              to="/appointments"
              className="bg-white text-[#006bd6] text-center py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-md"
            >
              Book Appointment
            </Link>
          </div>

          {/* Find a Doctor Card (Clean White) */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl border border-gray-100 flex flex-col justify-between transform transition hover:-translate-y-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1 text-[#002855]">
                  Find a Doctor
                </h3>
                <p className="text-gray-500 text-sm">
                  Search by specialty or name
                </p>
              </div>
              <SearchIcon
                sx={{ fontSize: 40 }}
                className="text-[#006bd6] opacity-80"
              />
            </div>
            <Link
              to="/doctors"
              className="bg-[#f4f9ff] border border-blue-100 text-[#006bd6] text-center py-3 rounded-lg font-bold text-lg hover:bg-[#006bd6] hover:text-white transition shadow-sm"
            >
              Search Directory
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SLEEK ACCREDITATIONS BAR */}
      <section className="bg-white py-10 border-y border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-gray-600">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
              <VerifiedUserIcon className="text-green-600" fontSize="medium" />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 text-lg">
                NABH Accredited
              </p>
              <p className="text-sm font-medium text-gray-500">
                National Quality Standards
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-14 bg-gray-200"></div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
              <ShieldIcon className="text-[#006bd6]" fontSize="medium" />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 text-lg">
                NABL Certified Labs
              </p>
              <p className="text-sm font-medium text-gray-500">
                100% Accurate Diagnostics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UPGRADED CHAIRMAN'S MESSAGE */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Image with Decorative Backdrop */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#006bd6] rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
              alt="Chairman of Avdhuth Hospital"
              className="relative z-10 rounded-3xl shadow-xl w-full object-cover h-[450px]"
            />
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-gray-100">
              <p className="text-4xl font-extrabold text-[#006bd6]">25+</p>
              <p className="text-gray-600 font-bold text-sm uppercase tracking-wider">
                Years of
                <br />
                Excellence
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 relative">
            <FormatQuoteIcon
              sx={{ fontSize: 120 }}
              className="absolute -top-10 -left-10 text-gray-100 z-0"
            />
            <div className="relative z-10">
              <span className="text-[#006bd6] font-bold tracking-wider text-sm uppercase mb-2 block">
                Our Visionary
              </span>
              <h2 className="text-4xl font-extrabold text-[#002855] leading-tight mb-6">
                Commitment to <br /> Clinical Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                "When we founded Avdhuth Hospital, our vision was simple yet
                profound: to bring globally recognized healthcare standards to
                our local community. We believe that distance should never be a
                barrier to life-saving medical care."
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, supported by a multidisciplinary team of exceptional
                doctors, cutting-edge surgical technology, and a deeply
                compassionate nursing staff, we are proud to be the region's
                most trusted healthcare destination. Your health is our life's
                work.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-[#f4f9ff] rounded-full flex items-center justify-center text-[#006bd6] font-bold text-xl">
                  AS
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 text-xl">
                    Dr. Avdhuth Shinde
                  </p>
                  <p className="text-[#006bd6] font-semibold">
                    Founder & Chief Medical Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Upgraded with Images) */}
      <section className="py-20 px-6 bg-[#f4f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002855] mb-4">
              Why Choose Avdhuth Hospital?
            </h2>
            <div className="h-1.5 w-24 bg-[#006bd6] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Delivering exceptional clinical outcomes with compassion, advanced
              technology, and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Doctors",
                desc: "Our team comprises highly qualified specialists with decades of experience from top medical institutes.",
                imgUrl:
                  "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
              },
              {
                title: "Advanced Technology",
                desc: "Equipped with state-of-the-art diagnostic and surgical technology to ensure precision and safety.",
                imgUrl:
                  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "24/7 Patient Care",
                desc: "Round-the-clock emergency, pharmacy, and dedicated nursing support for uninterrupted healing.",
                imgUrl:
                  "https://plus.unsplash.com/premium_photo-1726812035506-f94167811f77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col group"
              >
                {/* Image Header */}
                <div className="h-56 overflow-hidden bg-gray-200 relative">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay to make it look premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Content */}
                <div className="p-8 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CENTRES OF EXCELLENCE (Keep existing image layout) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#002855] mb-4">
                Centres of Excellence
              </h2>
              <div className="h-1.5 w-24 bg-[#006bd6] rounded-full mb-4"></div>
              <p className="text-gray-600 max-w-2xl text-lg">
                Comprehensive, multidisciplinary healthcare services equipped
                with the latest technology.
              </p>
            </div>
            <Link
              to="/departments"
              className="hidden md:inline-block text-[#006bd6] font-bold hover:underline"
            >
              View All Departments →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cardiology",
                desc: "Comprehensive heart care including angiography and bypass surgeries.",
                imgUrl:
                  "https://plus.unsplash.com/premium_photo-1718349374495-b1d09644f973?q=80&w=1332&auto=format&fit=crop",
              },
              {
                title: "Neurology",
                desc: "Expert treatment for stroke, spinal injuries, and complex tumors.",
                imgUrl:
                  "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Pediatrics & NICU",
                desc: "Specialized care for infants, featuring a Level-3 Neonatal ICU.",
                imgUrl:
                  "https://images.unsplash.com/photo-1507688270584-0566e2c493f6?q=80&w=1171&auto=format&fit=crop",
              },
              {
                title: "General Surgery",
                desc: "Minimally invasive procedures ensuring faster recovery times.",
                imgUrl:
                  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col group"
              >
                <div className="h-56 overflow-hidden bg-gray-100 relative">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    {service.desc}
                  </p>
                  <Link
                    to="/departments"
                    className="text-[#006bd6] font-bold text-sm uppercase tracking-wider hover:text-blue-800 mt-auto"
                  >
                    Explore Department →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/departments"
            className="md:hidden block text-center mt-8 text-[#006bd6] font-bold hover:underline text-lg"
          >
            View All Departments →
          </Link>
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#002855] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Patient Success Stories
            </h2>
            <div className="h-1.5 w-24 bg-white/30 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kulkarni",
                dept: "Cardiology",
                text: "The emergency response was incredibly fast. The doctors here literally saved my life during a critical cardiac event.",
              },
              {
                name: "Priya Sharma",
                dept: "Maternity",
                text: "I had my baby delivered here. The nursing staff was so supportive, and the private suites were exceptionally clean and comfortable.",
              },
              {
                name: "Amit Deshmukh",
                dept: "Orthopedics",
                text: "My father underwent knee replacement. The physiotherapy team helped him walk again within weeks. Highly recommended!",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl relative border border-white/20 hover:bg-white/20 transition-colors"
              >
                <FormatQuoteIcon
                  sx={{ fontSize: 50 }}
                  className="absolute top-6 right-6 text-white/20"
                />
                <div className="flex gap-1 text-yellow-400 mb-6">
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                </div>
                <p className="text-blue-50 italic mb-8 relative z-10 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-white text-lg">
                    {review.name}
                  </h4>
                  <p className="text-sm text-blue-200 font-medium">
                    {review.dept} Patient
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-block bg-white text-[#002855] px-10 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
