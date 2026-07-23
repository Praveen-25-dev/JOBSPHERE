import { FaBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function JobCard({
  id,
  title,
  company,
  salary,
  location,
  logo,
}) {
  const navigate = useNavigate();

  const handleSaveJob = () => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    const alreadySaved = savedJobs.find(
      (job) => job.id === id
    );

    if (alreadySaved) {
      alert("Job already saved!");
      return;
    }

    savedJobs.push({
      id,
      title,
      company,
      salary,
      location,
      logo,
    });

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(savedJobs)
    );

    alert("Job Saved Successfully!");
  };

  return (
    <div className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Save Job */}
      <button
        onClick={handleSaveJob}
        className="absolute top-5 right-5 text-red-500 hover:scale-110 transition"
      >
        {/* <FaHeart size={20} /> */}
      </button>

      {/* Top Section */}
      <div className="flex justify-between items-start mb-6">

        {logo && (
          <div className="w-16 h-16 rounded-2xl bg-gray-50 shadow flex items-center justify-center">
            <img
              src={logo}
              alt={company}
              className="w-12 h-12 object-contain"
            />
          </div>
        )}

        <span className="bg-blue-300 px-4 py-2 rounded-full font-bold text-lg">
          {salary}
        </span>

      </div>

      {/* Job Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-5">
        {title}
      </h2>

      {/* Company */}
      <div className="flex items-center gap-3 text-gray-600 mb-3">
        <FaBuilding />
        <span>{company}</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 text-gray-600 mb-5">
        <IoLocationSharp />
        <span>{location || "Remote"}</span>
      </div>

      {/* Tags */}
      <div className="flex gap-3 mb-6">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
          Full Time
        </span>

        <span className="bg-purple-100 px-4 py-2 rounded-full text-sm font-medium">
          Remote
        </span>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Buttons */}
      <div className="space-y-4">

        <button
          onClick={() => navigate(`/job/${id}`)}
          className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-2xl font-semibold hover:scale-105 transition"
        >
          View Details
        </button>

        <button
          onClick={() => navigate(`/apply/${id}`)}
          className="w-full bg-blue-500 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobCard;