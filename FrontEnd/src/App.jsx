
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './pages/Home/Home';

import About from './pages/About/about';
import Profile from './pages/Profile/Profile';
import School from './pages/SchoolPosts/School';
import Authentication from './pages/Authentication/Authentication';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/profile/*' element={<Profile/>}/>
        <Route path='/post' element={<School/>}/>
        <Route path='/login' element={<Authentication />}/>
      </Routes>
     
      
    
    </Router>
  );
}

export default App;
