import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";

// --- CUSTOM COUNTER COMPONENT ---
const AnimatedCounter = ({ end, suffix = "+", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(
        Math.floor((progress / duration) * end),
        end,
      );
      setCount(currentCount);

      if (progress < duration) {
        window.requestAnimationFrame(animateCount);
      }
    };

    window.requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>About Us | Avdhuth Hospital's Legacy of Care</title>
        <meta
          name="description"
          content="Learn about Avdhuth Hospital's history, mission, and vision. We are committed to providing top-tier medical facilities and specialized doctors in Maharashtra."
        />
      </Helmet>

      {/* 1. PAGE HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 px-6 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#002855]/70 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Our Legacy of Care
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Delivering compassionate care and clinical excellence to the
            community. We are committed to making world-class healthcare
            accessible to everyone, treating every patient like family.
          </p>
        </div>
      </section>

      {/* 2. UPGRADED: A JOURNEY OF TRUST (Seamless Homepage Style) */}
      <section className="relative w-full bg-white overflow-hidden flex items-center min-h-[500px]">
        {/* Seamless Fading Background Image */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 md:via-white/30"></div>
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Hospital Legacy"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center gap-3 mb-6">
              <EmojiEventsIcon fontSize="large" className="text-[#006bd6]" />A
              Journey of Trust
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Established with a vision to transform healthcare in Maharashtra,
              Avdhuth Hospital started as a modest 20-bed clinic. Over the
              years, driven by our commitment to patient-centric care, we have
              grown into a multi-specialty healthcare institution.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we stand proud with state-of-the-art infrastructure,
              advanced diagnostic capabilities, and a dedicated team of medical
              professionals who work tirelessly to save lives and promote
              wellness.
            </p>
          </div>
        </div>
      </section>

      {/* 3. UPGRADED: VISION & MISSION WITH IMAGES */}
      <section className="bg-[#f4f9ff] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-xl transition duration-300 group overflow-hidden flex flex-col">
            <div className="h-64 overflow-hidden relative bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
                alt="Our Vision"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
                  <VisibilityIcon fontSize="large" className="text-blue-200" />{" "}
                  Our Vision
                </h3>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted healthcare partner in the region,
                recognized for clinical excellence, innovation, and
                compassionate patient care that meets global standards.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-xl transition duration-300 group overflow-hidden flex flex-col">
            <div className="h-64 overflow-hidden relative bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Our Mission"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
                  <FlagIcon fontSize="large" className="text-blue-200" /> Our
                  Mission
                </h3>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide accessible, affordable, and high-quality medical
                services. We strive to continuously upgrade our technology,
                empower our medical staff, and ensure every patient is treated
                with dignity and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Stats / Achievements */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <LocalHospitalIcon
              sx={{ fontSize: 50 }}
              className="text-[#006bd6] mb-4"
            />
            <h4 className="text-4xl font-extrabold text-gray-900 mb-2">
              <AnimatedCounter end={150} duration={2000} />
            </h4>
            <p className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
              Hospital Beds
            </p>
          </div>

          <div className="p-6">
            <PeopleIcon sx={{ fontSize: 50 }} className="text-[#006bd6] mb-4" />
            <h4 className="text-4xl font-extrabold text-gray-900 mb-2">
              <AnimatedCounter end={50} duration={2000} />
            </h4>
            <p className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
              Specialist Doctors
            </p>
          </div>

          <div className="p-6">
            <EmojiEventsIcon
              sx={{ fontSize: 50 }}
              className="text-[#006bd6] mb-4"
            />
            <h4 className="text-4xl font-extrabold text-gray-900 mb-2">
              <AnimatedCounter end={20} duration={2000} />
            </h4>
            <p className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
              Years of Trust
            </p>
          </div>

          <div className="p-6">
            <VisibilityIcon
              sx={{ fontSize: 50 }}
              className="text-[#006bd6] mb-4"
            />
            <h4 className="text-4xl font-extrabold text-gray-900 mb-2">
              <AnimatedCounter end={10} suffix="k+" duration={2000} />
            </h4>
            <p className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
              Happy Patients
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-[#006bd6] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 tracking-wide">
          Experience Healthcare that Cares
        </h2>
        <Link
          to="/appointments"
          className="inline-block bg-white text-[#006bd6] px-10 py-4 rounded-md font-bold text-lg hover:bg-[#eef5fc] transition shadow-lg"
        >
          Book Your Consultation
        </Link>
      </section>
    </div>
  );
}
