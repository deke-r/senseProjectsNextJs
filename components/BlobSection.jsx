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

          <div className="col-md-6 ">
        
            <h2 className="fw-bold mb-3 text-blue">Building a Better Tomorrow with Confidence and Craftsmanship</h2>
            <p className='text-justify fw-semibold text-muted'>
              Sense Projects Pvt. Ltd. is one of India’s most trusted names in construction, renowned for delivering excellence across residential, commercial, industrial, institutional, and hospitality sectors. With a legacy rooted in precision, performance, and professionalism, we transform bold ideas into iconic structures.
            </p>

            <p className='text-justify  fw-semibold text-muted'>
              From concept to completion, our multidisciplinary team of visionary architects, skilled engineers, and experienced project managers ensures each project is executed with meticulous attention to detail, uncompromising quality, and on-time delivery.
            </p>
            <p className='text-justify fw-semibold text-muted'>
              At Sense Projects, innovation meets integrity. We integrate cutting-edge technology, sustainable building practices, and design-forward thinking to create spaces that are not only structurally sound but also aesthetically timeless.

              Whether it's a luxury villa, a smart warehouse, or a state-of-the-art institutional campus, we approach every project with a deep understanding of its purpose—and a commitment to exceed expectations.
            </p>
            <p className='fw-semibold text-muted'>
              Choose Sense Projects for reliability, innovation, and top-tier construction services.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlobSection