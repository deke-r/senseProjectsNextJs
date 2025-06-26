'use client';

import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css'; 

const constructionServices = [
  {
    icon: 'fa-house-chimney',
    title: 'Residential Construction',
    description:
      'Sense Projects excels in crafting premium independent houses, bungalows, flats, apartments, villas, and meticulously planned plot layouts—delivering quality, elegance, and thoughtful design in every project.',
    link: '/residential-construction-company-in-india',
  },
  {
    icon: 'fa-industry',
    title: 'Industrial Construction',
    description:
      'Sense Projects specializes in industrial construction, providing superior solutions for factories, warehouses, manufacturing facilities, and other industrial infrastructures—ensuring durability, efficiency, and excellence at every stage.',
    link: '/industrial-construction-company-in-india',
  },
  {
    icon: 'fa-building-columns',
    title: 'Commercial Construction',
    description:
      'Sense Projects stands as a leader in commercial construction, delivering exceptional services across offices, retail spaces, hotels, restaurants, and diverse commercial developments—with a commitment to quality, innovation, and client satisfaction.',
    link: '/commercial-construction-company-in-india',
  },
  {
    icon: 'fa-hotel',
    title: 'Hospitality Construction',
    description:
      'We design and build exquisite hospitality spaces that blend luxury with functionality, tailored to meet contemporary standards. From initial planning through to final construction, we manage every detail to deliver exceptional experiences.',
    link: '/hospitality-construction-company-in-india',
  },
  {
    icon: 'fa-school',
    title: 'Institutional Construction',
    description:
      'Sense Projects specializes in institutional construction, delivering purpose-built facilities for schools, colleges, universities, and educational institutions—designed with a strong focus on functionality, durability, and quality.',
    link: '/institutional-construction-company-in-india',
  },
  {
    icon: 'fa-warehouse',
    title: 'Warehouse Construction',
    description:
      'Sense Projects specializes in warehouse construction, delivering efficient, customized storage solutions designed to meet the unique operational needs of businesses.',
    link: '/warehouse-construction-company-in-india',
  },
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
