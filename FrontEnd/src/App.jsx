
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './pages/About/about';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/profile/*' element={<Profile/>}/>
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
