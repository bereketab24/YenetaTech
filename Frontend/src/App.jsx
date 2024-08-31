import { Routes, Route } from "react-router";
import Home from "./markup/Pages/Home/Home.jsx";
import Login from "./markup/Pages/Login/Login.jsx";
import Register from "./markup/Pages/Register/Register.jsx";
import Header from "./markup/components/Header/Header.jsx";
import Footer from "./markup/components/Footer/Footer.jsx";
import Courses from "./markup/Pages/Courses/Courses.jsx";
import About from "./markup/Pages/About/About.jsx";
import Contact from "./markup/Pages/Contact/Contact.jsx";
import "./assets/styles/main.css"
import "./assets/styles/bootstrap-icons.css";
import "./assets/styles/bootstrap.min.css";




function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element= {<Courses/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element= {<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
