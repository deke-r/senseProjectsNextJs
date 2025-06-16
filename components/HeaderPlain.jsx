import React from 'react';
import '../styles/Header.css';
import '../styles/Fonts.css';
import logo from '../assets/images/Sense_project_logo.png';
import { Link } from 'react-router-dom';

const HeaderPlain = () => {
  return (
    <nav className="navbar navbar-expand-lg p-md-4  bg-white shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-start" href="#">
          <img src={logo} className="w-50" alt="Sense Projects Logo" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-md-5 mb-2 text-center mb-lg-0">
            <li className="nav-item"><Link to='/' className="nav-link">HOME</Link></li>
            <li className="nav-item dropdown dropdown-hover">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ABOUT
              </a>
              <ul className="dropdown-menu mt-2 border-0 box_sdw10 rounded-3">
                <li>
                  <Link to='/whoweare' className="dropdown-item d-flex align-items-center gap-2">
                    <span className="icon-box" style={{ color: '#630E65', backgroundColor: '#F6E3F9' }}>
                      <i className="fa-solid fa-users"></i>
                    </span>
                    Who we are
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                    <span className="icon-box" style={{ color: '#00405D', backgroundColor: '#CDF3FE' }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Why choose us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                    <span className="icon-box" style={{ color: '#134377', backgroundColor: '#E2F0F7' }}>
                      <i className="fa-solid fa-building"></i>
                    </span>
                    Our projects
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">SERVICES</a></li>
            <li className="nav-item"><a className="nav-link" href="#">PROJECTS</a></li>
            <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPlain;
