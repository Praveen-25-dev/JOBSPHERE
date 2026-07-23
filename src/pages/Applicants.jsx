
import {
  FaSearch,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Applicants() {
  const [search, setSearch] = useState("");
  const { jobId } = useParams();


  const [applicants, setApplicants] = useState([]);

  const updateStatus = (id, status) => {
    setApplicants(
      applicants.map((applicant) =>
        applicant._id === id
          ? { ...applicant, status }
          : applicant
      )
    );
  };

  const filteredApplicants = applicants.filter(
    (applicant) =>
      applicant.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      applicant.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );



  useEffect(() => {
  fetchApplicants();
}, []);

const fetchApplicants = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8709/api/applications/job/${jobId}`
    );

    setApplicants(res.data);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            View Applicants
          </h1>

          <p className="text-gray-500 mt-2">
            Manage candidates who applied for this job.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <FaSearch className="absolute top-4 left-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search applicants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white pl-12 pr-4 py-4 rounded-2xl shadow outline-none"
          />
        </div>

        {/* Applicants */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredApplicants.map((applicant) => (
            <div
              key={applicant._id}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl mb-4">
                <FaUser />
              </div>

              <h2 className="text-xl font-bold">
                {applicant.name}
              </h2>

              <div className="space-y-2 mt-4 text-gray-600">

                <p className="flex items-center gap-2">
                  <FaEnvelope />
                  {applicant.email}
                </p>

                <p className="flex items-center gap-2">
                  <FaPhone />
                  {applicant.phone}
                </p>

                <p>
                  💼 {applicant.experience}
                </p>

                <p>
                  🛠️ {applicant.skills}
                </p>
              </div>

              {/* Status */}
              <div className="mt-5">
                {applicant.status === "Pending" && (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    Pending
                  </span>
                )}

                {applicant.status === "Accepted" && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Accepted
                  </span>
                )}

                {applicant.status === "Rejected" && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    Rejected
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() =>
                    updateStatus(
                      applicant._id,
                      "Accepted"
                    )
                  }
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl"
                >
                  <FaCheck />
                  Accept
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      applicant._id,
                      "Rejected"
                    )
                  }
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-xl"
                >
                  <FaTimes />
                  Reject
                </button>
              </div>

              {/* Resume Button */}
              <button className="w-full mt-3 border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50">
                View Resume
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Applicants;