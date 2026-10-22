import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

// Replaced simple icons with rich, high-quality images
const pharmacyFeatures = [
  {
    title: "24/7 Availability",
    desc: "Open round the clock, 365 days a year, including all public holidays.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661770294094-06167872e079?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "100% Genuine Medicines",
    desc: "All medications are sourced directly from authorized manufacturers and distributors.",
    imgUrl:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Doorstep Delivery",
    desc: "Free and fast medicine delivery within a 10km radius of the hospital.",
    imgUrl:
      "https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Expert Guidance",
    desc: "Trained pharmacists available to explain dosages and medication interactions.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661402282701-56099f3919ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

export default function Pharmacy() {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsUploaded(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>24/7 Pharmacy & Delivery | Avdhuth Hospital</title>
        <meta
          name="description"
          content="Order genuine medicines online from Avdhuth Hospital's 24/7 pharmacy. Upload your prescription for fast, free doorstep delivery."
        />
      </Helmet>

      {/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <LocalPharmacyIcon
            sx={{ fontSize: 60 }}
            className="text-blue-300 mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            24/7 Pharmacy Services
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Avdhuth Hospital Pharmacy ensures that you get authentic,
            high-quality medicines right when you need them.
          </p>
        </div>
      </section>

      {/* 2. Pharmacy Features Grid (UPGRADED WITH IMAGES) */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Why Choose Our Pharmacy?
          </h2>
          <div className="h-1 w-20 bg-[#006bd6] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pharmacyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={feature.imgUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Order Medicines / Upload Prescription UI (UPGRADED LEFT PANEL) */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          {/* Left Panel: Instructions with Image Overlay */}
          <div
            className="relative p-10 md:w-5/12 flex flex-col justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-[#006bd6]/90 z-0"></div>

            <div className="relative z-10 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Order Medicines Online
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Upload a valid doctor's prescription, and we will deliver the
                medicines directly to your home. It's fast, safe, and
                convenient.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center font-medium">
                  <span className="w-8 h-8 bg-white text-[#006bd6] rounded-full flex items-center justify-center mr-4 font-bold text-sm shadow-md">
                    1
                  </span>
                  Upload Prescription
                </li>
                <li className="flex items-center font-medium">
                  <span className="w-8 h-8 bg-white text-[#006bd6] rounded-full flex items-center justify-center mr-4 font-bold text-sm shadow-md">
                    2
                  </span>
                  Receive Confirmation Call
                </li>
                <li className="flex items-center font-medium">
                  <span className="w-8 h-8 bg-white text-[#006bd6] rounded-full flex items-center justify-center mr-4 font-bold text-sm shadow-md">
                    3
                  </span>
                  Pay on Delivery
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel: Upload Form */}
          <div className="p-10 md:w-7/12 flex flex-col justify-center">
            {isUploaded ? (
              <div className="text-center space-y-4 py-8 animate-fade-in">
                <svg
                  className="w-20 h-20 text-green-500 mx-auto"
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
                <h3 className="text-2xl font-bold text-gray-900">
                  Prescription Received!
                </h3>
                <p className="text-gray-600">
                  Our pharmacist is reviewing your prescription. You will
                  receive a confirmation call shortly to verify your delivery
                  address.
                </p>
                <button
                  onClick={() => setIsUploaded(false)}
                  className="mt-6 text-[#006bd6] font-bold hover:underline"
                >
                  Upload Another Prescription
                </button>
              </div>
            ) : (
              <form onSubmit={handleUpload} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Patient Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Upload File
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition cursor-pointer relative group">
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      id="prescription-upload"
                      accept=".jpg,.jpeg,.png,.pdf"
                      required
                    />
                    <CloudUploadIcon
                      sx={{ fontSize: 50 }}
                      className="text-[#006bd6] mb-3 group-hover:scale-110 transition-transform"
                    />
                    <p className="text-gray-600 font-medium mb-1">
                      Drag and drop or click to upload
                    </p>
                    <p className="text-gray-400 text-xs">
                      PDF, JPG, or PNG (Max 5MB)
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#006bd6] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Direct Contact Banner (UPGRADED WITH BACKGROUND IMAGE) */}
      <section className="bg-white py-12 px-6 border-t border-gray-200 mt-auto">
        <div
          className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between rounded-2xl p-8 shadow-xl text-center sm:text-left gap-6 relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/85 z-0"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Need medicine urgently?
            </h3>
            <p className="text-blue-100">
              Call our pharmacy desk directly for immediate assistance.
            </p>
          </div>
          <a
            href="tel:+919876543211"
            className="relative z-10 bg-white text-blue-900 px-8 py-3 rounded-lg font-extrabold text-lg flex items-center gap-2 hover:bg-gray-100 transition whitespace-nowrap shadow-md"
          >
            <PhoneInTalkIcon /> +91 98765 43211
          </a>
        </div>
      </section>
    </div>
  );
}
