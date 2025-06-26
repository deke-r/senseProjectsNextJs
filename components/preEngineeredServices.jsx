'use client';

import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css'; 

const constructionServices = [
  {
    icon: 'fa-warehouse',
    title: 'Pre-Engineered Warehouse',
    description:
      'Looking for a smarter storage solution? Choose SPPL for customized, well-engineered pre-fabricated warehouses designed to maximize space, efficiency, and durability.',
  },
  {
    icon: 'fa-archway',
    title: 'Pre-Engineered Terminal',
    description:
      'Looking to streamline transportation and logistics? SPPL delivers pre-engineered terminals designed for seamless movement, operational efficiency, and long-term performance.',
  },
  {
    icon: 'fa-industry',
    title: 'Pre-Engineered Factory',
    description:
      'Ready to enhance your manufacturing capabilities? Trust SPPL for custom-built pre-engineered factories designed to optimize productivity, efficiency, and operational flow.',
  },
  {
    icon: 'fa-store',
    title: 'Pre-Engineered Cold Storage',
    description:
      'Need reliable cold storage solutions? SPPL delivers expertly designed pre-engineered cold storage units that ensure precise temperature control for optimal preservation of your goods.',
  },
];


const PreEngineeredServices = () => {
  return (
    <div className="container-fluid">
      <SectionHeader header="Explore Our Services" color="#134377" />

      <div className="container">
        <div className="row gy-4">
          {constructionServices.map((service, index) => (
            <div
              className="col-lg-6 col-md-6"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreEngineeredServices;
