import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate("/jobs");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 flex items-center">

      {/* SOFTER BACKGROUND BLOBS */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            {/* badge */}
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-cyan-200 px-5 py-2 rounded-full text-sm">
              🚀 India's Fastest Growing Job Portal
            </span>

            {/* heading */}
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mt-7 leading-[1.1]">
              Find Your{" "}
              <span className="text-cyan-400">Dream Job</span>{" "}
              <br />
              Faster Than Ever
            </h1>

            {/* description */}
            <p className="text-gray-300 text-lg mt-6 max-w-xl leading-7">
              Discover thousands of opportunities from top companies.
              Search, apply and get hired in minutes.
            </p>

            {/* SEARCH BOX (more premium glass look) */}
            <div className="mt-10 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">

              <div className="grid md:grid-cols-3 gap-3">

                {/* <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/10">
                  <FaSearch className="text-cyan-300" />    
                  <input
                    type="text"
                    placeholder="Job title, keyword..."
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                  />
                </div> */}

                {/* <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/10">
                  <FaMapMarkerAlt className="text-cyan-300" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                  />
                </div> */}

                {/* <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-xl py-3 transition-all duration-300 shadow-md hover:shadow-cyan-500/20"
                onClick={()=>navigate("/jobs")}
                >
                  Search Jobs
                </button> */}

              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={handleBrowse}
                className="bg-cyan-400 text-black px-7 py-3 rounded-xl font-semibold hover:scale-[1.03] transition"
              >
                Browse Jobs
              </button>
{/* 
              <button className="px-7 py-3 rounded-xl border border-white/15 text-white hover:bg-white hover:text-black transition">
                Post a Job
              </button> */}

            </div>

            {/* STATS (cleaner cards) */}
            <div className="grid grid-cols-3 gap-4 mt-12">

              {[
                { num: "10K+", label: "Jobs" },
                { num: "5K+", label: "Companies" },
                { num: "50K+", label: "Candidates" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 text-center bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
                >
                  <h2 className="text-white text-2xl font-bold">
                    {item.num}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-center">

            <div className="relative">

              {/* softer glow */}
              <div className="absolute -top-10 -left-10 w-80 h-80 bg-cyan-400/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 blur-[120px] rounded-full" />

              <img
                src={heroImage}
                alt="hero"
                className="relative w-[520px] drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;