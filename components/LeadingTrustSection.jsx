'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const LeadingTrustSection = () => {
  const [trigger, setTrigger] = useState(0);
  const sectionRef = useRef(null);

  const stats = [
    {
      // icon: '/images/noun_Checkbox.png',
      value: 2368,
      caption: 'Project Completed',
    },
    {
      // icon: '/images/home2017_005.png',
      value: 130,
      caption: 'Workers Employed',
    },
    {
      // icon: '/images/noun_Trophy_4000019.png',
      value: 27,
      caption: 'Awards Won',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger((prev) => prev + 1);
        }
      },
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const Counter = ({ target, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 1000;
      const incrementTime = 10;
      const step = Math.ceil((end - start) / (duration / incrementTime));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(start);
      }, incrementTime);

      return () => clearInterval(counter);
    }, [trigger]);

    return <div className="timer fw-bold fs-4">{count}</div>;
  };

  return (
    <section className="bg-fix-content position-relative py-5" ref={sectionRef}>
      <div className="video-overlay2"></div>
      <div className="container py-5 px-md-3">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="leading-content">
              <div className="span-head">
                <h3 className='text-light' style={{ zIndex: 400 }}>
                  <span className='text-warning'>Sense Projects:</span> A Name You Can Trust

                </h3>
                <p className='text-light text-justify'>
                  Recognized as one of the top leaders in Design-Build solutions, we pride ourselves on reliable project delivery, innovation, and unwavering trust. Our reputation as a leading home construction company across India is built on consistent quality and client satisfaction.
                </p>
                <h5 className='text-light'>We Build SMART Goals — a standard we live by:</h5>
                <ul className="list-unstyled text-light">
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i>
                    <span className="text-warning">S</span>ervice-oriented
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i>
                    <span className="text-warning">M</span>aestro of craftsmanship
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i>
                    <span className="text-warning">A</span>dmirable integrity
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i>
                    <span className="text-warning">R</span>ealistic solutions
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i>
                    <span className="text-warning">T</span>ime-sensitive execution
                  </li>
                </ul>

                <h6 className='text-light text-justify'>With Sense Projects, you’re not just building a home — you’re building with purpose, precision, and people who care.</h6>

              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 counter-section mt-4 mt-md-0">
            <h2 className='text-warning'>Growth By Numbers</h2>
            <p className="para text-light text-justify"> With 14 years of dedicated growth, we’ve established ourselves as a leader in the industry.</p>
            <div className="row">
              {stats.map((stat, index) => (
                <div className="col-md-4 count-box text-center" key={index}>
                  {/* <Image
                    src={stat.icon}
                    alt={stat.caption}
                    width={64}
                    height={64}
                    className="mx-auto d-block mb-2"
                  /> */}
                  <Counter target={stat.value} trigger={trigger} />
                  <div className="caption">
                    <h4 className="stat-caption text-light">{stat.caption}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingTrustSection;
