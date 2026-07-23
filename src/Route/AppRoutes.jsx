import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import Dashboard from "../pages/Dashboard";
import ApplyJob from "../pages/ApplyJob";
// import Application from "../pages/Applications";
// import Jobs from "../pages/Jobs";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import AdminSignup from "../pages/AdminSignup";
import Users from "../pages/Users";

import Forget from "../pages/Forget";
// import Application from "../pages/Application";
import MyApplications from "../pages/MyApplications";
import JobDetails from "../pages/JobDetails";
import ForEmployers from "../pages/ForEmployers";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import PostJob from "../pages/PostJob";
import ManageJobs from "../pages/ManageJobs";
import Applicants from "../pages/Applicants";
import Term from "../pages/Term";
import Privacy from "../pages/Privacy";
import EditJob from "../pages/EditJob";








function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/apply/:id" element={<ApplyJob />} />
      {/* <Route path="/application/:id" element={<Application />} /> */}
      <Route path="/jobs/:id" element={<JobDetails />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />}/>
      {/* <Route path="/admin" element={<Admin />}/> */}
      <Route path="/users" element={<Users />}/>
      <Route path="/adminsignup" element={<AdminSignup />}/>
      <Route path="/forget" element={<Forget />} />
      <Route path="/myapplications" element={<MyApplications />} />

      <Route path="/job/:id" element={<JobDetails />} />
            {/* <Route path="/ForEmployers/:id" element={<ForEmployers />} /> */}
            <Route path="/for-employers" element={<ForEmployers />} />

            <Route path="/AdminLogin" element={<AdminLogin/>}/>
            <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
            <Route path="/PostJob" element={<PostJob/>}/>
            <Route path="/ManageJobs" element={<ManageJobs/>}/>
            <Route path="/Applicants/:jobId" element={<Applicants/>}/>
            <Route path="/Term" element={<Term />}/>
            <Route path="/Privacy" element={<Privacy/>}/>
            <Route path="/edit-job/:id" element={<EditJob />} />

     </Routes>
  );
}

export default AppRoutes;