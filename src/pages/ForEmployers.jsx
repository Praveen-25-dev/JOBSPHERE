import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import {
  FaUsers,
  FaBriefcase,
  FaRocket,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";


function ForEmployers() {
  const features = [
    {
      icon: <FaBriefcase size={30} />,
      title: "Post Jobs Easily",
      desc: "Create and publish job openings in minutes.",
    },
    {
      icon: <FaUsers size={30} />,
      title: "Access Talent Pool",
      desc: "Reach thousands of qualified candidates.",
    },
    {
      icon: <FaRocket size={30} />,
      title: "Fast Hiring",
      desc: "Shortlist and hire candidates faster.",
    },
    {
      icon: <FaChartLine size={30} />,
      title: "Track Performance",
      desc: "Monitor job views and applications.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <NavBar/>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hire Top Talent Faster
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Post jobs, manage applications and hire the best candidates
            for your company.
          </p>

          <button
          onClick={()=>navigate("/postjob")}
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
           
          >
            Post a Job
          </button>

        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow text-center">
              <h2 className="text-4xl font-bold text-blue-600">10K+</h2>
              <p className="text-gray-600 mt-2">Candidates</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center">
              <h2 className="text-4xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-600 mt-2">Companies</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center">
              <h2 className="text-4xl font-bold text-blue-600">5K+</h2>
              <p className="text-gray-600 mt-2">Jobs Posted</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center">
              <h2 className="text-4xl font-bold text-blue-600">95%</h2>
              <p className="text-gray-600 mt-2">Hiring Success</p>
            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Employers Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-500">
                  {feature.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Create Employer Account",
              "Post a Job",
              "Receive Applications",
              "Hire Candidates",
            ].map((step, index) => (
              <div
                key={step}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>

                <h3 className="font-semibold text-lg">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Pricing Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold">Starter</h3>
              <h2 className="text-5xl font-bold my-6">₹0</h2>

              <ul className="space-y-4">
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-green-500" />
                  1 Job Post
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-green-500" />
                  Basic Support
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-2xl scale-105 hover:scale-105 transition">
              <h3 className="text-2xl font-bold">Professional</h3>
              <h2 className="text-5xl font-bold my-6">₹499</h2>

              <ul className="space-y-4">
                <li>Unlimited Job Posts</li>
                <li>Priority Listing</li>
                <li>Premium Support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <h2 className="text-5xl font-bold my-6">Custom</h2>

              <ul className="space-y-4">
                <li>Dedicated Manager</li>
                <li>Custom Hiring Solutions</li>
                <li>24/7 Support</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white text-center">

        <h2 className="text-5xl font-bold mb-6">
          Ready To Hire?
        </h2>

        <p className="text-xl mb-8">
          Start hiring top candidates today.
        </p>

        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
          Post a Job Now
        </button>

      </section>
      <Footer/>

    </div>
  );
}

export default ForEmployers;