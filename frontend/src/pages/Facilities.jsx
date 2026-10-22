import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";

// Updated with real, high-quality medical infrastructure images
const facilities = [
  {
    id: 1,
    title: "Intensive Care Unit (ICU)",
    desc: "State-of-the-art multi-disciplinary ICUs equipped with advanced life support systems and 1:1 nursing care.",
    imgUrl:
      "https://media.istockphoto.com/id/1295301481/photo/modern-empty-temporary-intensive-care-emergency-room-is-ready-to-receive-patients-with.jpg?s=1024x1024&w=is&k=20&c=vI8RhG9UvKtXnm7jY7oSyWNiSfCHiWoKZxEsxS3Ae1M=",
  },
  {
    id: 2,
    title: "Modular Operation Theatres",
    desc: "Ultra-clean, infection-free surgical suites with advanced HEPA filters, designed for complex and minimally invasive surgeries.",
    imgUrl:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Advanced Diagnostics",
    desc: "In-house laboratory, MRI, CT scan, X-Ray, and Ultrasound facilities available 24/7 for rapid and accurate testing.",
    imgUrl:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "24/7 Pharmacy",
    desc: "Fully stocked pharmacy ensuring immediate availability of critical medicines and surgical supplies at all times.",
    imgUrl:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Blood Bank",
    desc: "Government-approved, fully equipped blood bank operating round the clock to support emergency and surgical needs.",
    imgUrl:
      "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Emergency & Trauma Care",
    desc: "Dedicated trauma center with specialized emergency physicians ready to handle critical cases instantly.",
    imgUrl:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
];

const rooms = [
  {
    type: "General Ward",
    desc: "Spacious, well-ventilated wards with shared amenities, providing excellent care at an affordable cost.",
    price: "Economy",
    imgUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "Twin Sharing Room",
    desc: "Comfortable air-conditioned rooms shared between two patients, featuring privacy curtains and individual TVs.",
    price: "Standard",
    imgUrl:
      "https://images.unsplash.com/photo-1613377512409-59c33c10c821?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    type: "Private Room",
    desc: "Single occupancy air-conditioned room with an attendant bed, private washroom, television, and direct nurse call system.",
    price: "Premium",
    imgUrl:
      "https://media.istockphoto.com/id/1297641577/photo/empty-adjustable-patient-bed-with-saline-solution-in-private-room-at-hospital.jpg?s=1024x1024&w=is&k=20&c=046Va3xaf26Y7lY5Cqk5OUSUHjUJoEn2sCYKSEjUb0k=",
  },
  {
    type: "VIP Suite",
    desc: "Luxurious suite offering a separate waiting area for visitors, premium furnishings, kitchenette, and personalized services.",
    price: "Luxury",
    imgUrl:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Facilities() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Facilities & Infrastructure | Avdhuth Hospital</title>
        <meta
          name="description"
          content="Explore Avdhuth Hospital's world-class facilities, including modular operation theatres, ICUs, advanced diagnostics, and comfortable patient accommodations."
        />
      </Helmet>

{/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark Blue Overlay to make the text readable */}
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Facilities & Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Avdhuth Hospital is built on a foundation of cutting-edge technology
            and patient-centric design, ensuring the highest standards of
            safety, comfort, and clinical excellence.
          </p>
        </div>
      </section>

      {/* 2. Core Medical Infrastructure Grid (Now with Images!) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            World-Class Medical Facilities
          </h2>
          <div className="h-1 w-20 bg-[#006bd6] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={facility.imgUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Patient Accommodations (Rooms) */}
      <section className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 flex justify-center items-center gap-3">
              <LocalHotelIcon fontSize="large" className="text-blue-500" />
              Patient Accommodations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of room categories designed to provide maximum
              comfort and hygiene for patients and their families during their
              stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-48 overflow-hidden bg-gray-200 border-b border-gray-200">
                  <img
                    src={room.imgUrl}
                    alt={room.type}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {room.type}
                    </h3>
                    <span className="bg-blue-100 text-[#006bd6] text-xs font-bold px-2 py-1 rounded">
                      {room.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {room.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="text-[#006bd6] font-semibold hover:text-blue-800 text-sm uppercase tracking-wide"
                  >
                    Enquire Availability →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
