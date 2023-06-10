import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import Student from './pages/student/Student';
import Price from './pages/price/Price';
import CreateCourse from './pages/createCourse/CreateCourse';
import Navbar from './components/navbar/Navbar';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createcourse" element={<CreateCourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/student" element={<Student />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </Router>
  );
}

export default App;
