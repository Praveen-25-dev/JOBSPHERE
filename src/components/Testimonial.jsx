import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Praveen Kumar",
      role: "Frontend Developer @ Google",
      review:
        "Within 2 months of using this platform, I landed my dream job. The application process was smooth and fast.",
    },
    {
      name: "Nikhil Sharma",
      role: "Software Engineer @ Infosys",
      review:
        "One of the best job portals for freshers. The job recommendations were highly relevant to my skills.",
    },
    {
      name: "Shadan Khan",
      role: "Remote React Developer",
      review:
        "I found a fully remote opportunity within weeks. The platform helped me connect directly with recruiters.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Success Stories From Our Users
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Thousands of professionals have found their dream jobs through our
            platform. Here’s what they say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center mt-6">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600">Jobs Posted</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-600">Successful Hires</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Companies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-600">User Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;