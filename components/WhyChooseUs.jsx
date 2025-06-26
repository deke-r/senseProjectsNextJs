'use client'

import React, { useState } from 'react';
import '../styles/WhyChooseUs.css';
import SectionHeader from '../components/SectionHeader';

const accordionItems = [
  {
    title: 'High Quality Standards',
    content:
      'We maintain uncompromising quality at every phase of construction—from planning to final execution. Our materials, craftsmanship, and processes meet the highest global standards.',
  },
  {
    title: 'Integrity',
    content:
      'Transparency and ethics are the foundation of our business. Every project is built on trust, ensuring our clients stay informed, engaged, and confident throughout the journey.',
  },
  {
    title: 'One Stop Solution',
    content:
      'From concept and design to execution and handover, we provide end-to-end construction solutions—streamlining the entire process under one trusted roof.',
  },
  {
    title: 'Best Technical Design and Detailing',
    content:
      'Our in-house experts leverage advanced design tools and deep technical knowledge to deliver structurally sound, efficient, and aesthetically refined solutions.',
  },
  {
    title: 'We Are Always Improving',
    content:
      'Innovation is at our core. We continuously upgrade our techniques, tools, and talent to deliver smarter, faster, and more sustainable construction solutions.',
  },
  {
    title: 'Over A Decade of Quality Construction Service',
    content:
      'With over 14 years of proven success, we have built a reputation for excellence. Our legacy is reflected in the landmarks we’ve created and the trust of our clients.',
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="why-choose-us container my-5">
      <SectionHeader header="Why Choose Us?" color="#134377" />

      <div className="row align-items-center">
        <div className="col-md-6 font-pop">
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div
                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                key={index}
              >
                <div
                  className="accordion-header d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  <span
                    className={`arrow-icon ${activeIndex === index ? 'rotate' : ''}`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className="accordion-body-wrapper"
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <div className="accordion-body text-justify">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <div className="container">
            <h4 className='fw-bold'>Your Vision, Our Expertise</h4>
            <p className="font-pop description text-justify">

Sense Projects Pvt. Ltd. transforms your dream project into a built reality. From residential and commercial spaces to industrial, hospitality, and institutional developments—we operate in all major metro cities and across India.

Our skilled workforce, strong industry partnerships, and proven track record position us as a leader in modern construction.

With a structured approach, strict regulatory compliance, and a talented team of professionals, we ensure every space we deliver is a benchmark of excellence.

Choose Sense Projects—where innovation meets execution, and every project is built to inspire.



              </p>
            <p className="font-pop description text-justify">
              At Sense Projects Private Limited, we bring your architectural vision to life with unmatched finesse. Operating across metro cities and pan-India, we are your trusted partner for premium construction solutions. Our seasoned professionals, strategic collaborations, and proven track record define us as a benchmark in the construction industry.
            </p>
            <p className="font-pop description text-justify">
              With a structured methodology, regulatory compliance, and a team of highly skilled experts, we deliver spaces that are not only engineered to perfection but built to elevate. From residential and commercial to industrial, institutional, and hospitality developments—choose Sense Projects for timeless craftsmanship and a legacy of excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
