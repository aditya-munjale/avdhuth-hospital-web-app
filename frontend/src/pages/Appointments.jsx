import { useState } from "react";
import { Link } from "react-router-dom";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function Appointments() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send formData to your Node/Express backend
    console.log("Form Submitted: ", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Information Panel */}
        <div className="bg-blue-900 text-white p-10 md:w-2/5 flex flex-col justify-center">
          <EventAvailableIcon
            sx={{ fontSize: 60 }}
            className="mb-6 text-blue-300"
          />
          <h2 className="text-3xl font-bold mb-4">Book Your Visit</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Schedule an appointment with our expert medical team. We ensure
            top-quality healthcare tailored to your needs.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-blue-200">Emergency Call</p>
              <p className="text-xl font-bold">108 / +91 98765 43210</p>
            </div>
            <div>
              <p className="font-semibold text-blue-200">Working Hours</p>
              <p>24/7 (Emergency)</p>
              <p>OPD: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="p-10 md:w-3/5">
          {isSubmitted ? (
            // Success State UI
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
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
              <h3 className="text-3xl font-bold text-gray-800">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600">
                Thank you,{" "}
                <span className="font-semibold">{formData.name}</span>. Your
                appointment request has been received. Our team will contact you
                shortly to confirm the exact time.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            // Form UI
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Patient Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Department Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department *
                  </label>
                  <select
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white outline-none transition"
                  >
                    <option value="">Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="General Surgery">General Surgery</option>
                  </select>
                </div>

                {/* Doctor Selection (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Doctor
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white outline-none transition"
                  >
                    <option value="">Any Available Doctor</option>
                    <option value="Dr. Ramesh Patil">Dr. Ramesh Patil</option>
                    <option value="Dr. Sneha Joshi">Dr. Sneha Joshi</option>
                    <option value="Dr. Amit Deshmukh">Dr. Amit Deshmukh</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Symptoms or Notes (Optional)
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Please briefly describe your symptoms or reason for visit..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
