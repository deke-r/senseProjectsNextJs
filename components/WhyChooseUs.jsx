import React, { useState } from 'react';
import '../styles/WhyChooseUs.css';
import SectionHeader from '../components/SectionHeader';
const accordionItems = [
  "High Quality Standards",
  "Integrity",
  "One Stop Solution",
  "Best Technical Design and Detailing",
  "We Are Always Improving",
  "Over A Decade of Quality Construction Service"
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="why-choose-us container my-5">

<SectionHeader header='Why Choose Us?' color='#134377'/>

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
                  <span>{item}</span>
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
                  <div className="accordion-body">
                    We ensure excellence in every aspect—from trained experts and technical accuracy to complete transparency.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
            <div className="container">

          <p className="font-pop description">
            Sense Projects Private Limited can make your dream construction come true. We operate in all Metro cities, and all across India. Choose Sense Projects for all your construction needs. Our skilled workers, industry connections, and stellar reputation make us the epitome of excellence in construction projects.
          </p>
          <p className="font-pop description">
            Our organised approach, adherence to regulations, and talented team ensure your dream project is built to perfection. Experience the difference with Sense Projects Pvt Ltd. Choose Sense Projects for exceptional quality in residential, commercial, industrial, institutional, and hospitality construction.
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
