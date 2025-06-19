'use client';

import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css'; 

const constructionServices = [
  {
    icon: 'fa-warehouse',
    title: 'Pre-Engineered Warehouse',
    description: 'If you need a better storage solution? then choose SPPL for well-designed and customized pre-engineered warehouses.',

  },
  {
    icon: 'fa-archway',
    title: 'Pre-Engineered Terminal',
    description: 'Want to make transportation easier! SPPL built pre-engineered terminals for smooth logistics and efficient operations.',
  },
  {
    icon: 'fa-industry',
    title: 'Pre-Engineered Factory',
    description: 'Want to improve manufacturing? Trust SPPL for specialized pre-engineered factories to boost productivity and efficiency',
  },
  {
    icon: 'fa-store',
    title: 'Pre-Engineered Cold Storage',
    description: 'Need to keep things fresh! SPPL provides well-designed pre-engineered cold storage units ensure optimal temperature control for preserving goods.',
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
                <p style={{ color: '#52565E', fontSize: 14 }}>
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
