'use client';

import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css';

const interiorServices = [
  {
    icon: 'fa-couch',
    title: 'Residential Interior',
    description:
      'Since interior designing is integral part of any architecture, we are focused on creating residential interior space that is functional, modern, beautiful and comforting.',
  },
  {
    icon: 'fa-briefcase',
    title: 'Corporate Interior',
    description:
      'Sense Projects is a premier corporate interior decorator in Gurgaon. We are backed by a strong team of ingenious architects, project managers, engineers, and contractors.',
  },
  {
    icon: 'fa-store',
    title: 'Retail Interior',
    description:
      'We are premier interior designers in Faridabad serving the community for over 15+ years. We are experts at retail store designing and know the real art.',
  },
  {
    icon: 'fa-bed',
    title: 'Hospitality Interior',
    description:
      'We are a full-service interior solution provider using the best materials and latest trends. Our creative team delivers modern, functional, and aesthetic spaces.',
  },
  {
    icon: 'fa-industry',
    title: 'Industrial Interior',
    description:
      'We are a service-oriented company. Our process starts with understanding how you want to use your facility and then designing it exclusively to support your operations.',
  },
  {
    icon: 'fa-school',
    title: 'Institutional Interior',
    description:
      'We design exquisite institutional interiors with maximum functionality. Our experienced team ensures every space fulfills its intended purpose efficiently.',
  },
];

const InternalFitoutServies = () => {
  return (
    <div className="container-fluid">
      <SectionHeader header="Interior Fit-out Services" color="#134377" />

      <div className="container">
        <div className="row gy-4">
          {interiorServices.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="service-item font-pop p-5 box_sdw10 p-3 position-relative">
                <div className="icon">
                  <i className={`fa-solid ${service.icon}`}></i>
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
                {/* Link removed as per instruction */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternalFitoutServies;
