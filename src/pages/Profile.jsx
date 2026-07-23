import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaUserCircle, FaEdit, FaSave } from "react-icons/fa";
import axios from "axios";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    bio: "",
    skills: "",
    experience: "",
    education: "",
    photo: "",
    resume: "",
  });

  useEffect(() => {
  fetchProfile();
}, []);

const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    const res = await axios.get(
      "http://localhost:8709/api/profile",
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (res.data) {
      setProfile((prev) => ({
        ...prev,
        ...res.data,
      }));
    }
  } catch (error) {
    // console.log(error);
  }
};

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfile({
          ...profile,
          photo: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];

    if ( file) {
      setProfile({
        ...profile,
        resume: file.name,
      });
    }
  };

 const saveProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:8709/api/profile",
      profile,
      {
        headers: {
          authorization: token,
        },
      }
    );

    setIsEditing(false);
    alert("Profile Saved Successfully");
  } catch (error) {
    // console.log(error);
  }
};
  
  const fields = Object.values(profile).filter(
    (value) => value !== "" 
  ).length;

  const completion = Math.round(
    (fields / Object.keys(profile).length) * 100
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-blue-600 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt=""
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              ) : (
                <FaUserCircle size={120} />
              )}
            </div>

            <h2 className="text-3xl font-bold">
              {profile.name || "Your Name"}
            </h2>

            <p>{profile.title || "Professional Title"}</p>

            <div className="mt-4">
              <p className="mb-2">
                Profile Completion: {completion}%
              </p>

              <div className="w-full bg-white/30 rounded-full h-4">
                <div
                  className="bg-green-400 h-4 rounded-full"
                  style={{ width: `${completion}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">

            <div className="flex justify-end mb-6 gap-5">
              {isEditing ? (
                <button
                  onClick={saveProfile}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaSave />
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaEdit />
                  Edit
                </button>



              )}

            
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Full Name"
                className="border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Email"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Phone Number"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Location"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="title"
                value={profile.title}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Job Title"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Skills"
                className="border p-3 rounded-lg"
              />
            </div>

            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="About Yourself"
              rows="4"
              className="border p-3 rounded-lg w-full mt-6"
            ></textarea>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <textarea
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Experience"
                rows="4"
                className="border p-3 rounded-lg"
              ></textarea>

              <textarea
                name="education"
                value={profile.education}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Education"
                rows="4"
                className="border p-3 rounded-lg"
              ></textarea>
            </div>

            {isEditing && (
              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <label className="font-semibold">
                    Upload Profile Photo
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="block mt-2"
                  />
                </div>

                <div>
                  <label className="font-semibold">
                    Upload Resume
                  </label>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                    className="block mt-2"
                  />
                </div>
              </div>
            )}

            {profile.resume && (
              <div className="mt-6">
                <h3 className="font-semibold">
                  Uploaded Resume:
                </h3>

                <p className="text-blue-600">
                  {profile.resume}
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
