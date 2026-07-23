
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import ApplyJob from "./pages/ApplyJob";
import JobDetails from "./pages/JobDetails";
import Applications from "./pages/Applications";
import SavedJobs from "./pages/SavedJobs";
// import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import ForEmployers from "./pages/ForEmployers"
// import AdminRegister from "./pages/AdminSignup"
import Applicants from "./pages/Applicants";
import Profile from "./pages/Profile";

import MyApplications from "./pages/MyApplications";
// import Applications from "./pages/Applications";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/apply" element={<ApplyJob />} />
      <Route path="/job/:id" element={<JobDetails />} />
      {/* <Route path="/apply/:id" element={<ApplyJob />} /> */}
      <Route path="/applications" element={<Applications />}/>
      <Route path="/saved-jobs" element={<SavedJobs />}/>
      <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/ForEmployers" element={<ForEmployers />} /> */}
            <Route path="/employers" element={<ForEmployers />} />
            {/* <Route path="/adminregister" element={<AdminRegister/>}/> */}
            <Route path="/Applicants/:jobId" element={<Applicants />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/myapplications" element={<MyApplications />} />
            {/* <Route path="/applications/:jobId" element={<Applications />} /> */}


</Routes>
  );
}

export default App;