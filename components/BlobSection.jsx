import React from 'react';
import '../styles/BlobSection.css';
const BlobSection = () => {
  return (
    <>

      <section className="container-fluid diagonal-border-section py-5 pattern-bg">
        <div className="row align-items-center px-md-5 px-3">
          <div className="col-md-6 mb-4 mb-md-0 position-relative text-center">
            <div className="blob-container position-relative">
              <svg viewBox="0 0 500 500" className="blob-svg">
                <path id="blobPath" fill="#FFE6D1"
                  d="M424.5,310.5Q416,371,367,412Q318,453,252.5,459Q187,465,139.5,422.5Q92,380,77.5,318Q63,256,74,195Q85,134,142,98Q199,62,257.5,58Q316,54,377,91Q438,128,438.5,192Q439,256,424.5,310.5Z">
                  <animate
                    attributeName="d"
                    dur="6s"
                    repeatCount="indefinite"
                    values="
        M424.5,310.5Q416,371,367,412Q318,453,252.5,459Q187,465,139.5,422.5Q92,380,77.5,318Q63,256,74,195Q85,134,142,98Q199,62,257.5,58Q316,54,377,91Q438,128,438.5,192Q439,256,424.5,310.5Z;

        M410,320Q390,380,340,410Q290,440,250,440Q210,440,170,410Q130,380,110,320Q90,260,120,200Q150,140,190,110Q230,80,290,90Q350,100,390,140Q430,180,420,240Q410,300,410,320Z;

        M424.5,310.5Q416,371,367,412Q318,453,252.5,459Q187,465,139.5,422.5Q92,380,77.5,318Q63,256,74,195Q85,134,142,98Q199,62,257.5,58Q316,54,377,91Q438,128,438.5,192Q439,256,424.5,310.5Z
      "
                  />
                </path>
              </svg>

              <img src='/images/1061-logo-1713383225.412color-F97306.svg' alt="Construction" className="blob-img" />
            </div>
          </div>

          <div className="col-md-6 blob-text">
            <h5 className="text-blue fw-bold">We are trusted CONSTRUCTION COMPANY</h5>
            <h2 className="fw-bold mb-3">Building a Better Future: Our Trusted Legacy in Construction</h2>
            <p className='text-justify'>
              Sense Projects Pvt Ltd is a reputed construction company in India. Our construction involves designing and building structures — covering residential, commercial, industrial, and hospitality projects.
            </p>
            <p className='text-justify'>
              From conceptualising architectural designs to meticulously crafting structures, our dedicated team of architects and engineers ensures excellence at every stage.
            </p>
            <p>
              Choose Sense Projects for reliability, innovation, and top-tier construction services.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlobSection