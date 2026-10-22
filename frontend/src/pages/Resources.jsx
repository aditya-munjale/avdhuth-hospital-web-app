import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Upgraded with high-quality conceptual images
const patientGuides = [
  {
    title: "Admission Process",
    desc: "Step-by-step guide on what to bring, registration, and room allocation for planned and emergency admissions.",
    imgUrl:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Insurance & Cashless",
    desc: "We are tied up with all major TPAs and health insurance providers. Visit our TPA desk in the lobby for pre-authorization.",
    imgUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Visiting Guidelines",
    desc: "General Wards: 10AM-12PM & 5PM-7PM. ICU: 11AM-12PM (Strictly one visitor allowed per patient).",
    imgUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Billing & Payments",
    desc: "We accept Cash, UPI, Credit/Debit Cards, and Net Banking. Detailed estimated bills are provided prior to procedures.",
    imgUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];

const faqs = [
  {
    question: "How do I book an appointment with a specialist?",
    answer:
      "You can book an appointment online through our 'Book Appointment' page, call our reception at +91 98765 43210, or visit the hospital in person.",
  },
  {
    question: "Do you have a 24/7 emergency department?",
    answer:
      "Yes, our Emergency and Trauma Care center operates 24/7, fully equipped with life-support systems and specialized emergency physicians. Dial 108 for immediate ambulance assistance.",
  },
  {
    question:
      "What documents should I bring for a cashless hospital admission?",
    answer:
      "Please bring your original ID proof (Aadhar/PAN), Health Insurance Card or TPA e-card, previous medical records, and the doctor's admission advice.",
  },
  {
    question: "Is there a pharmacy inside the hospital?",
    answer:
      "Yes, we have a 24/7 fully stocked pharmacy located on the ground floor. We also offer free home delivery within a 10km radius.",
  },
  {
    question: "Can I get my diagnostic reports online?",
    answer:
      "Absolutely. Once your lab or radiology reports are ready, a secure download link will be sent to your registered mobile number via SMS and WhatsApp.",
  },
];

export default function Resources() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Patient Resources & FAQs | Avdhuth Hospital</title>
        <meta
          name="description"
          content="Find all the essential information you need for your visit to Avdhuth Hospital, including admission guidelines, insurance details, and FAQs."
        />
      </Helmet>

      {/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <ContactSupportIcon
            sx={{ fontSize: 60 }}
            className="text-blue-300 mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Patient Resources & FAQs
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Everything you need to know before, during, and after your visit to
            Avdhuth Hospital. We strive to make your experience as smooth as
            possible.
          </p>
        </div>
      </section>

      {/* 2. UPGRADED QUICK GUIDES GRID (Image Cards) */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Essential Information
          </h2>
          <div className="h-1 w-20 bg-[#006bd6] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patientGuides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              <div className="h-40 overflow-hidden bg-gray-200">
                <img
                  src={guide.imgUrl}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {guide.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE FAQ (Upgraded Split Layout) */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Text & Support Prompt */}
          <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-16 bg-[#006bd6] rounded mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Find quick answers to common queries about our hospital services,
              billing, and patient care.
            </p>
            <div className="bg-[#f4f9ff] p-6 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2">
                Still have questions?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Our support team is available 24/7 to assist you.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-block bg-[#006bd6] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition w-full text-center"
              >
                Call Support
              </a>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  openFaqIndex === index
                    ? "border-[#006bd6] shadow-lg"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 bg-white flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span
                    className={`font-bold text-lg pr-4 ${openFaqIndex === index ? "text-[#006bd6]" : "text-gray-800"}`}
                  >
                    {faq.question}
                  </span>
                  <KeyboardArrowDownIcon
                    className={`text-gray-500 transition-transform duration-300 ${openFaqIndex === index ? "rotate-180 text-[#006bd6]" : ""}`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-[#f4f9ff] ${
                    openFaqIndex === index
                      ? "max-h-40 py-5 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
