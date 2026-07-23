import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import JobCard from "./JobCard";
import jobs from "../data/JobsData";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function JobList() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Explore Opportunities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Latest Job Openings
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover jobs from top companies and find the perfect role
            that matches your skills and career goals.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search by job title or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-4 py-4 rounded-2xl border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-gray-500 mt-3 text-center">
            {filteredJobs.length} jobs found
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                salary={job.salary}
                location={job.location}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700">
                No Jobs Found
              </h3>

              <p className="text-gray-500 mt-3">
                Try searching with another keyword.
              </p>
            </div>
          )}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-14">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          
          >
            View All Jobs
          </button>
        </div> */}
    
        

      </div>
    </section>
  );
}

export default JobList;




// import { Link } from "react-router-dom";
// import {
//   FaMapMarkerAlt,
//   FaMoneyBillWave,
//   FaBookmark,
//   FaBriefcase,
// } from "react-icons/fa";

// function JobCard({ id, title, company, salary, location }) {
//   return (
//     <div className="group relative overflow-hidden bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

//       {/* Featured Badge */}
//       <div className="absolute top-4 right-4">
//         <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
//           Featured
//         </span>
//       </div>

//       {/* Company Logo */}
//       <div className="flex items-center gap-4">
//         <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
//           {company.charAt(0) || "C"}
//         </div>

//         <div>
//           <h3 className="font-bold text-xl text-gray-900">
//             {title}
//           </h3>

//           <p className="text-gray-500">
//             {company}
//           </p>
//         </div>
//       </div>

//       {/* Job Type */}
//       <div className="flex gap-2 mt-5">
//         <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
//           Full Time
//         </span>

//         <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//           Remote
//         </span>
//       </div>

//       {/* Details */}
//       <div className="space-y-3 mt-6">

//         <div className="flex items-center text-gray-600">
//           <FaMoneyBillWave className="mr-3 text-green-600" />
//           <span>{salary}</span>
//         </div>

//         <div className="flex items-center text-gray-600">
//           <FaMapMarkerAlt className="mr-3 text-red-500" />
//           <span>{location}</span>
//         </div>

//         <div className="flex items-center text-gray-600">
//           <FaBriefcase className="mr-3 text-blue-600" />
//           <span>1-3 Years Experience</span>
//         </div>

//       </div>

//       {/* Bottom Section */}
//       <div className="flex items-center justify-between mt-8">

//         <button className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition">
//           <FaBookmark className="text-gray-600" />
//         </button>

//         <Link to={`/job/${id}`}>
//           <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
//             Apply Now →
//           </button>
//         </Link>

//       </div>

//       {/* Hover Glow */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>

//     </div>
//   );
// }
// export default JobCard;