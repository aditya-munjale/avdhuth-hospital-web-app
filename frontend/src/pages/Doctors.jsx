import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// Updated data with high-quality Unsplash portraits
const doctorsList = [
  {
    id: 1,
    name: "Dr. Ramesh Patil",
    specialty: "Cardiology",
    qualification: "MBBS, MD (Medicine), DM (Cardiology)",
    experience: "15+ Years",
    imgUrl:
      "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    name: "Dr. Sneha Joshi",
    specialty: "Neurology",
    qualification: "MBBS, MD, DM (Neurology)",
    experience: "12+ Years",
    imgUrl:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    name: "Dr. Amit Deshmukh",
    specialty: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "10+ Years",
    imgUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Dr. Priya Kadam",
    specialty: "General Surgery",
    qualification: "MBBS, MS (General Surgery)",
    experience: "8+ Years",
    imgUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    specialty: "Orthopedics",
    qualification: "MBBS, MS (Ortho)",
    experience: "14+ Years",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661699704375-847063f963c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 6,
    name: "Dr. Neha Sharma",
    specialty: "Gynecology",
    qualification: "MBBS, MD (OBGYN)",
    experience: "11+ Years",
    imgUrl:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = [
    "All",
    ...new Set(doctorsList.map((doc) => doc.specialty)),
  ];

  const filteredDoctors = doctorsList.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col">
      <Helmet>
        <title>Our Doctors | Expert Medical Team at Avdhuth Hospital</title>
        <meta
          name="description"
          content="Meet our highly qualified and experienced specialists at Avdhuth Hospital. Search by doctor name or specialty and book your appointment today."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto w-full flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Our Medical Experts
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced specialists
            dedicated to providing you with the best possible care.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006bd6] focus:border-transparent transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/4">
            <select
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006bd6] bg-white cursor-pointer"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                {/* Doctor Portrait */}
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={doctor.imgUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Doctor Details */}
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 mx-auto">
                    {doctor.specialty}
                  </span>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold text-gray-800">
                      Qualifications:
                    </span>{" "}
                    {doctor.qualification}
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    <span className="font-semibold text-gray-800">
                      Experience:
                    </span>{" "}
                    {doctor.experience}
                  </p>

                  <Link
                    to="/appointments"
                    className="mt-auto w-full bg-white border-2 border-[#006bd6] text-[#006bd6] py-2.5 rounded-lg font-semibold hover:bg-[#006bd6] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <CalendarMonthIcon fontSize="small" /> Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-xl text-gray-500">
              No doctors found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialty("All");
              }}
              className="mt-4 text-[#006bd6] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
