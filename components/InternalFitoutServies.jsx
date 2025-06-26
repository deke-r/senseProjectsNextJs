'use client';

import SectionHeader from '../components/SectionHeader';
import '../styles/OurServices.css';

const interiorServices = [
  {
    icon: 'fa-couch',
    title: 'Residential Interior',
    description:
      'As interior design is an essential extension of architecture, we specialize in crafting residential spaces that are thoughtfully designed, effortlessly modern, and elegantly luxurious—where form meets function, and every detail evokes comfort and sophistication.',
  },
  {
    icon: 'fa-briefcase',
    title: 'Corporate Interior',
    description:
      'Sense Projects is a leading corporate interior design firm, driven by a dynamic team of visionary architects, experienced project managers, skilled engineers, and trusted contractors. We deliver bespoke, future-forward workspaces that reflect innovation, efficiency, and style.',
  },
  {
    icon: 'fa-store',
    title: 'Retail Interior',
    description:
      'We are premier interior designers with over 14 years of experience, specializing in retail store design. Our work blends functionality with aesthetic precision, reflecting a deep understanding of the art and strategy behind impactful commercial spaces.',
  },
  {
    icon: 'fa-bed',
    title: 'Hospitality Interior',
    description:
      'We offer end-to-end hospitality interior solutions, combining premium materials with the latest design trends. Our creative team crafts spaces that are not only modern and visually striking but also functional, welcoming, and tailored to elevate the guest experience.',
  },
  {
    icon: 'fa-industry',
    title: 'Industrial Interior',
    description:
      'We are a service-driven interior design firm specializing in industrial spaces. Our process begins with a deep understanding of your operational needs, followed by tailored design solutions that enhance functionality, efficiency, and long-term performance.',
  },
  {
    icon: 'fa-school',
    title: 'Institutional Interior',
    description:
      'We design refined institutional interiors that prioritize purpose and performance. With a focus on functionality, our experienced team ensures each space is thoughtfully planned to support efficiency, engagement, and long-term use.',
  },
];


const InternalFitoutServies = () => {
  return (
    <div className="container-fluid">
      <SectionHeader header="Interior Fit-Out Services Include" color="#134377" />

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
                <p style={{ color: '#52565E', fontSize: 14 }} className='text-justify'>
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
