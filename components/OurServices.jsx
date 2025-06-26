'use client';

import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css';

const services = [
  {
    icon: 'fa-building',
    title: 'Civil Constructions',
    description:
      'At Sense Projects Pvt. Ltd., we offer reliable and high-quality civil construction services tailored to meet the diverse needs of clients across India. Backed by experienced civil contractors and engineering experts, we execute projects with precision, speed, and structural integrity.',
    link: '/construction-contractors-in-india',
  },
  {
    icon: 'fa-warehouse',
    title: 'Pre Engineered Buildings',
    description:
      'Sense Projects Pvt. Ltd. offers innovative Pre-Engineered Building (PEB) solutions designed for speed, strength, and efficiency. Using factory-fabricated components, PEB structures enable faster construction timelines, reduced costs, and minimal on-site disruption.',
    link: '/pre-engineered-buildings-company-in-india',
  },
  {
    icon: 'fa-ruler-combined',
    title: 'Interior Fit-out',
    description:
      'At Sense Projects Pvt. Ltd., we deliver complete interior fit-out solutions that blend aesthetics, functionality, and precision. From planning and layout to custom finishes, we transform empty spaces into inspiring environments.',
    link: '/interior-fitout-company-in-india',
  },
  {
    icon: 'fa-road',
    title: 'Road Services',
    description:
      'Since 2007, SPPL has delivered high-quality road construction projects that enhance connectivity and regional growth. Our expertise spans highways, urban roads, and rural infrastructure—built with safety, precision, and lasting impact.',
    link: '/road-construction-company-in-india',
  },
  {
    icon: 'fa-handshake',
    title: 'Collaboration',
    description:
      'We believe construction success stems from strong collaboration. At Sense Projects Pvt. Ltd., we foster partnerships built on transparency, shared goals, and seamless teamwork to deliver results that exceed expectations.',
    link: '/construction-collaboration-in-india',
  },
  {
    icon: 'fa-screwdriver-wrench',
    title: 'Mechanical Electrical Plumbing',
    description:
      'Our MEP solutions are the backbone of functional buildings. From HVAC to electrical systems and plumbing, we offer energy-efficient, code-compliant services for seamless building performance across India.',
    link: '/mep-services-in-india',
  },
];


const OurServices = () => {
  return (
    <div className="container-fluid">
      <SectionHeader header="Our Services" color="#134377" />

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
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
                <p style={{ color: '#52565E', fontSize: 14 }} className='text-justify'>
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="readmore stretched-link"
                >
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

export default OurServices;
