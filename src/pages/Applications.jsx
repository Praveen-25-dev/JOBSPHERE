import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
} from "react-icons/fa";

function Application() {
  const navigate = useNavigate();
    const { jobId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

// const handleApply = async () => {
//   try {
//     const user = JSON.parse(localStorage.getItem("user"));

//     await axios.post(
//       "http://localhost:https://jobsphere-lnmi.onrender.com/api/applications/apply",
//       {
//         userId: user._id,
//         jobId,
//       }
//     );

//     alert("Applied Successfully 🚀");
//     navigate("/myapplications");
//   } catch (error) {
//     console.log(error);
//     alert(
//       error.response?.data?.message ||
//       "Application Failed"
//     );
//   }



    
//   };
console.log("User:", user);
console.log("Job ID:", jobId);
const handleApply = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    await axios.post(
      "http://localhost:https://jobsphere-lnmi.onrender.com/api/applications/apply",
      {
        userId: user._id,
        jobId: jobid,

        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter,
      }
    );

    alert("Applied Successfully 🚀");

    navigate("/myapplications");
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Application Failed"
    );
  }
};

  

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
              🚀 Complete Your Application
            </span>

            <h1 className="text-5xl font-bold text-gray-800 mt-5">
              Apply For This Job
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Fill in your details and submit your application.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-2xl p-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-2xl p-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-2xl p-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Cover Letter
                </label>

                <div className="relative">
                  <FaFileAlt className="absolute left-4 top-5 text-gray-400" />

                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    rows="6"
                    placeholder="Tell us why you're a great fit for this role..."
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-2xl p-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button
                onClick={handleApply}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
              >
                Submit Application 🚀
              </button>

              <button
                onClick={() => navigate(-1)}
                className="flex-1 border border-gray-300 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;