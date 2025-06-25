'use client';

import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css'; 

const constructionServices = [
  {
    icon: 'fa-house-chimney',
    title: 'Residential Construction',
    description: 'Sense Projects specializes in building high-quality Independent Houses, Bungalows, Flats, Apartments, Villas, and well-planned Plot layouts.',
    link: '/residential-construction-company-in-india',
  },
  {
    icon: 'fa-industry',
    title: 'Industrial Construction',
    description: 'Sense Projects excels in Industrial Construction, delivering top-notch solutions for factories, warehouses, manufacturing facilities, and other industrial structures.',
    link: '/industrial-construction-company-in-india',
  },
  {
    icon: 'fa-building-columns',
    title: 'Commercial Construction',
    description: 'Sense Projects is a leader in Commercial Construction, providing exceptional services for offices, retail spaces, hotels, restaurants, and other commercial buildings.',
    link: '/commercial-construction-company-in-india',
  },
  {
    icon: 'fa-hotel',
    title: 'Hospitality Construction',
    description: 'We create beautiful and detailed designs for luxurious hospitality spaces, considering today\'s needs. We take care of everything from planning to construction.',
    link: '/hospitality-construction-company-in-india',
  },
  {
    icon: 'fa-school',
    title: 'Institutional Construction',
    description: 'Sense Projects specializes in Institutional Construction, creating purpose-built structures for schools, colleges, universities, and other educational institutions with a focus on functionality and quality.',
    link: '/institutional-construction-company-in-india',
  },
  {
    icon: 'fa-warehouse',
    title: 'Warehouse Construction',
    description: 'Sense Projects excels in Warehouse Construction, designing and constructing efficient storage facilities tailored to meet the specific needs of businesses.',
    link: '/warehouse-construction-company-in-india',
  }
];

const ConstructionServices = () => {
  return (
    <div className="container-fluid">
      <SectionHeader header="Construction Services" color="#134377" />

      <div className="container">
        <div className="row gy-4">
          {constructionServices.map((service, index) => (
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

export default ConstructionServices;
