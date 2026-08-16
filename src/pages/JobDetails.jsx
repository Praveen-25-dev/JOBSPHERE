// import { useParams, useNavigate } from "react-router-dom";
// import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
// import jobs from "../data/JobsData";
// import navbar from "../components/NavBar"
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// function JobDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const job = jobs.find((item) => item.id === Number(id));

//   if (!job) {
//     return (
//       <div className="text-center mt-20">
//         <h2 className="text-3xl font-bold">Job Not Found</h2>
//       </div>
//     );
//   }

//   return (


//     <div className="min-h-screen bg-gray-100 py-10 px-4">

//            <NavBar />


//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">

//         {/* Header */}
//         <div className="flex items-center gap-5 mb-8">

//           {job.logo && (
//             <img
//               src={job.logo}
//               alt={job.company}
//               className="w-20 h-20 object-contain rounded-xl border p-2"
//             />
//           )}

//           <div>
//             <h1 className="text-4xl font-bold text-gray-800">
//               {job.title}
//             </h1>

//             <p className="text-gray-500 mt-2">
//               {job.company}
//             </p>
//           </div>
//         </div>

//         {/* Job Info */}
//         <div className="grid md:grid-cols-3 gap-4 mb-8">

//           <div className="bg-blue-50 p-4 rounded-xl">
//             <FaBuilding className="text-blue-600 text-2xl mb-2" />
//             <p className="font-semibold">{job.company}</p>
//           </div>

//           <div className="bg-green-50 p-4 rounded-xl">
//             <FaMapMarkerAlt className="text-green-600 text-2xl mb-2" />
//             <p className="font-semibold">{job.location}</p>
//           </div>

//           <div className="bg-purple-50 p-4 rounded-xl">
//             <FaMoneyBillWave className="text-purple-600 text-2xl mb-2" />
//             <p className="font-semibold">{job.salary}</p>
//           </div>

//         </div>

//         {/* Tags */}
//         <div className="flex gap-3 mb-8">
//           <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
//             Full Time
//           </span>

//           <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
//             Remote
//           </span>
//         </div>

//         {/* Description */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">
//             Job Description
//           </h2>

//           <p className="text-gray-600 leading-7">
//             We are looking for a talented {job.title} to join our team.
//             You will work on modern web applications, collaborate with
//             developers, and build scalable solutions.
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">
//             Required Skills
//           </h2>

//           <ul className="list-disc pl-5 text-gray-600 space-y-2">
//             <li>HTML, CSS, JavaScript</li>
//             <li>React.js</li>
//             <li>Node.js</li>
//             <li>MongoDB</li>
//             <li>Git & GitHub</li>
//           </ul>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4">

//           <button
//             onClick={() => navigate(`/apply/${job.id}`)}
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold"
//           >
//             Apply Now
//           </button>

//           <button
//             onClick={() => navigate(-1)}
//             className="border border-gray-300 px-8 py-3 rounded-xl"
//           >
//             Back
//           </button>

//         </div>

//       </div>
//                  <Footer/>


//     </div>
//   );
// }

// export default JobDetails;




import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(
          // `http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs/${id}`
          `https://jobsphere-lnmi.onrender.com/api/auth/jobs/${id}`
        );
        setJob(res.data);
      } catch (error) {
        console.log(error);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-500">Loading...</h2>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">Job Not Found</h2>
      </div>
    );
  }

  return (


    <div className="min-h-screen bg-gray-100 py-10 px-4">

           <NavBar />


      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        {/* Header */}
        <div className="flex items-center gap-5 mb-8">

          {job.logo && (
            <img
              src={job.logo}
              alt={job.company}
              className="w-20 h-20 object-contain rounded-xl border p-2"
            />
          )}

          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {job.title}
            </h1>

            <p className="text-gray-500 mt-2">
              {job.company}
            </p>
          </div>
        </div>

        {/* Job Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <div className="bg-blue-50 p-4 rounded-xl">
            <FaBuilding className="text-blue-600 text-2xl mb-2" />
            <p className="font-semibold">{job.company}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <FaMapMarkerAlt className="text-green-600 text-2xl mb-2" />
            <p className="font-semibold">{job.location}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl">
            <FaMoneyBillWave className="text-purple-600 text-2xl mb-2" />
            <p className="font-semibold">{job.salary}</p>
          </div>

        </div>

        {/* Tags */}
        <div className="flex gap-3 mb-8">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            Full Time
          </span>

          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
            Remote
          </span>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Job Description
          </h2>

          <p className="text-gray-600 leading-7">
            We are looking for a talented {job.title} to join our team.
            You will work on modern web applications, collaborate with
            developers, and build scalable solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Required Skills
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={() => navigate(`/apply/${job._id}`)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Apply Now
          </button>

          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 px-8 py-3 rounded-xl"
          >
            Back
          </button>

        </div>

      </div>
                 <Footer/>


    </div>
  );
}

export default JobDetails;  