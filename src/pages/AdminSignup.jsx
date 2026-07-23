
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adminName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.adminName ||
      !formData.companyName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Admin Registered Successfully");

    navigate("/adminlogin");
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2 w-1/2">
          Admin Signup
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Create Recruiter Account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="adminName"
            placeholder="Admin Name"
            value={formData.adminName}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold"
          >
           <span
            onClick={()=>navigate("/adminlogin")}> </span>
            Create Account
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/adminlogin")}
            className="text-indigo-600 font-semibold cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default AdminSignup;