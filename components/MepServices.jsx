'use client';

import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css'; 

const mepServices = [
  {
    icon: 'fa-bolt',
    title: 'Electrical',
    description:
      'We believe every project is unique, with its own specific demands and specifications. That’s why our experienced team is dedicated to delivering the best MEP services in Faridabad. Electrical services are one of our core specialties.',
    link: '/electrical-mep-services-in-india',
  },
  {
    icon: 'fa-faucet',
    title: 'Plumbing',
    description:
      'Plumbing is a vital component of MEP, making expert guidance essential. Our outstanding projects and the trust of our clients have established us as one of the most reliable MEP contractors nationwide.',
    link: '/plumbing-mep-services-in-india',
  },
  {
    icon: 'fa-fire-extinguisher',
    title: 'HVAC & Fire-Fighting',
    description:
      'HVAC and fire-fighting services are key components of MEP, making expert guidance essential. Our successful projects and strong client trust have established us as one of the most reliable MEP contractors.',
    link: '/hvac-firefighting-mep-services-in-india',
  },
];

const MepServices = () => {
  return (
    <div className="container-fluid">
      <SectionHeader header="MEP Services In India" color="#134377" />

      <div className="container">
        <div className="row gy-4">
          {mepServices.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="service-item font-pop p-5 box_sdw10 p-3 position-relative">
                <div className="icon mb-3">
                  <i className={`fa-solid ${service.icon} fa-2x `}></i>
                </div>
                <h3 className="fw-semibold" style={{ color: '#52565E', fontSize: 22 }}>
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

export default MepServices;
