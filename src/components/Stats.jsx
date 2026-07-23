import {
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

function Stats() {
  const stats = [
    
  ];

  return (
    <section className= " py-10 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
      <div className=" ">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Trusted By Thousands
          </h2>

          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Helping job seekers connect with top companies and
            build successful careers every day.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center text-white">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white mt-5">
                {item.value}
              </h3>

              <p className="text-blue-100 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;