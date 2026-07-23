import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    setSent(true);
  };

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen flex items-center justify-center"
        
      >
        <div className="w-[900px] h-[500px] bg-white rounded-xl overflow-hidden shadow-2xl flex">

          {/* Left Side */}
          <div className="w-1/2 bg-gradient-to-br from-indigo-600  text-white p-12 flex flex-col justify-center relative">

            <h1 className="text-5xl font-bold mb-6">
              Forgot Password?
            </h1>

            <p className="text-lg">
              Don't worry! Enter your email address and we'll
              help you reset your password.
            </p>

            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-30 rounded-full opacity-20"></div>
            <div className="absolute top-20 right-10 w-24 h-24 bg-white rounded-full opacity-10"></div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 flex items-center justify-center bg-white">

            <div className="w-[320px]">

              {!sent ? (
                <>
                  <h2 className="text-center text-3xl font-bold text-indigo-600 mb-10">
                    RESET PASSWORD
                  </h2>

                  <div className="relative mb-6">
                    <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 py-3 rounded-full bg-purple-100 outline-none"
                    />
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-800 "
                  >
                    Send Reset Link
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-center text-3xl font-bold text-green-600 mb-6">
                    Success!
                  </h2>

                  <p className="text-center text-gray-600 mb-8">
                    Password reset link has been sent to your
                    email address.
                  </p>

                  <button
                    onClick={() => navigate("/login")}
                    className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-pink-500"
                  >
                    Back To Login
                  </button>
                </>
              )}

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ForgotPassword;