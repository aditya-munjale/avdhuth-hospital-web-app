import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";

// 1. Import all the page components we built
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Departments from "./pages/Departments";
import Appointments from "./pages/Appointments";
import Facilities from "./pages/Facilities";
import Packages from "./pages/Packages";
import Diagnostics from "./pages/Diagnostics";
import Pharmacy from "./pages/Pharmacy";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Main Pages */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="departments" element={<Departments />} />

            {/* Patient Services */}
            <Route path="appointments" element={<Appointments />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="packages" element={<Packages />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            <Route path="pharmacy" element={<Pharmacy />} />
            <Route path="resources" element={<Resources />} />

            {/* Media & Outreach */}
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="careers" element={<Careers />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />

            {/* Fallback for broken links */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    404 - Page Not Found
                  </h2>
                  <p className="text-gray-600">
                    The page you are looking for doesn't exist or has been
                    moved.
                  </p>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
