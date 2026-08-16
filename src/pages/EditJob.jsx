import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const res = await axios.get(
        // `http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs/${id}`
        `https://jobsphere-lnmi.onrender.com/api/auth/jobs/${id}`
      );

      setJob(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load job");
    }
  };

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:https://jobsphere-lnmi.onrender.com/api/jobs/${id}`,
        job
      );

      alert("Job Updated Successfully");
      navigate("/managejobs");
    } catch (error) {
      // console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="container py-5">
      <div
        className="card shadow-lg border-0 mx-auto"
        style={{ maxWidth: "800px" }}
      >
        <div className="card-body p-4">
          <h2 className="fw-bold">
            ✏️ Edit Job
          </h2>

          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={job.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Company
              </label>
              <input
                type="text"
                className="form-control"
                name="company"
                value={job.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={job.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Job Type
              </label>
              <select
                className="form-select"
                name="type"
                value={job.type}
                onChange={handleChange}
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Salary
              </label>
              <input
                type="text"
                className="form-control"
                name="salary"
                value={job.salary}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Experience
              </label>
              <input
                type="text"
                className="form-control"
                name="experience"
                value={job.experience}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Skills
              </label>
              <input
                type="text"
                className="form-control"
                name="skills"
                value={job.skills}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Description
              </label>
              <textarea
                rows="5"
                className="form-control"
                name="description"
                value={job.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="d-flex gap-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
                // onClick={()=>navigate("/ManageJobs")}
              >
                Update Job
              </button>

              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={() =>
                  navigate("/managejobs")
                }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJob;