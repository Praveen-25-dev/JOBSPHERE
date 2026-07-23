import {
  FaBriefcase,
  FaUserTie,
  FaBuilding,
  FaRocket,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaBriefcase size={32} />,
      title: "10,000+ Active Jobs",
      desc: "Discover thousands of verified job opportunities updated daily.",
    },
    {
      icon: <FaUserTie size={32} />,
      title: "Top Recruiters",
      desc: "Connect directly with hiring managers and recruiters.",
    },
    {
      icon: <FaBuilding size={32} />,
      title: "Leading Companies",
      desc: "Apply to jobs from Google, Amazon, Microsoft, Infosys, and more.",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Fast Career Growth",
      desc: "Get matched with opportunities that align with your skills.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Your Gateway To Better Careers
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We help job seekers connect with top employers through a
            modern, fast, and trusted recruitment platform.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold"></h3>
              <p className="mt-2 text-blue-100"></p>
            </div>

            <div>
              <h3 className="text-4xl font-bold"></h3>
              <p className="mt-2 text-blue-100"></p>
            </div>

            <div>
              <h3 className="text-4xl font-bold"></h3>
              <p className="mt-2 text-blue-100"></p>
            </div>

            <div>
              <h3 className="text-4xl font-bold"></h3>
              <p className="mt-2 text-blue-100"></p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;