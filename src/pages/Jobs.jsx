import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs"
        );

        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All"
        ? true
        : job.category === category;

    return matchesSearch && matchesCategory;
  });

  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;

  const currentJobs = filteredJobs.slice(
    firstJobIndex,
    lastJobIndex
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto py-20 px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Find Opportunities
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-3">
              Explore Latest Jobs
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Find jobs from top companies and grow your career.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-12">
            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="🔍 Search jobs..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Jobs</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
              </select>

            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {currentJobs.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <h2 className="text-4xl font-bold text-gray-700">
                  No Jobs Found
                </h2>

                <p className="text-gray-500 mt-3">
                  Try searching with another keyword.
                </p>
              </div>
            ) : (
              currentJobs.map((job) => (
                <JobCard
                  key={job._id}
                  id={job._id}
                  title={job.title}
                  company={job.company}
                  salary={job.salary}
                  location={job.location}
                  logo={job.logo}
                />
              ))
            )}

          </div>

          {/* Pagination */}
          {filteredJobs.length > jobsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-14">

              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage(currentPage - 1)
                }
                className="bg-white shadow border px-6 py-3 rounded-xl disabled:opacity-50"
              >
                Previous
              </button>

              <div className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold">
                {currentPage}
              </div>

              <button
                disabled={
                  currentPage ===
                  Math.ceil(filteredJobs.length / jobsPerPage)
                }
                onClick={() =>
                  setCurrentPage(currentPage + 1)
                }
                className="bg-blue-600 text-white px-6 py-3 rounded-xl disabled:opacity-50"
              >
                Next
              </button>

            </div>
          )}

        </div>

        <Footer />
      </div>
    </>
  );
}

export default Jobs;