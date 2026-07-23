// import {
//   FaBriefcase,
//   FaBookmark,
//   FaEye,
//   FaUserEdit,
//   FaFileAlt,
//   FaSearch,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();

//  const handleLogout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   localStorage.removeItem("isLoggedIn");

//   navigate("/login");
// };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 p-6">
      
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800">
//             Welcome Back, {user.fullname} 👋

//           </h1>
//           <p className="text-gray-500 mt-2">
//             Manage your jobs and applications
//           </p>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="mt-4 md:mt-0 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl shadow-lg transition"
//         >
//           <FaSignOutAlt />
//           Logout
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid md:grid-cols-3 gap-6">
        
//         <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-500">Applied Jobs</h3>
//             <FaBriefcase className="text-indigo-600 text-3xl" />
//           </div>
//           <h2 className="text-4xl font-bold mt-4"></h2>
//         </div>

//         {/* <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
//           {/* <div className="flex justify-between items-center">
//             <h3 className="text-gray-500">Saved Jobs</h3>
//             <FaBookmark className="text-green-600 text-3xl" />
//           </div> */}
//           {/* <h2 className="text-4xl font-bold mt-4"></h2> */}
//         {/* </div> */}

//         <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-500">Profile Views</h3>
//             <FaEye className="text-purple-600 text-3xl" />
//           </div>
//           <h2 className="text-4xl font-bold mt-4"></h2>
//         </div>

//       </div>

//       {/* Quick Actions */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-5">
//           Quick Actions
//         </h2>

//         <div className="grid md:grid-cols-3 gap-5">

//           <button
//             onClick={() => navigate("/jobs")}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg"
//           >
//             <FaSearch />
//             Browse Jobs
//           </button>

//           <button
//             onClick={() => navigate("/myapplications")}
//             className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg"
//           >
//             <FaFileAlt />
//             My Applications
//           </button>

//           <button
//             onClick={() => navigate("/profile")}
//             className="bg-purple-600 hover:bg-purple-700 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg"
//           >
//             <FaUserEdit />
//             Edit Profile
//           </button>

//         </div>
//       </div>

     
//     </div>
//   );
// }

// export default Dashboard;




import {
  FaBriefcase,
  FaEye,
  FaUserEdit,
  FaFileAlt,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome Back, {user?.fullname} 👋
          </h1>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>

          <p className="text-gray-500">
            Manage your jobs and applications
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 md:mt-0 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl shadow-lg transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500">Applied Jobs</h3>
            <FaBriefcase className="text-indigo-600 text-3xl" />
          </div>

          <h2 className="text-4xl font-bold mt-4">
            --
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500">Profile Views</h3>
            <FaEye className="text-purple-600 text-3xl" />
          </div>

          <h2 className="text-4xl font-bold mt-4">
            --
          </h2>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <button
            onClick={() => navigate("/jobs")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg"
          >
            <FaSearch />
            Browse Jobs
          </button>

          <button
            onClick={() => navigate("/myapplications")}
            className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg"
          >
            <FaFileAlt />
            My Applications
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-purple-600 hover:bg-purple-700 text-white p-5 rounded-2xl flex items-center gap-3 shadow-lg"
          >
            <FaUserEdit />
            Edit Profile
          </button>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;