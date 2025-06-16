'use client';

import React, { useEffect, useRef, useState } from 'react';
import '../styles/StatsSection.css';
import SectionHeader from './SectionHeader';

const stats = [
  { number: 200, label: "Happy Clients", icon: "fa-face-smile" },
  { number: 500, label: "Projects", icon: "fa-briefcase" },
  { number: 1463, label: "Hours Of Support", icon: "fa-headset" },
  { number: 100, label: "Hard Workers", icon: "fa-users" },
  { number: 17, label: "Years of Experience", icon: "fa-calendar-check" },
];

const StatItem = ({ number, label, icon, delay, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (!visible) return;

    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = number / steps;

    const interval = setInterval(() => {
      current += increment;
      if (current >= number) {
        current = number;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(interval);
  }, [visible, number]);

  return (
    <div
      ref={ref}
      className={`col-6 col-md-3 col-lg-2 mb-4 fade-in-up ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-4 shadow-sm rounded text-center h-100 bg-white">
        <div className="mb-3">
          <i className={`fas ${icon} fa-2x text-o`}></i>
        </div>
        <h2 className="display-6 fw-bold text-o mb-2">
          {count}
          {suffix}
        </h2>
        <p className="text-secondary fw-semibold font-pop">{label}</p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="text-center mb-5">
          <SectionHeader header="Stats" color="#134377" />
        </div>
        <div className="row justify-content-center">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              delay={index * 300}
              suffix={stat.label === "Hours Of Support" ? "" : "+"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
