import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/createcourse" className="navbar-link">
            Create Course
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/courses" className="navbar-link">
            Course
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/student" className="navbar-link">
            Student
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/price" className="navbar-link">
            Price
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
