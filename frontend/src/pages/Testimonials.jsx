import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";

const reviews = [
  {
    id: 1,
    name: "Rajesh Kulkarni",
    treatment: "Cardiology",
    text: "The doctors at Avdhuth Hospital saved my life. The emergency response was incredibly fast, and the ICU staff took great care of me.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    treatment: "Maternity",
    text: "I had my baby delivered here. The gynecologists and nurses were so supportive, and the private room was exceptionally clean.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    treatment: "Orthopedics",
    text: "My father underwent knee replacement surgery. The physiotherapy team helped him walk again within weeks. Highly recommended!",
    rating: 4,
  },
  {
    id: 4,
    name: "Sunita Patil",
    treatment: "General Checkup",
    text: "Very systematic health checkup process. Got all my reports on WhatsApp the same day. Great management.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    treatment: "Pediatrics",
    text: "The pediatric ward is very child-friendly. Dr. Deshmukh was very patient in answering all our concerns.",
    rating: 5,
  },
  {
    id: 6,
    name: "Neha Joshi",
    treatment: "Neurology",
    text: "State-of-the-art facilities. The MRI process was smooth, and the neurologist explained the diagnosis very clearly.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <FormatQuoteIcon
            sx={{ fontSize: 60 }}
            className="text-blue-300 mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Patient Stories & Reviews
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Do not just take our word for it. Read what our patients have to say
            about their recovery and experience at Avdhuth Hospital.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <FormatQuoteIcon
                sx={{ fontSize: 40 }}
                className="absolute top-6 right-6 text-blue-50 opacity-50"
              />

              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    fontSize="small"
                    className={i < review.rating ? "" : "text-gray-200"}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic line-clamp-4">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <PersonIcon />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-blue-600 font-semibold">
                    {review.treatment} Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
