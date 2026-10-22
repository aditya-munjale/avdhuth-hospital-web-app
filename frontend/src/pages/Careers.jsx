import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import WorkIcon from "@mui/icons-material/Work";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Upgraded benefits with high-quality medical culture images
const benefits = [
  {
    title: "Continuous Learning",
    desc: "Regular CMEs, workshops, and training programs to keep you at the forefront of medicine.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1770325209008-15519718b961?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "State-of-the-art Tech",
    desc: "Work with the latest medical equipment and automated hospital management systems.",
    imgUrl:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Health & Wellness",
    desc: "Comprehensive medical insurance for you and your immediate family members.",
    imgUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Career Growth",
    desc: "Clear progression paths, leadership roles, and opportunities to spearhead new departments.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1682309553075-c84ea8d9d49a?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

// Upgraded job openings with professional thumbnails
const jobOpenings = [
  {
    id: 1,
    title: "Senior Cardiologist",
    department: "Cardiology",
    type: "Full-time",
    location: "Chandwad, MH",
    imgUrl:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    title: "ICU Staff Nurse",
    department: "Nursing",
    type: "Full-time / Rotational",
    location: "Chandwad, MH",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1726876998301-55445c2982a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    title: "Medical Billing Executive",
    department: "Administration",
    type: "Full-time",
    location: "Chandwad, MH",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661375173523-e53501f99674?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    title: "Resident Medical Officer (RMO)",
    department: "Emergency",
    type: "Contract",
    location: "Chandwad, MH",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

export default function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const formRef = useRef(null);

  const handleApplyClick = (jobTitle) => {
    setSelectedRole(jobTitle);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Careers | Join the Medical Family at Avdhuth Hospital</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Avdhuth Hospital. We are looking for passionate doctors, nurses, and medical staff to join our expert team."
        />
      </Helmet>

      {/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <WorkIcon
            sx={{ fontSize: 60 }}
            className="text-blue-300 mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Join Our Medical Family
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            At Avdhuth Hospital, we are always looking for passionate doctors,
            nurses, and administrative professionals who are dedicated to saving
            lives and improving community health.
          </p>
        </div>
      </section>

      {/* 2. UPGRADED BENEFITS SECTION (Now with Images!) */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Why Work With Us?
          </h2>
          <div className="h-1 w-20 bg-[#006bd6] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={benefit.imgUrl}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CURRENT OPENINGS (Now with Thumbnail Images!) */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="text-center md:text-left w-full">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">
                Current Openings
              </h2>
              <p className="text-gray-600 text-lg">
                Discover your next career opportunity below.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-[#006bd6] hover:shadow-md transition-all duration-300 group"
              >
                {/* Job Thumbnail Image */}
                <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden bg-gray-200 flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200">
                  <img
                    src={job.imgUrl}
                    alt={job.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Job Details & Apply Button */}
                <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-[#006bd6] font-bold text-sm mb-4 uppercase tracking-wider">
                      {job.department}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-medium">
                      <span className="flex items-center gap-1.5">
                        <AccessTimeIcon
                          fontSize="small"
                          className="text-gray-400"
                        />{" "}
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <LocationOnIcon
                          fontSize="small"
                          className="text-gray-400"
                        />{" "}
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="w-full sm:w-auto bg-white border-2 border-[#006bd6] text-[#006bd6] px-8 py-3 rounded-xl font-bold hover:bg-[#006bd6] hover:text-white transition-colors shadow-sm whitespace-nowrap mt-4 sm:mt-0"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM WITH BACKGROUND */}
      <section
        ref={formRef}
        className="py-20 px-6 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/90 z-0"></div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative z-10 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Submit Your Application
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Don't see a role that fits? Submit your resume anyway, and we will
              contact you when a suitable position opens up.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10 animate-fade-in space-y-4">
              <svg
                className="w-24 h-24 text-green-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-3xl font-bold text-gray-900">
                Application Received!
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
                Thank you for your interest in joining Avdhuth Hospital. Our HR
                team will review your profile and get back to you within 3-5
                business days.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-[#006bd6] font-bold hover:underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Position Applying For *
                  </label>
                  <select
                    required
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none bg-white transition-shadow"
                  >
                    <option value="">Select a role or "General Inquiry"</option>
                    <option value="General Inquiry">General Inquiry</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Upload Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:bg-[#f4f9ff] hover:border-[#006bd6] transition-all cursor-pointer relative group">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <CloudUploadIcon
                    sx={{ fontSize: 48 }}
                    className="text-[#006bd6] mb-3 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-gray-700 font-bold mb-1">
                    Drag & Drop your resume here
                  </p>
                  <p className="text-gray-500 text-sm">
                    or click to browse files
                  </p>
                  <p className="text-gray-400 text-xs mt-3">
                    Accepted formats: PDF, DOCX (Max 5MB)
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Cover Letter / Note (Optional)
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none resize-none transition-shadow"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#006bd6] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <SendIcon fontSize="small" /> Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
