import { useState } from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapIcon from '@mui/icons-material/Map';
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      
      {/* 1. Page Header */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact & Emergency</h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            We are here for you 24/7. Whether it is an emergency, a general enquiry, or feedback, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* 2. Emergency Red Banner */}
      <section className="max-w-5xl mx-auto w-full px-6 -mt-8 relative z-10">
        <div className="bg-red-600 rounded-2xl p-8 shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-white">
          <div className="text-white">
            <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-3 mb-2">
              <PhoneInTalkIcon fontSize="large" className="animate-pulse" />
              24/7 Emergency & Ambulance
            </h2>
            <p className="text-red-100 text-lg">In case of a medical emergency, call us immediately.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:108" className="bg-white text-red-600 px-8 py-3 rounded-lg font-extrabold text-xl shadow hover:bg-gray-100 transition text-center">
              Dial 108
            </a>
            <a href="tel:+919876543210" className="bg-red-800 text-white px-6 py-3 rounded-lg font-bold text-lg shadow border border-red-500 hover:bg-red-900 transition text-center">
              +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* 3. Contact Info & Enquiry Form Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Information Cards */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <LocationOnIcon fontSize="large" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Hospital Address</h3>
              <p className="text-gray-600">Avdhuth Hospital, Main Road,<br/>Chandwad, Maharashtra, India - 423101</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <EmailIcon fontSize="large" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600">info@avdhuthhospital.com<br/>support@avdhuthhospital.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <AccessTimeIcon fontSize="large" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Visiting Hours</h3>
              <p className="text-gray-600">General Wards: 10:00 AM - 12:00 PM & 5:00 PM - 7:00 PM<br/>ICU: 11:00 AM - 12:00 PM (One visitor only)</p>
            </div>
          </div>
        </div>

        {/* Right Side: General Enquiry Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Send an Enquiry</h2>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 h-full space-y-4">
              <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
              <p className="text-gray-600">Thank you for reaching out. Our support team will get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows="4" required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <SendIcon fontSize="small" /> Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 4. Google Maps Placeholder */}
      <section className="w-full h-96 bg-gray-200 border-t border-gray-300 relative flex flex-col items-center justify-center overflow-hidden">
        {/* Fake map grid pattern to look like a map placeholder */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <MapIcon sx={{ fontSize: 80 }} className="text-gray-400 mb-4 relative z-10" />
        <h3 className="text-2xl font-bold text-gray-600 relative z-10">Google Maps Integration</h3>
        <p className="text-gray-500 relative z-10 mb-4">Iframe will be embedded here.</p>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="relative z-10 bg-white text-gray-700 px-6 py-2 rounded shadow border border-gray-300 hover:bg-gray-50 transition">
          View on Maps
        </a>
      </section>

      {/* 5. Floating WhatsApp & Call Buttons (Fixed to Bottom Right) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href="tel:+919876543210" 
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          title="Call Us"
        >
          <PhoneInTalkIcon fontSize="medium" />
        </a>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon fontSize="medium" />
        </a>
      </div>

    </div>
  );
}