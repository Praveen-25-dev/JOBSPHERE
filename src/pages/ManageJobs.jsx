
import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ManageJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(
        // "http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs"
        "https://jobsphere-lnmi.onrender.com/api/auth/jobs"
      );

      setJobs(res.data);
    } catch (error) {
      console.log("Error fetching jobs:", error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(
        `http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs/${id}`
      );

      setJobs(
        jobs.filter((job) => job._id !== id)
      );
    } catch (error) {
      console.log("Error deleting job:", error);
    }
  };

  

  const filteredJobs = jobs.filter(
    (job) =>
      job.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      job.company
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Manage Jobs
        </h1>

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-3 border rounded-xl mb-8"
        />

        {filteredJobs.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <h2 className="text-2xl font-semibold">
              No Jobs Found
            </h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white p-6 rounded-3xl shadow-lg"
              >
                <h2 className="text-2xl font-bold">
                  {job.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {job.company}
                </p>

                <p>📍 {job.location}</p>
                <p>💰 {job.salary}</p>
                <p>💼 {job.type}</p>
                <p>🧑‍💻 {job.experience}</p>

                {job.skills && (
                  <p>
                    🏷 Skills: {job.skills}
                  </p>
                )}

                <div className="flex gap-3 mt-6">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-l"
                  onClick={() => navigate(`/edit-job/${job._id}`)}
                  >
                    <FaEdit />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteJob(job._id)
                    }
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ManageJobs;

