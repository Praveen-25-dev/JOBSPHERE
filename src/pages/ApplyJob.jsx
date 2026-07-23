// // import { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // import {
// //   FaUser,
// //   FaEnvelope,
// //   FaFileUpload,
// //   FaMapMarkerAlt,
// //   FaMoneyBillWave,
// //   FaBuilding,
// //   FaPhone,
// // } from "react-icons/fa";

// // function ApplyJob() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const job = jobs.find(
// //     (item) => item.id === Number(id)
// //   );

// //   const handleApply = () => {
// //     const notifications =
// //       JSON.parse(localStorage.getItem("notifications")) || [];

// //     notifications.unshift({
// //       id: Date.now(),
// //       message: "Application submitted successfully",
// //       time: new Date().toLocaleString(),
// //     });

// //     localStorage.setItem(
// //       "notifications",
// //       JSON.stringify(notifications)
// //     );
// //   };

// //   const handleSubmitApplication = (e) => {
// //     e.preventDefault();

// //     handleApply();

// //     // navigate(`/application/${id}`);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">

// //       <div className="max-w-4xl mx-auto">

// //         {/* Header */}
// //         <div className="text-center mb-12">

// //           <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
// //             🚀 Apply For Your Dream Job
// //           </span>

// //           <h1 className="text-5xl font-bold text-gray-800 mt-5">
// //             Job Application
// //           </h1>

// //           <p className="text-gray-500 mt-3 text-lg">
// //             Complete the application form below.
// //           </p>

// //         </div>

// //         {/* Job Details Card */}
// //         <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition">

// //           <h2 className="text-3xl font-bold text-gray-800">
// //             {job?.title}
// //           </h2>

// //           <div className="flex items-center gap-2 mt-3 text-blue-600 font-medium">
// //             <FaBuilding />
// //             {job?.company}
// //           </div>

// //           <div className="flex flex-wrap gap-4 mt-6">

// //             <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
// //               <FaMapMarkerAlt />
// //               {job?.location}
// //             </span>

// //             <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
// //               <FaMoneyBillWave />
// //               {job?.salary}
// //             </span>

// //           </div>

// //         </div>

// //         {/* Form */}
// //         <form
// //           onSubmit={handleSubmitApplication}
// //           className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
// //         >

// //           <div className="space-y-6">

// //             {/* Name */}
// //             <div>

// //               <label className="block font-semibold text-gray-700 mb-2">
// //                 Full Name
// //               </label>

// //               <div className="relative">

// //                 <FaUser className="absolute left-4 top-5 text-gray-400" />

// //                 <input
// //                   type="text"
// //                   placeholder="Enter your full name"
// //                   className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
// //                   required
// //                 />

// //               </div>

// //             </div>

// //             {/* Email */}
// //             <div>

// //               <label className="block font-semibold text-gray-700 mb-2">
// //                 Email Address
// //               </label>

// //               <div className="relative">

// //                 <FaEnvelope className="absolute left-4 top-5 text-gray-400" />

// //                 <input
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
// //                   required
// //                 />

// //               </div>

// //             </div>

// //             {/* Resume Upload */}
// //             <div>

// //               <label className="block font-semibold text-gray-700 mb-3">
// //                 Upload Resume
// //               </label>

// //               <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center">

// //                 <FaFileUpload
// //                   size={40}
// //                   className="mx-auto text-blue-600 mb-4"
// //                 />

// //                 <p className="text-gray-500 mb-4">
// //                   Upload your latest resume
// //                 </p>

// //                 <input
// //                   type="file"
// //                   required
// //                 />

// //               </div>

// //             </div>

// //             {/* Buttons */}
// //             <div className="space-y-4 pt-2">

// //               <button
// //                 type="submit"
// //                 className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] hover:shadow-xl transition"
// //               >
// //                 Apply Now 🚀
// //               </button>

// //               <button
// //                 type="button"
// //                 onClick={() => navigate(-1)}
// //                 className="w-full border border-gray-300 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition"
// //               >
// //                 Back
// //               </button>

// //             </div>

// //           </div>

// //         </form>

// //       </div>

// //     </div>
// //   );
// // }

// // export default ApplyJob;



// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import jobs from "../data/JobsData";

// import {
//   FaUser,
//   FaEnvelope,
//   FaFileUpload,
//   FaMapMarkerAlt,
//   FaMoneyBillWave,
//   FaBuilding,
//   FaPhone,
// } from "react-icons/fa";

