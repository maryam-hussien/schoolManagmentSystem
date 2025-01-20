import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Authentication from './pages/Authentication/Authentication';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword';
import Courses from "./pages/Courses/Courses";
import Post from "./pages/Commuinty/Post";
import DashHome from "./Dashboard/DashPages/DashHome/DashHome";
import Profile from "./pages/Profile/Profile";
import Announcement from "./pages/announcement/Announcement";
import Reviewpage from "./pages/Review/Reviewpage";
import NotFound from './pages/NotFound/NotFound'; // استيراد صفحة Not Found

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/" element={<Authentication />} />
        <Route path='/community' element={<Post />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path='/profile/*' element={<Profile />} />
        <Route path='/review' element={<Reviewpage />} />
        <Route path='/announcement' element={<Announcement />} />
        <Route path='/dashboard/*' element={<DashHome />} />

        {/* صفحة Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
