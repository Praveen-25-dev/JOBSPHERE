import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full Time",
    salary: "",
    experience: "",
    skills: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(job);
  //   alert("Job Posted Successfully 🚀");
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:8709/api/jobs/add",
      job
    );

    alert("Job Posted Successfully 🚀");

    navigate("/ManageJobs");

  } catch (error) {
    console.log(error);
    alert("Failed to Post Job");
  }
};


  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Post a New Job
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Form */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={job.title}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={job.company}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={job.location}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="type"
                value={job.type}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>

              <input
                type="text"
                name="salary"
                placeholder="Salary (Ex. 8-12 LPA)"
                value={job.salary}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience Required"
                value={job.experience}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="skills"
                placeholder="Skills (React, Node, MongoDB)"
                value={job.skills}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                name="description"
                placeholder="Job Description"
                value={job.description}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
                // onClick={()=>navigate("/ManageJobs")}
              >
                Publish Job 🚀
              </button>
            </form>
          </div>

          {/* Live Preview */}
          <div className="bg-gradient-to-br from-blue-600 text-white p-8 rounded-3xl shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
              Live Preview
            </h2>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">

              <h3 className="text-3xl font-bold">
                {job.title || "Frontend Developer"}
              </h3>

              <p className="mt-2 text-lg">
                {job.company || "Google"}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {job.location || "Bangalore"}
                </span>

                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>

              <p className="mt-5">
                💰 {job.salary || "8-12 LPA"}
              </p>

              <p className="mt-3">
                🧑‍💻 {job.experience || "2+ Years"}
              </p>

              <div className="mt-5">
                <h4 className="font-semibold mb-2">
                  Skills
                </h4>

                <div className="flex flex-wrap gap-2">
                  {(job.skills || "React, Node, MongoDB")
                    .split(",")
                    .map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white/20 px-3 py-1 rounded-full text-sm"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">
                  Description
                </h4>

                <p className="text-sm leading-relaxed">
                  {job.description ||
                    "We are looking for a passionate frontend developer to join our growing team."}
                </p>
              </div>

              <button className="mt-6 w-full bg-white text-blue-700 font-bold py-3 rounded-xl">
                Apply Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PostJob;