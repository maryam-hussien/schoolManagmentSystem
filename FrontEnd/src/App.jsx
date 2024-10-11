import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import Profile from "./pages/Profile/Profile";
import School from "./pages/SchoolPosts/School";
import Authentication from "./pages/Authentication/Authentication";
import DashHome from "./Dashboard/DashPages/DashHome/DashHome";
import Course from "./pages/Courses/Course"
import Chatbot from "./pages/Chatbot/Chatbot";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/profile/*" element={<Profile />} />
        <Route path="/post" element={<School />} />
        <Route path="/login" element={<Authentication />} />
        <Route path='/course/*' element={<Course/>}/>
        <Route path="/dashboard/*" element={<DashHome />} />
        <Route path ="/chatbot" element ={<Chatbot/>} />
      </Routes>
    </Router>
  );
}

export default App;
