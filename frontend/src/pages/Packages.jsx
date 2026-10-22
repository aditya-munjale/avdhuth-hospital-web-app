import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import InfoIcon from "@mui/icons-material/Info";

const healthPackages = [
  {
    id: 1,
    title: "Basic Health Checkup",
    price: "₹1,499",
    description:
      "Essential screening for general well-being and early detection of common health issues.",
    features: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting)",
      "Lipid Profile (Cholesterol)",
      "Urine Routine",
      "General Physician Consultation",
    ],
    isPopular: false,
  },
  {
    id: 2,
    title: "Comprehensive Care",
    price: "₹3,999",
    description:
      "Detailed screening for vital organs, lifestyle diseases, and overall health monitoring.",
    features: [
      "All Basic Checkup Tests",
      "Liver & Kidney Function Tests",
      "Thyroid Profile (TSH)",
      "ECG & Chest X-Ray",
      "Ultrasound (Whole Abdomen)",
      "Specialist Consultation",
    ],
    isPopular: true,
  },
  {
    id: 3,
    title: "Premium Executive",
    price: "₹7,999",
    description:
      "Advanced full-body profiling with cardiac risk assessment for complete peace of mind.",
    features: [
      "All Comprehensive Tests",
      "HbA1c & Vitamin D/B12",
      "Echocardiography (2D Echo)",
      "TMT (Treadmill Test)",
      "Pulmonary Function Test (PFT)",
      "Dietitian & Cardiologist Consult",
    ],
    isPopular: false,
  },
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark Blue Overlay to make the text readable */}
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <HealthAndSafetyIcon
            sx={{ fontSize: 60 }}
            className="text-blue-300 mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Preventive Health Packages
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Prevention is better than cure. Choose from our expertly designed
            health checkup packages to monitor your health and detect potential
            issues early.
          </p>
        </div>
      </section>

      {/* 2. Pricing Tables Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {healthPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-8 relative transition-all duration-300 ${
                pkg.isPopular
                  ? "border-2 border-blue-500 shadow-2xl md:-mt-8 md:mb-8 z-10"
                  : "border border-gray-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {/* "Most Popular" Badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center border-b border-gray-100 pb-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 h-10">
                  {pkg.description}
                </p>
                <div className="text-4xl font-extrabold text-blue-900">
                  {pkg.price}
                </div>
              </div>

              {/* Package Features List */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <CheckIcon
                      fontSize="small"
                      className="text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Link
                to="/appointments"
                className={`block w-full text-center py-3 rounded-lg font-bold transition-colors duration-300 ${
                  pkg.isPopular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                }`}
              >
                Book This Package
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Pre-test Instructions / Guidelines */}
      <section className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col md:flex-row gap-6 items-start">
          <InfoIcon
            sx={{ fontSize: 40 }}
            className="text-blue-600 flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Pre-Checkup Instructions
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                10-12 hours of overnight fasting is mandatory for blood tests.
                You may drink plain water.
              </li>
              <li>
                Please carry your previous medical records, prescriptions, and
                current medications.
              </li>
              <li>
                Wear comfortable, loose-fitting clothing and easily removable
                footwear.
              </li>
              <li>
                For TMT (Treadmill Test), men may need to shave their chest for
                ECG lead placement.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
