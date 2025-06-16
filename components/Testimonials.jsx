'use client';

import React from 'react';
import '../styles/Testimonials.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Their team exceeded my expectations. I highly recommend them!',
  },
  {
    name: 'Sarah Smith',
    feedback: 'Excellent service, very professional and delivered on time.',
  },
  {
    name: 'Michael Lee',
    feedback: 'Truly a reliable company with skilled engineers and timely execution.',
  },
  {
    name: 'Priya Kumar',
    feedback: 'From planning to execution, everything was seamless and top quality.',
  },
  {
    name: 'Amit Verma',
    feedback: 'Great service and communication throughout the project!',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <SectionHeader header="Testimonials" color="#fff" />

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="blob-container position-relative text-center">
            <svg viewBox="0 0 500 500" className="blob-svg">
              <path
                id="blobPath"
                fill="#FFE6D1"
                d="M424.5,310.5Q416,371,367,412Q318,453,252.5,459Q187,465,139.5,422.5Q92,380,77.5,318Q63,256,74,195Q85,134,142,98Q199,62,257.5,58Q316,54,377,91Q438,128,438.5,192Q439,256,424.5,310.5Z"
              >
                <animate
                  attributeName="d"
                  dur="6s"
                  repeatCount="indefinite"
                  values="
                    M424.5,310.5Q416,371,367,412Q318,453,252.5,459Q187,465,139.5,422.5Q92,380,77.5,318Q63,256,74,195Q85,134,142,98Q199,62,257.5,58Q316,54,377,91Q438,128,438.5,192Q439,256,424.5,310.5Z;
                    M410,320Q390,380,340,410Q290,440,250,440Q210,440,170,410Q130,380,110,320Q90,260,120,200Q150,140,190,110Q230,80,290,90Q350,100,390,140Q430,180,420,240Q410,300,410,320Z;
                    M424.5,310.5Q416,371,367,412Q318,453,252.5,459Q187,465,139.5,422.5Q92,380,77.5,318Q63,256,74,195Q85,134,142,98Q199,62,257.5,58Q316,54,377,91Q438,128,438.5,192Q439,256,424.5,310.5Z
                  "
                />
              </path>
            </svg>

            <div className="text-center">
              <img src="/images/erasebg-transformed (1).png" alt="Construction" className="blob-img2" />
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <div className="right-carousel">
            <Splide
              options={{
                type: 'loop',
                direction: 'ttb',
                height: '400px',
                perPage: 3,
                perMove: 1,
                autoplay: true,
                interval: 4000,
                speed: 1000,
                arrows: false,
                pagination: false,
                gap: '16px',
                wheel: true,
                easing: 'ease-in-out',
                focus: 'center',
              }}
              aria-label="Testimonials"
            >
              {testimonials.map((t, index) => (
                <SplideSlide key={index}>
                  <div className="testimonial-card">
                    <p className="feedback font-pop">"{t.feedback}"</p>
                    <h4 className="name font-pop">- {t.name}</h4>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
