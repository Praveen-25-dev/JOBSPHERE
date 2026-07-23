import { useState } from "react";
import { useNavigate } from "react-router-dom"


function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("adminLoggedIn", true);

    alert("Admin Login Successful");

    navigate("/admindashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center px-4">
      
      <div className="bg-white/95 backdrop-blur-md w-full max-w-md p-8 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-2">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Welcome Back Admin 👋
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Login
                    

          </button>

        </form>

        {/* <p className="text-center mt-6 text-gray-600">
          Don't have an admin account?{" "}
          <span
            onClick={() => navigate("/adminregister")}
            className="text-indigo-600 font-semibold cursor-pointer hover:text-purple-600"
          >
            Register
          </span>
        </p> */}

      </div>

    </div>
  );
}

export default AdminLogin;