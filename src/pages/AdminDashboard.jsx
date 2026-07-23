import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaBriefcase,
  FaUsers,
  FaClipboardList,
  FaPlus,
} from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
  fetchJobs();
  fetchStats(); 
}, []);
const [stats,setStats] = useState({
  TotalJobs: 0,
  
})

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

const fetchStats = async () => {
  try {
    const res = await axios.get(
      "http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs/stats"
    );

    setStats(res.data);
  } catch (error) {
    console.log(error);
  }
};

const deleteJob = async (id) => {
  try {
    await axios.delete(
      `http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs/${id}`
    );

    fetchJobs();
  } catch (error) {
    console.log(error);
  }
};

  
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-indigo-600 text-white p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-white text-indigo-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="p-6">

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">

          {/* <div className="bg-white p-6 rounded-xl shadow">
            <FaBriefcase className="text-3xl mb-3 text-indigo-600" />
            <h2 className="text-3xl font-bold">{stats.totalJobs}</h2>
            <p>Total Jobs</p>
          </div> */}

          {/* <div className="bg-white p-6 rounded-xl shadow">
            <FaUsers className="text-3xl mb-3 text-green-600" />
            <h2 className="text-3xl font-bold"></h2>
            <p>Applicants</p>
          </div> */}

          {/* <div className="bg-white p-6 rounded-xl shadow">
            <FaClipboardList className="text-3xl mb-3 text-purple-600" />
            <h2 className="text-3xl font-bold"></h2>
            <p>Active Jobs</p>
          </div> */}

          {/* <div className="bg-white p-6 rounded-xl shadow">
            <FaBriefcase className="text-3xl mb-3 text-orange-600" />
            <h2 className="text-3xl font-bold"></h2>
            <p>Companies</p>
          </div> */}

        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Quick Actions
          </h2>

          <div className="flex gap-4 flex-wrap">

            <button
                            onClick={()=>navigate("/PostJob")}

              className="bg-indigo-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <FaPlus />

              Post Job

            </button>

            <button
              className="bg-green-600 text-white px-5 py-3 rounded-lg"
              onClick={()=>navigate("/ManageJobs")}
            >
              Manage Jobs
            </button>

    


            <button
              className="bg-purple-600 text-white px-5 py-3 rounded-lg"
              onClick={()=>navigate(`/Applicants/${job._id}`)}
            >
              View Applicants
            </button>

          </div>
          
        </div>


      </div>
    </div>
        

  );
}

export default AdminDashboard;
