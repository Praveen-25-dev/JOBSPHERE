import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import axios from "axios";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  // useEffect(() => {
  //   const savedApplications =
  //     JSON.parse(localStorage.getItem("appliedJobs")) || [];

  //   setApplications(savedApplications);
  // }, []);

  useEffect(() => {
  const fetchApplications = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const res = await axios.get(
        // `http://localhost:https://jobsphere-lnmi.onrender.com/api/applications/user/${user._id}`
        `https://jobsphere-lnmi.onrender.com/api/auth/loggedin/applications/user/${user._id}`
      );

      setApplications(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchApplications();
}, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg mb-8">
          <h1 className="text-4xl font-bold">
            My Applications
          </h1>

          <p className="mt-2 text-blue-100">
            Track all jobs you've applied for.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 bg-white/20 px-5 py-3 rounded-2xl">
            <FaBriefcase />
            <span className="font-semibold">
              {applications.length} Applications
            </span>
          </div>
        </div>

        {/* Empty State */}
        {applications.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
              <FaBriefcase className="text-4xl text-blue-600" />
            </div>

            <h2 className="text-2xl font-bold mt-5">
              No Applications Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Start applying for jobs and track them here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                {/* Top */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
  {app.job.title}
</h2>
                    {/* <h2 className="text-2xl font-bold text-gray-800">
                      {app.name}
                    </h2> */}

                    <p className="text-sm text-gray-500 mt-1">
                      Job Application
                    </p>
                  </div>

                  <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">
                    <FaBriefcase size={20} />
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-gray-700">
                    <FaEnvelope className="text-blue-500" />
                    <span>{app.email}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <FaPhone className="text-green-500" />
                    <span>{app.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCalendarAlt className="text-orange-500" />
                    <span>{new Date(app.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="mt-5">
                  <p className="text-sm text-gray-500 mb-2">
                    Cover Letter
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-4 text-gray-700 text-sm leading-relaxed">
                    {app.coverLetter}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyApplications;
