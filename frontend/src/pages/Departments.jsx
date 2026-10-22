import { Link } from "react-router-dom";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    desc: "Comprehensive care for heart diseases, featuring state-of-the-art Cath Labs and 24/7 cardiac emergency services.",
    features: ["ECG & Echocardiography", "Angioplasty", "Heart Bypass Surgery"],
  },
  {
    id: 2,
    name: "Neurology",
    desc: "Advanced diagnostics and treatment for brain, spinal cord, and nervous system disorders.",
    features: ["Stroke Management", "Neuro Surgery", "EEG/EMG Services"],
  },
  {
    id: 3,
    name: "Pediatrics",
    desc: "Dedicated child healthcare ranging from newborn care to adolescent medicine with a child-friendly environment.",
    features: [
      "Vaccination Center",
      "Neonatal ICU (NICU)",
      "Pediatric Surgery",
    ],
  },
  {
    id: 4,
    name: "Orthopedics",
    desc: "Expert care for bones, joints, ligaments, and muscles, including trauma recovery and joint replacements.",
    features: ["Joint Replacement", "Sports Medicine", "Physiotherapy"],
  },
  {
    id: 5,
    name: "General Surgery",
    desc: "Minimally invasive and laparoscopic surgeries ensuring quicker recovery and minimal scarring.",
    features: ["Hernia Repair", "Appendectomy", "Gallbladder Removal"],
  },
  {
    id: 6,
    name: "Gynecology",
    desc: "Complete women’s healthcare, maternity services, and advanced gynecological surgeries.",
    features: [
      "High-risk Pregnancy",
      "Infertility Treatment",
      "Laparoscopic Surgery",
    ],
  },
];

export default function Departments() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Departments & Specialties
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Avdhuth Hospital offers a wide range of specialized medical
            departments equipped with modern technology and staffed by expert
            healthcare professionals.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-100 pb-4">
                {dept.name}
              </h3>

              <p className="text-gray-600 mb-6 flex-grow">{dept.desc}</p>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">
                  Key Services
                </h4>
                <ul className="space-y-2">
                  {dept.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex gap-3">
                <Link
                  to="/doctors"
                  className="flex-1 bg-blue-50 text-blue-700 text-center py-2.5 rounded-lg font-semibold hover:bg-blue-100 transition"
                >
                  View Doctors
                </Link>
                <Link
                  to="/appointments"
                  className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
