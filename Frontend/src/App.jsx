import { Routes, Route } from "react-router";
import Home from "./markup/Pages/Home/Home.jsx";
import Login from "./markup/Pages/Login/Login.jsx";
import Register from "./markup/Pages/Register/Register.jsx";
import Header from "./markup/components/Header/Header.jsx";
import Footer from "./markup/components/Footer/Footer.jsx";
import Courses from "./markup/Pages/Coursesp/Coursesp.jsx";
import About from "./markup/Pages/About/About.jsx";
import Contact from "./markup/Pages/Contact/Contact.jsx";
import CourseDetails from "./markup/Pages/CourseDetails/CourseDetails.jsx";
import "./assets/styles/public/main.css";
import "./assets/styles/public/bootstrap-icons.css";
import "./assets/styles/public/bootstrap.min.css";

import PublicLayout from "./markup/components/PublicLayout/PublicLayout.jsx";
import AdminLayout from "./markup/components/AdminLayout/AdminLayout.jsx";
import Dashboard from "./markup/Pages/Admin/Dashboard/Dashboard.jsx";
import Notfound from "./markup/Pages/Notfound/Notfound.jsx";

import Unauthorized from "./markup/Pages/Unauthorized/Unauthorized.jsx";
import ProtectedRoutes from "./markup/components/ProtectedRoutes/ProtectedRoutes.jsx";
import Userdata from "./markup/Pages/Admin/Userdata/Userdata.jsx";
import Coursedata from "./markup/Pages/Admin/Coursedata/Coursedata.jsx"
import StudentLayout from "./markup/components/StudentLayout/StudentLayout.jsx";
import Mycourses from "./markup/Pages/Student/Mycourses/Mycourses.jsx";
import Study from "./markup/Pages/Student/Study/Study.jsx";
import Courselist from "./markup/Pages/Student/Courselist/Courselist.jsx"
import Verification from "./markup/Pages/Verification/Verification.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Notfound />} />
        </Route>
        <Route path="/admin" element={<ProtectedRoutes reqiredRole= {1} />}>
          <Route element={<AdminLayout />}>
            {/* <Route index element={<Dashboard/>}/> */}
            <Route path="" element={<Dashboard />} />
            {/* <Route path="/admin/students" element={<Students />} /> */}
            <Route path="/admin/users" element={<Userdata />} />
            <Route path="/admin/courses" element={<Coursedata/>} />
          </Route>
        </Route>
        <Route path="/student" element={<ProtectedRoutes reqiredRole= {2} />}>
          <Route element={<StudentLayout />}>
            {/* <Route index element={<Dashboard/>}/> */}
            
            <Route path="" element={<Courselist />} />
            <Route path="/student/mycourses" element={<Mycourses />} />
            <Route path="/student/:courseId" element={<Study/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
