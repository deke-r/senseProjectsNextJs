import React from 'react';
import '../styles/AwardWinning.css';

const AwardWinning = () => {
  return (
    <div className="award-winning-section position-relative text-white">
      {/* Top Wave */}
      <div className="wave wave-top-award">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,64L24,64C48,64,96,64,144,69.3C192,75,240,85,288,96C336,107,384,117,432,101.3C480,85,528,43,576,32C624,21,672,43,720,53.3C768,64,816,64,864,74.7C912,85,960,107,1008,133.3C1056,160,1104,192,1152,197.3C1200,203,1248,181,1296,176C1344,171,1392,181,1416,186.7L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container py-5">
        <div className="content-box py-4 px-3">
          <h2 className="section-title font-pop fw-bold text-center mb-4">
            Award-winning Leaders, Setting Benchmarks in the Construction Industry.
          </h2>
          <p className="font-pop text-light paragraph mb-3">
          Sense Projects Pvt Ltd, a trusted construction company in India, is dedicated to customer satisfaction. With our determined commitment to quality and the use of premium materials, we deliver projects on time and within budget. As award-winning leaders in the industry, we stand out for our distinction and dependability.
          </p>
          <p className="font-pop text-light paragraph mb-3">
          Sense Projects Pvt Ltd is your trusted choice for residential, commercial, and industrial projects. With a team that has specific engineers, architects, managers, and trained workers, we bring more than a decade years of experience to every project. Our reliable network of suppliers ensures a complete and top-quality construction service.          </p>
          <p className="font-pop text-light paragraph">

          Sense Projects Pvt Ltd is an award-winning leader in the construction industry. We excel in maximizing space utilization and ensuring perfection in every detail. Our meticulous checks ensure timely project completion at competitive prices. Our satisfied clients return to us, a command of our allegiance to excellence.          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="wave wave-bottom-award">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,288L24,272C48,256,96,224,144,186.7C192,149,240,107,288,101.3C336,96,384,128,432,117.3C480,107,528,53,576,42.7C624,32,672,64,720,90.7C768,117,816,139,864,149.3C912,160,960,160,1008,154.7C1056,149,1104,139,1152,117.3C1200,96,1248,64,1296,85.3C1344,107,1392,181,1416,218.7L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default AwardWinning;
