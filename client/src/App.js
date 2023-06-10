import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';

import Booking from './pages/booking/Booking';
import Confirmation from './pages/booking/Confirmation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/courses/:id" element={<Booking />} />
          <Route path="/courses/:id/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
