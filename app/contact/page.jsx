'use client';

import React from 'react';
import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ContactForm from '../../components/ContactForm';
import '../../styles/Contact.css';

const Contact = () => {
  return (
    <>
      <BannerTop page="Contact" />

      <section className="contact-section py-5">
        <div className="container">
          <div className="row g-5">
            {/* Address Info */}
            <div className="col-lg-5">
              <div className="info-card shadow-sm p-4 mb-4">
                <SectionHeader header="Headquarter" color="#134377" />
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o"><i className="fa-solid fa-location-dot"></i></strong>{' '}
                  DLF Prime Tower, Okhla Phase 1, Delhi-110020
                </p>
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o"><i className="fa-solid fa-phone"></i></strong>{' '}
                  +91-9319412012
                </p>
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o"><i className="fa-solid fa-envelope"></i></strong>{' '}
                  info@senseprojects.in
                </p>
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o"><i className="fa-solid fa-clock"></i></strong>{' '}
                  Mon – Sun: 8:00 AM – 08:00 PM
                </p>
              </div>

              {/* Branch Offices */}
              <div className="info-card shadow-sm p-4 mt-4">
                <SectionHeader header="Branch Offices" color="#134377" />

                {[
                  {
                    address: ['A-17, Ground Floor,', 'Sector 4,', 'Noida, Uttar Pradesh 201301'],
                  },
                  {
                    address: [
                      'B-703, B Wing, ITrend Homes Rd,',
                      'Maan, Hinjawadi Phase 2,',
                      'Pune, Maharashtra 411057',
                    ],
                  },
                  {
                    address: [
                      'Lakkasandra Extension, Wilson Garden,',
                      'Main Road, Bangalore – 560030',
                    ],
                  },
                  {
                    address: [
                      'Titanium City Center, Near Sachin Tower,',
                      '100 Ft Ring Road, Anand Nagar Satellite,',
                      'Ahmedabad – 380015',
                    ],
                  },
                ].map((office, index) => (
                  <div className="branch-office mb-4 d-flex" key={index}>
                    <i className="fa-solid fa-location-dot text-o me-3 mt-1"></i>
                    <div>
                      <p className="f_16 font-pop a7 font-semibold mb-1">
                        Sense Projects Private Limited
                      </p>
                      {office.address.map((line, i) => (
                        <p key={i} className={`f_16 font-pop a7 font-semibold ${i === office.address.length - 1 ? 'mb-0' : 'mb-1'}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="form-card shadow-sm p-5">
                <SectionHeader header="Send Us A Message" color="#134377" />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-5">
        <div className="container">
          <SectionHeader header="Locate Us on the Map" color="#134377" />
          <div className="map-container shadow rounded-4 overflow-hidden mt-4">
            <iframe
              title="Sense Projects Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2706686017546!2d77.26796887528627!3d28.56163387570353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3936d0dc57f%3A0xf905bc5d322db316!2sSurya%20Plaza%20Building!5e0!3m2!1sen!2sin!4v1744610190756!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <PanIndia />
    </>
  );
};

export default Contact;
