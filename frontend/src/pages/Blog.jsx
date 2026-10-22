import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";

// Dummy blog data upgraded with real high-quality images
const blogPosts = [
  {
    id: 1,
    title: "Understanding the Importance of Preventive Health Checkups",
    excerpt:
      "Many serious diseases can be prevented or managed effectively if detected early. Learn why annual health screenings are crucial for adults over 30.",
    category: "Wellness",
    author: "Dr. Ramesh Patil",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    featured: true,
    imgUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "5 Heart-Healthy Habits You Can Start Today",
    excerpt:
      "Simple lifestyle changes can drastically reduce your risk of cardiovascular diseases. Here are five habits to incorporate into your daily routine.",
    category: "Cardiology",
    author: "Dr. Sneha Joshi",
    date: "Oct 05, 2023",
    readTime: "4 min read",
    featured: false,
    imgUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Managing Screen Time for Children in the Digital Age",
    excerpt:
      "Excessive screen time affects sleep and cognitive development in children. Discover healthy boundaries and alternatives for your kids.",
    category: "Pediatrics",
    author: "Dr. Amit Deshmukh",
    date: "Sep 28, 2023",
    readTime: "6 min read",
    featured: false,
    imgUrl:
      "https://images.unsplash.com/photo-1495654794940-1c0cd2aeedc1?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    title: "The Hidden Signs of Sleep Apnea You Shouldn't Ignore",
    excerpt:
      "Snoring might be more than just a nuisance. Understand the symptoms of sleep apnea and when it is time to consult a sleep specialist.",
    category: "Neurology",
    author: "Dr. Vikram Singh",
    date: "Sep 15, 2023",
    readTime: "5 min read",
    featured: false,
    imgUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Health & Wellness Blog | Avdhuth Hospital</title>
        <meta
          name="description"
          content="Stay informed with the latest medical insights, healthy lifestyle tips, and hospital news from the expert doctors at Avdhuth Hospital."
        />
      </Helmet>

      {/* 1. UPGRADED PAGE HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1726736525038-66c5306e08b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
        }}
      >
        {/* Dark Blue Overlay to make the text readable */}
        <div className="absolute inset-0 bg-[#002855]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <ArticleIcon
            sx={{ fontSize: 60 }}
            className="text-blue-300 mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Health & Wellness Blog
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Stay informed with the latest medical insights, healthy lifestyle
            tips, and hospital news from our expert doctors.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-6 py-16 flex-grow">
        {/* 2. UPGRADED FEATURED ARTICLE */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#006bd6] rounded-full inline-block"></span>
              Featured Insight
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              {/* Image Section */}
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-200">
                <img
                  src={featuredPost.imgUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-blue-50 text-[#006bd6] text-xs font-bold px-3 py-1 rounded-full mb-4 self-start uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#006bd6] transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-8">
                  <span className="flex items-center gap-1 font-medium">
                    <PersonIcon fontSize="small" /> {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <CalendarMonthIcon fontSize="small" /> {featuredPost.date}
                  </span>
                </div>
                <Link
                  to="#"
                  className="text-[#006bd6] font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Full Article <ArrowForwardIcon fontSize="small" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 3. UPGRADED RECENT ARTICLES GRID */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-[#006bd6] rounded-full inline-block"></span>
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image Section */}
                <div className="h-56 overflow-hidden bg-gray-200 border-b border-gray-100">
                  <img
                    src={post.imgUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block text-[#006bd6] text-xs font-bold mb-3 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006bd6] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <CalendarMonthIcon fontSize="inherit" /> {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Newsletter Subscription Banner */}
      <section className="bg-[#f4f9ff] py-16 px-6 border-t border-blue-100 mt-auto">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-blue-50 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get the latest health tips, hospital news, and exclusive camp
              announcements delivered straight to your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto flex-1">
            {isSubscribed ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center justify-center font-bold border border-green-200">
                <ArticleIcon className="mr-2" /> You are successfully
                subscribed!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-grow">
                  <EmailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#006bd6] outline-none transition-shadow"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#006bd6] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-md whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
