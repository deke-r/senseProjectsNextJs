'use client';

import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css';

const services = [
  {
    icon: 'fa-building',
    title: 'Civil Constructions',
    description:
      'Our civil contractors provide you with high-quality construction services and cost-effective solutions for various types of construction projects across India.',
    link: '/construction-contractors-in-india',
  },
  {
    icon: 'fa-warehouse',
    title: 'Pre Engineered Buildings',
    description:
      'PEB or Pre-engineered Buildings are constructed using pre-made components for quick and efficient building construction. Take the first step towards your PEB building - call us today!',
    link: '/services/preengineeredbuildings',
  },
  {
    icon: 'fa-ruler-combined',
    title: 'Interior Fit-out',
    description:
      'Interior design involves arranging and decorating spaces to make them attractive and functional. Ready to transform your space? Contact us for expert interior design services!',
    link: '/services/interiorfitout',
  },
  {
    icon: 'fa-road',
    title: 'Road Services',
    description:
      'Roads are important because they help us travel and connect places. SPPL is a growing company. We started our journey in 2007 and successfully completed many remarkable roads.',
    link: '/services/roadservices',
  },
  {
    icon: 'fa-handshake',
    title: 'Collaboration',
    description:
      "Collaboration in construction involves sharing ideas, resources, and responsibilities for project achievement. Let's work together for construction success: Join hands and collaborate!",
    link: '/services/collaboration',
  },
  {
    icon: 'fa-screwdriver-wrench',
    title: 'Mechanical Electrical Plumbing',
    description:
      'MEP services are important for buildings. They include mechanical, electrical, and plumbing solutions. Sense Projects provides MEP services across India.',
    link: '/services/mechanicalelectricalplumbing',
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
                <p style={{ color: '#52565E', fontSize: 14 }}>
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
