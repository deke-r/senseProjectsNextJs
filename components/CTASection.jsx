import React from 'react';
import '../styles/CTASection.css';

const CTASection = (props) => {
  return (
    <section className="cta-section">
      <div className="container py-5">
        <div className="cta-box p-4  box_sdw10">
          <div className="row align-items-center">
            <div className="col-md-9 text-center text-md-start">
              <h3 className="fw-bold mb-2 font-pop">{props.h3}</h3>
              <p className="mb-0 font-pop">{props.p}</p>
            </div>
            <div className="col-md-3 text-center mt-4 mt-md-0">
              <a href="tel:+919319412012" className="cta-button btn btn-lg font-pop" style={{color:'#F97306'}}>
                <span>
                <i className="fa-solid fa-phone me-2 text-white"></i>
                </span>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
