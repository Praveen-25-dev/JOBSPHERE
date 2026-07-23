import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img
            src="/images/logo.png"
            alt="JobSphere"
            className="h-10 w-10"
          />

          <h1 className="text-2xl font-bold text-black">
            JobSphere
          </h1>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm md:text-base font-semibold text-black">

          <Link
            to="/login"
            className="hover:shadow-xl transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-xl transition"
          >
            Register
          </Link>

          {/* <Link
            to="/profile"
            className="font-medium"
          >
            <FaUserCircle size={22} />
          </Link> */}

        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;