// function ApplyJob() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const job = jobs.find(
//     (item) => item.id === Number(id)
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const [resumeFile, setResumeFile] = useState(null);
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     // Pre-fill from the logged-in user if we have one
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setFormData((prev) => ({
//         ...prev,
//         name: user.fullname || prev.name,
//         email: user.email || prev.email,
//       }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const addNotification = () => {
//     const notifications =
//       JSON.parse(localStorage.getItem("notifications")) || [];

//     notifications.unshift({
//       id: Date.now(),
//       message: "Application submitted successfully",
//       time: new Date().toLocaleString(),
//     });

//     localStorage.setItem(
//       "notifications",
//       JSON.stringify(notifications)
//     );
//   };

//   const handleSubmitApplication = async (e) => {
//     e.preventDefault();

//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user?._id) {
//       alert("Please log in before applying.");
//       navigate("/login");
//       return;
//     }

//     setSubmitting(true);

//     try {
//       await axios.post(
//         "http://localhost:8709/api/applications/apply",
//         {
//           userId: user._id,
//           jobId: id,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           coverLetter: resumeFile ? `Resume: ${resumeFile.name}` : "",
//         }
//       );

//       addNotification();

//       alert("Applied Successfully 🚀");
//       navigate("/myapplications");
//     } catch (error) {
//       console.log(error);
//       alert(
//         error.response?.data?.message ||
//         "Application Failed"
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">

//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">

//           <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
//             🚀 Apply For Your Dream Job
//           </span>

//           <h1 className="text-5xl font-bold text-gray-800 mt-5">
//             Job Application
//           </h1>

//           <p className="text-gray-500 mt-3 text-lg">
//             Complete the application form below.
//           </p>

//         </div>

//         {/* Job Details Card */}
//         <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition">

//           <h2 className="text-3xl font-bold text-gray-800">
//             {job?.title}
//           </h2>

//           <div className="flex items-center gap-2 mt-3 text-blue-600 font-medium">
//             <FaBuilding />
//             {job?.company}
//           </div>

//           <div className="flex flex-wrap gap-4 mt-6">

//             <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
//               <FaMapMarkerAlt />
//               {job?.location}
//             </span>

//             <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
//               <FaMoneyBillWave />
//               {job?.salary}
//             </span>

//           </div>

//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmitApplication}
//           className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
//         >

//           <div className="space-y-6">

//             {/* Name */}
//             <div>

//               <label className="block font-semibold text-gray-700 mb-2">
//                 Full Name
//               </label>

//               <div className="relative">

//                 <FaUser className="absolute left-4 top-5 text-gray-400" />

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />

//               </div>

//             </div>

//             {/* Email */}
//             <div>

//               <label className="block font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>

//               <div className="relative">

//                 <FaEnvelope className="absolute left-4 top-5 text-gray-400" />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />

//               </div>

//             </div>

//             {/* Phone */}
//             <div>

//               <label className="block font-semibold text-gray-700 mb-2">
//                 Phone Number
//               </label>

//               <div className="relative">

//                 <FaPhone className="absolute left-4 top-5 text-gray-400" />

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />

//               </div>

//             </div>

//             {/* Resume Upload */}
//             <div>

//               <label className="block font-semibold text-gray-700 mb-3">
//                 Upload Resume
//               </label>

//               <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center">

//                 <FaFileUpload
//                   size={40}
//                   className="mx-auto text-blue-600 mb-4"
//                 />

//                 <p className="text-gray-500 mb-4">
//                   Upload your latest resume
//                 </p>

//                 <input
//                   type="file"
//                   onChange={(e) => setResumeFile(e.target.files[0] || null)}
//                   required
//                 />

//               </div>

//             </div>

//             {/* Buttons */}
//             <div className="space-y-4 pt-2">

//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] hover:shadow-xl transition disabled:opacity-60 disabled:cursor-not-allowed"
//               >
//                 {submitting ? "Submitting..." : "Apply Now 🚀"}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => navigate(-1)}
//                 className="w-full border border-gray-300 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition"
//               >
//                 Back
//               </button>

//             </div>

//           </div>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default ApplyJob;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaUser,
  FaEnvelope,
  FaFileUpload,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBuilding,
  FaPhone,
} from "react-icons/fa";

function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8709/api/jobs/${id}`
        );
        setJob(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJob();
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Pre-fill from the logged-in user if we have one
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.fullname || prev.name,
        email: user.email || prev.email,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addNotification = () => {
    const notifications =
      JSON.parse(localStorage.getItem("notifications")) || [];

    notifications.unshift({
      id: Date.now(),
      message: "Application submitted successfully",
      time: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?._id) {
      alert("Please log in before applying.");
      navigate("/login");
      return;
    }

    setSubmitting(true);

    try {
      await axios.post(
        "http://localhost:8709/api/applications/apply",
        {
          userId: user._id,
          jobId: id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          coverLetter: resumeFile ? `Resume: ${resumeFile.name}` : "",
        }
      );

      addNotification();

      alert("Applied Successfully 🚀");
      navigate("/myapplications");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
        "Application Failed"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
            🚀 Apply For Your Dream Job
          </span>

          <h1 className="text-5xl font-bold text-gray-800 mt-5">
            Job Application
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Complete the application form below.
          </p>

        </div>

        {/* Job Details Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition">

          <h2 className="text-3xl font-bold text-gray-800">
            {job?.title}
          </h2>

          <div className="flex items-center gap-2 mt-3 text-blue-600 font-medium">
            <FaBuilding />
            {job?.company}
          </div>

          <div className="flex flex-wrap gap-4 mt-6">

            <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <FaMapMarkerAlt />
              {job?.location}
            </span>

            <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <FaMoneyBillWave />
              {job?.salary}
            </span>

          </div>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmitApplication}
          className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
        >

          <div className="space-y-6">

            {/* Name */}
            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">

                <FaUser className="absolute left-4 top-5 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-5 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

              </div>

            </div>

            {/* Phone */}
            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <div className="relative">

                <FaPhone className="absolute left-4 top-5 text-gray-400" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full pl-12 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

              </div>

            </div>

            {/* Resume Upload */}
            <div>

              <label className="block font-semibold text-gray-700 mb-3">
                Upload Resume
              </label>

              <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center">

                <FaFileUpload
                  size={40}
                  className="mx-auto text-blue-600 mb-4"
                />

                <p className="text-gray-500 mb-4">
                  Upload your latest resume
                </p>

                <input
                  type="file"
                  onChange={(e) => setResumeFile(e.target.files[0] || null)}
                  required
                />

              </div>

            </div>

            {/* Buttons */}
            <div className="space-y-4 pt-2">

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] hover:shadow-xl transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Apply Now 🚀"}
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full border border-gray-300 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition"
              >
                Back
              </button>

            </div>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ApplyJob;





