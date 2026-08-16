

import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Register() {
const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleRegister = async () => {
try {
if (!name || !email || !password) {
alert("Please fill all fields");
return;
}


  const res = await axios.post(
    // "http://localhost:https://jobsphere-lnmi.onrender.com/api/auth/register",
    "https://jobsphere-lnmi.onrender.com/api/auth/register",
    {
      fullname: name,
      email,
      password,
    }
  );

  alert(res.data.message || "Registration Successful");
  navigate("/login");
} catch (error) {
  alert(
    error.response?.data?.message ||
      "Registration Failed"
  );
}


};

return (
<> <Navbar />


  <div className="min-h-screen flex items-center justify-center">
    <div className="w-[900px] h-[550px] bg-white rounded-xl overflow-hidden shadow-2xl flex">

      <div className="w-1/2 bg-gradient-to-br from-indigo-800 text-white p-12 flex flex-col justify-center relative">
        <h1 className="text-5xl font-bold mb-6">
          Join Us Today!
        </h1>

        <p className="text-lg">
          Create your account and start applying to your
          dream jobs with top companies.
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[320px]">

          <h2 className="text-center text-3xl font-bold text-indigo-600 mb-10">
            REGISTER
          </h2>

          <div className="relative mb-4">
            <FaUser className="absolute left-4 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 py-3 rounded-full bg-purple-100 outline-none"
            />
          </div>

          <div className="relative mb-4">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 py-3 rounded-full bg-purple-100 outline-none"
            />
          </div>

          <div className="relative mb-6">
            <FaLock className="absolute left-4 top-4 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 py-3 rounded-full bg-purple-100 outline-none"
            />
          </div>

          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-800 hover:scale-105 transition"
          >
            REGISTER
          </button>

          <p className="text-center mt-5 text-gray-600">
            Already have an account?
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 font-semibold cursor-pointer ml-1"
            >
              Login
            </span>
          </p>

          <p className="text-center mt-3">
            Admin
            <span
              onClick={() => navigate("/adminsignup")}
              className="text-indigo-600 font-semibold cursor-pointer ml-1"
            >
              Register
            </span>
          </p>

        </div>
      </div>

    </div>
  </div>
</>


);
}

export default Register;
