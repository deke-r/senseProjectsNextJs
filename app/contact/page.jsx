'use client'
import React, { useRef } from 'react';
import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import '../../styles/Contact.css';

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const msgRef = useRef();

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.style.border = '2px solid #F97306';
    }
  };

  const handleBlur = (ref) => {
    if (ref.current) {
      ref.current.style.border = '1px solid #eaeaea';
    }
  };

  return (
    <>
      <BannerTop page="Contact" />

      <section className="contact-section py-5">
        <div className="container">
          <div className="row g-5">
            {/* Address Info */}
            <div className="col-lg-5">
              <div className="info-card shadow-sm p-4  mb-4">
                <SectionHeader header="Headquarters" color="#134377" />
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o">
                    <i className="fa-solid fa-location-dot"></i>
                  </strong>{' '}
                  DLF Prime Tower, Okhla Phase 1, Delhi-110020
                </p>
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o">
                    <i className="fa-solid fa-phone"></i>
                  </strong>{' '}
                  +91-9319412012
                </p>
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o">
                    <i className="fa-solid fa-envelope"></i>
                  </strong>{' '}
                  info@senseprojects.in
                </p>
                <p className="f_16 font-pop a7 font-semibold">
                  <strong className="text-o">
                    <i className="fa-solid fa-clock"></i>
                  </strong>{' '}
                  Mon – Sun: 8:00 AM – 08:00 PM
                </p>
              </div>

              {/* Branch Offices */}
              <div className="info-card shadow-sm p-4 mt-4">
                <SectionHeader header="Branch Offices" color="#134377" />

                <div className="branch-office mb-4 d-flex">
                  <i className="fa-solid fa-location-dot text-o me-3 mt-1"></i>
                  <div>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      Sense Projects Private Limited
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-1">A-17, Ground Floor,</p>
                    <p className="f_16 font-pop a7 font-semibold mb-1">Sector 4,</p>
                    <p className="f_16 font-pop a7 font-semibold mb-0">Noida, Uttar Pradesh 201301</p>
                  </div>
                </div>

                <div className="branch-office mb-4 d-flex">
                  <i className="fa-solid fa-location-dot text-o me-3 mt-1"></i>
                  <div>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      Sense Projects Private Limited
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      B-703, B Wing, ITrend Homes Rd,
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-1">Maan, Hinjawadi Phase 2,</p>
                    <p className="f_16 font-pop a7 font-semibold mb-0">
                      Pune, Maharashtra 411057
                    </p>
                  </div>
                </div>

                <div className="branch-office mb-4 d-flex">
                  <i className="fa-solid fa-location-dot text-o me-3 mt-1"></i>
                  <div>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      Sense Projects Private Limited
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      Lakkasandra Extension, Wilson Garden,
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-0">
                      Main Road, Bangalore – 560030
                    </p>
                  </div>
                </div>

                <div className="branch-office d-flex">
                  <i className="fa-solid fa-location-dot text-o me-3 mt-1"></i>
                  <div>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      Sense Projects Private Limited
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      Titanium City Center, Near Sachin Tower,
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-1">
                      100 Ft Ring Road, Anand Nagar Satellite,
                    </p>
                    <p className="f_16 font-pop a7 font-semibold mb-0">Ahmedabad – 380015</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="form-card shadow-sm p-5">
                <SectionHeader header="Send us a Message" color="#134377" />

                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control inp rounded-0 styled-input"
                      placeholder="Name"
                      ref={nameRef}
                      onFocus={() => handleFocus(nameRef)}
                      onBlur={() => handleBlur(nameRef)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control inp rounded-0 styled-input"
                      placeholder="Email"
                      ref={emailRef}
                      onFocus={() => handleFocus(emailRef)}
                      onBlur={() => handleBlur(emailRef)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control inp rounded-0 styled-input"
                      placeholder="Mobile"
                      ref={phoneRef}
                      onFocus={() => handleFocus(phoneRef)}
                      onBlur={() => handleBlur(phoneRef)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control inp rounded-0 styled-input"
                      placeholder="Subject"
                      ref={subjectRef}
                      onFocus={() => handleFocus(subjectRef)}
                      onBlur={() => handleBlur(subjectRef)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control inp-text rounded-0 styled-input"
                      rows="5"
                      placeholder="Message"
                      ref={msgRef}
                      onFocus={() => handleFocus(msgRef)}
                      onBlur={() => handleBlur(msgRef)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn submit_btn rounded-0 font-semibold font-pop py-3 w-100"
                  >
                    <span>Submit Message</span>
                  </button>
                </form>
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
