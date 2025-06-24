'use client';

import Link from 'next/link';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <section className="mid-footer pb-0 mb-0 pt-50">
      <div className="container ftc pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="location">
              <ul className="social-list">
                <li>
                  <Link href="https://www.facebook.com/senseprojects" target="_blank" className="facebook">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/sense_projects" target="_blank" className="twitter">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/sense-projects-pvt-ltd/" target="_blank" className="linkedin">
                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/senseprojects/" target="_blank" className="instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://in.pinterest.com/senseprojects1/" target="_blank" className="pinterest">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12 text-center">
            <div className="location">
              <ul className="location-list">
                {[
                  'delhi',
                  'noida',
                  'gurgaon',
                  'mumbai',
                  'pune',
                  'bengaluru',
                  'chennai',
                  'hyderabad',
                  'ahmedabad',
                  'kolkata',
                  'jaipur',
                ].map((city, idx) => (
                  <li key={idx}>
                    <Link
                      href={`https://${city}.senseprojects.in/`}
                      target="_blank"
                      className="location-li0st"
                    >
                      {city.charAt(0).toUpperCase() + city.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
       
      </div>
      <div className="container-fluid">
         <div className="row bg-blue py-2 text-light text-center">
          <div className="col-12">
          Complete Solution For Construction & Interior Works in PAN India Copyright 2007 ~ 2025 Sense Projects Pvt Ltd All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
