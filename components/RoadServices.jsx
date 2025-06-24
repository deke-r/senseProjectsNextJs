'use client';

import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css';

const roadServices = [
  {
    icon: 'fa-road',
    title: 'Bitumen Road',
    description:
      'SPPL offers world-class solutions for the construction of bitumen roads, highways, bridges, flyovers, institutional, commercial, and residential complexes, along with other infrastructural development works.',
    link: '/bitumen-road-construction-company-in-india',
  },
  {
    icon: 'fa-city',
    title: 'Concrete Road',
    description:
      "Roads play a vital role in a nation's infrastructure. Since 2007, SPPL has been emerging as a trusted road construction contractor in India, building a strong reputation by delivering quality projects using the latest proven technologies in concrete and bitumen road construction.",
    link: '/concrete-road-construction-company-in-india',
  },
  {
    icon: 'fa-industry',
    title: 'Industrial Road',
    description:
      'SPPL provides world-class road construction services across India. The company has been actively engaged in the construction of highways, industrial roads, and various infrastructure development projects. Over the years, SPPL has emerged as a reliable and innovative player in the infrastructure sector, committed to quality, durability, and timely project execution.',
    link: '/industrial-road-construction-in-india',
  }
];

const RS = () => {
  return (
    <div className="container-fluid mt-4">
   

      <div className="container">
        <div className="row gy-4">
          {roadServices.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="service-item font-pop p-5 box_sdw10 p-3 position-relative h-100">
                <div className="icon mb-3">
                  <i className={`fa-solid ${service.icon} fa-2x `}></i>
                </div>
                <h3
                  className="fw-semibold"
                  style={{ color: '#52565E', fontSize: 22 }}
                >
                  {service.title}
                </h3>
                <p style={{ color: '#52565E', fontSize: 14 }} className='text-justify'>
                  {service.description}
                </p>
                {service.link && (
                  <Link
                  href={service.link}
                  className="readmore stretched-link"
                >
                  Know More <i className="bi bi-arrow-right"></i>
                </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RS;
