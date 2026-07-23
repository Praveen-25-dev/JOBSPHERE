import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
try {
if (!email || !password) {
alert("Please fill all fields");
return;
}


  const res = await axios.post(
    "http://localhost:8709/api/auth/login",
    {
      email,
      password,
    }
  );

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));
  localStorage.setItem("isLoggedIn", "true");

  alert("Login Successful");
  navigate("/dashboard");
} catch (error) {
  alert(
    error.response?.data?.message ||
    "Login Failed"
  );
}


};

return (
<> <Navbar />


  <div className="min-h-screen flex items-center justify-center">
    <div className="w-[900px] h-[500px] bg-white rounded-xl overflow-hidden shadow-2xl flex">

      <div className="w-1/2 bg-gradient-to-br from-indigo-600 text-white p-12 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome Back!
        </h1>

        <p className="text-lg">
          Find your dream job and connect with top companies
          through our Job Portal.
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[320px]">

          <h2 className="text-center text-3xl font-bold text-indigo-600 mb-10">
            USER LOGIN
          </h2>

          <div className="relative mb-5">
            <FaUser className="absolute left-4 top-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 py-3 rounded-full bg-purple-100 outline-none"
            />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-4 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 py-3 rounded-full bg-purple-100 outline-none"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-500 mb-8">
            <span
              onClick={() => navigate("/Forget")}
              className="cursor-pointer hover:text-indigo-600"
            >
              Forgot Password?
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-800 hover:scale-105 transition"
          >
            LOGIN
          </button>

          <p className="text-center mt-5 text-gray-600">
            Don't have an account?
            <span
              onClick={() => navigate("/register")}
              className="text-indigo-600 font-semibold cursor-pointer ml-1"
            >
              Sign Up
            </span>
          </p>

        </div>
      </div>

    </div>
  </div>
</>


);
}

export default Login;
