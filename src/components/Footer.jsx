import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaBriefcase,
} from "react-icons/fa";

function Footer() {
  // import { useNavigate } from "react-router-dom";
   const navigate = useNavigate();
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              
              <h2 className="text-2xl font-bold">
                JobSphere
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Connect with top companies and discover
              thousands of opportunities to grow your
              career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer"
              onClick={()=> navigate("/home")}
              >
                Home
              </li>
              <li className="hover:text-white cursor-pointer"
                            onClick={()=> navigate("/jobs")}

              >
                Browse Jobs
              </li>
              <li className="hover:text-white cursor-pointer"
                            onClick={()=> navigate("/postjob")}

              >
                Post a Job
              </li>
              <li className="hover:text-white cursor-pointer"
              onClick={()=>navigate("/MyApplications")} 
              >
                My Applications
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Popular Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Full Stack Developer</li>
            
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>itspraveen220@gmail.com</li>
              <li>8797389898</li>
              <li>India</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition cursor-pointer"
              onClick={()=>navigate("/facebook.com")}
              >
                <FaFacebook />
              </div>

              <div className="bg-slate-800 p-3 rounded-full hover:bg-sky-500 transition cursor-pointer">
                <FaTwitter />
              </div>

              <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-700 transition cursor-pointer">
                <FaLinkedin />
              </div>

              <div className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 transition cursor-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 JobPortal. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer"
            onClick={()=>navigate("/privacy")}
            >
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer"
            onClick={() => navigate("/term")}>
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;