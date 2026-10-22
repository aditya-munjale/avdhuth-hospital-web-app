import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BiotechIcon from "@mui/icons-material/Biotech";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const diagnosticServices = [
  {
    id: 1,
    title: "Pathology & Blood Bank",
    desc: "Fully automated biochemistry, hematology, and microbiology labs offering highly accurate test results with quick turnaround times.",
    tests: [
      "Complete Blood Count (CBC)",
      "Liver Function Test (LFT)",
      "Thyroid Profile",
      "Urine Routine",
    ],
    // High-quality lab/microscope image
    imgUrl:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Radiology & Imaging",
    desc: "Advanced imaging technology providing high-resolution scans for precise diagnosis of internal injuries and diseases.",
    tests: [
      "3 Tesla MRI",
      "128-Slice CT Scan",
      "Digital X-Ray",
      "Ultrasound (3D/4D)",
    ],
    // High-quality MRI/Radiology image
    imgUrl:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cardiology Diagnostics",
    desc: "Non-invasive cardiac testing to monitor heart health, detect arrhythmias, and prevent cardiovascular diseases.",
    tests: [
      "ECG (Electrocardiogram)",
      "2D Echocardiography",
      "TMT (Stress Test)",
      "Holter Monitoring",
    ],
    // High-quality heart/ECG testing image
    imgUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Neurology & Sleep Lab",
    desc: "Specialized diagnostic procedures to evaluate brain function, nerve health, and severe sleep disorders.",
    tests: [
      "EEG (Electroencephalogram)",
      "EMG (Electromyography)",
      "Sleep Study",
      "NCV Test",
    ],
    // High-quality brain scan/neurology image
    imgUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Diagnostics() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* SEO Metadata */}
      <Helmet>
        <title>Diagnostics & Labs | Avdhuth Hospital</title>
        <meta
          name="description"
          content="NABL-accredited laboratories operating 24/7. Advanced MRI, CT Scans, Pathology, and free Home Sample Collection services."
        />
      </Helmet>

{/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark Blue Overlay to make the text readable */}
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <BiotechIcon sx={{ fontSize: 60 }} className="text-blue-300 mb-4 drop-shadow-md" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Diagnostics & Laboratory
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Accurate diagnosis is the first step to effective treatment. Our
            NABL-accredited laboratories operate 24/7 with world-class
            technology.
          </p>
        </div>
      </section>

      {/* 2. Diagnostic Departments Grid (UPGRADED WITH IMAGES) */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Our Diagnostic Centers
          </h2>
          <div className="h-1 w-20 bg-[#006bd6] mx-auto rounded"></div>
        </div>

        {/* Changed grid layout slightly to accommodate larger horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {diagnosticServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group overflow-hidden"
            >
              {/* Image Container (Left side on desktop, top on mobile) */}
              <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-gray-200 flex-shrink-0">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content (Right side on desktop, bottom on mobile) */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>

                {/* Common Tests List */}
                <div className="bg-[#f4f9ff] rounded-lg p-4 border border-blue-50 mt-auto">
                  <h4 className="text-sm font-bold text-[#006bd6] uppercase tracking-wider mb-3">
                    Common Tests
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.tests.map((test, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-700 font-medium"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {test}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Home Sample Collection CTA Banner */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#006bd6] to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white opacity-10 transform rotate-12">
            <BiotechIcon sx={{ fontSize: 250 }} />
          </div>

          <div className="text-center md:text-left relative z-10 md:w-2/3">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-sm">
              <LocalShippingIcon fontSize="small" /> Free Home Service
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Book a Home Sample Collection
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
              Can't visit the hospital? Let our expert phlebotomists come to
              you. Get safe, hygienic, and painless blood sample collection from
              the comfort of your home.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto flex flex-col gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#006bd6] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg text-center whitespace-nowrap"
            >
              Request Home Visit
            </Link>
            <p className="text-blue-200 text-sm text-center font-medium">
              Reports delivered via email / WhatsApp
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
