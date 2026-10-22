import { useState } from "react";
import { Helmet } from "react-helmet-async";
import CollectionsIcon from "@mui/icons-material/Collections";

// Upgraded with real, high-quality Unsplash medical images
const galleryItems = [
  {
    id: 1,
    category: "Infrastructure",
    title: "Main Hospital Building",
    imgUrl:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Infrastructure",
    title: "Advanced ICU Setup",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1663011454840-48f5fffb737b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    category: "Infrastructure",
    title: "Modular Operation Theatre",
    imgUrl:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Infrastructure",
    title: "Premium Patient Room",
    imgUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Events",
    title: "Free Health Checkup Camp",
    imgUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Events",
    title: "Blood Donation Drive",
    imgUrl:
      "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    category: "Medical Team",
    title: "Surgical Team Briefing",
    imgUrl:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 8,
    category: "Medical Team",
    title: "Expert Physicians",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 9,
    category: "Medical Team",
    title: "Compassionate Nursing Staff",
    imgUrl:
      "https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const categories = ["All", "Infrastructure", "Events", "Medical Team"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Hospital Gallery | Avdhuth Hospital</title>
        <meta
          name="description"
          content="Take a visual tour of Avdhuth Hospital's state-of-the-art facilities, community events, and dedicated medical team."
        />
      </Helmet>

      {/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <CollectionsIcon
            sx={{ fontSize: 60 }}
            className="text-blue-300 mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Life at Avdhuth Hospital
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Take a visual tour of our state-of-the-art facilities, community
            events, and the dedicated medical team that makes it all happen.
          </p>
        </div>
      </section>

      {/* 2. GALLERY GRID SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full flex-grow">
        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 border-2 ${
                activeCategory === category
                  ? "bg-[#006bd6] border-[#006bd6] text-white shadow-lg transform scale-105"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#006bd6] hover:text-[#006bd6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* High-Resolution Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="h-72 overflow-hidden bg-gray-200 w-full">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Dark Gradient Overlay & Text (Appears on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/90 via-[#002855]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-blue-100/20 backdrop-blur-sm text-blue-200 text-xs font-bold uppercase tracking-wider mb-2 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <CollectionsIcon
              sx={{ fontSize: 60 }}
              className="text-gray-300 mb-4"
            />
            <p className="text-xl font-semibold">
              No images found for this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
