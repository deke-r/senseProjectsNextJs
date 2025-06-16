'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/Header.css';
import '../styles/Fonts.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg p-md-4 fixed-top ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-start">
          <img src="/images/Sense_project_logo.png" alt="SPPL" className="w-50" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse bg-md-light rounded-2 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-md-5 mb-2 text-center mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link href="/about-us" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link href="/certification" className="nav-link">CERTIFICATION</Link>
            </li>
            <li className="nav-item">
              <Link href="/our-projects" className="nav-link">PROJECTS</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link href="/career" className="nav-link">CAREER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
