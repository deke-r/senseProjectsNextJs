'use client';

import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css'; 

const collaborationServices = [
  {
    icon: 'fa-house-circle-check',
    title: 'Residential Collaboration',
    description:
      'Quality trusted Ahmedabad Building Construction Company, focusing on Ahmedabad prime residential building projects, extensions, conversions and refurbishments.',
    link: '/resedential-collaboration-Services-Provider-in-india',
  },
  {
    icon: 'fa-building',
    title: 'Commercial Collaboration',
    description:
      'We offer modern, aesthetical and tailor-made designs with 100% transparency and quality assurance. We build your dream home without taking your name out of it.',
    link: '/commercial-collaboration-services-in-ahmedabad',
  },
];

const CollaborationServices = () => {
  return (
    <div className="container-fluid">
      <SectionHeader header="Best Collaboration Services Provider in Ahmedabad" color="#134377" />

      <div className="container">
        <div className="row gy-4">
          {collaborationServices.map((service, index) => (
            <div
              className="col-lg-6 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="service-item font-pop p-5 box_sdw10 p-3 position-relative">
                <div className="icon mb-3">
                  <i className={`fa-solid ${service.icon} fa-2x `}></i>
                </div>
                <h3
                  className="fw-semibold"
                  style={{ color: '#52565E', fontSize: 22 }}
                >
                  {service.title}
                </h3>
                <p style={{ color: '#52565E', fontSize: 14 }}>
                  {service.description}
                </p>
                <Link href={service.link} className="readmore stretched-link">
                  Know More <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborationServices;
