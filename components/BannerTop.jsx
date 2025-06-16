'use client';

import React from 'react';
import Link from 'next/link';
import Header from './Header';

const BannerTop = ({ page, page2, page3 }) => {
  return (
    <>
      <div className="banner-top banner-top-about" style={{ height: 500 }}>
        <div className="video-overlay"></div>
        <Header />

        <div className="container banner-txt font-pop">
          <h1>{page}</h1>
          <h3>
            <Link href="/" style={{ textDecoration: 'none' }}>

              <span className="text-o">Home</span>

            </Link>
            {page2 && (
              <Link href={`/${page2}`} className="text-o" style={{ textDecoration: 'none' }}>

                {' / ' + page2}

              </Link>
            )}
            {page3 && (
              <Link href={`/${page3}`} className="text-o" style={{ textDecoration: 'none' }}>

                {' / ' + page3}

              </Link>
            )}
            {' / ' + page}
          </h3>
        </div>
        <div className="wave-container">
          <svg className="wave" viewBox="0 0 1200 200" preserveAspectRatio="none">
            {/* Layer 1 - Foreground wave */}
            <path
              fill="white"
              opacity="0.9"
              d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,200 L0,200 Z"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
          M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,200 L0,200 Z;
          M0,100 C150,100 350,150 600,100 C850,50 1050,150 1200,100 L1200,200 L0,200 Z;
          M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,200 L0,200 Z
        "
              />
            </path>

            {/* Layer 2 - Midground wave */}
            <path
              fill="white"
              opacity="1"
              d="M0,120 C200,180 400,40 600,120 C800,200 1000,60 1200,120 L1200,200 L0,200 Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
          M0,120 C200,180 400,40 600,120 C800,200 1000,60 1200,120 L1200,200 L0,200 Z;
          M0,120 C200,60 400,180 600,120 C800,60 1000,180 1200,120 L1200,200 L0,200 Z;
          M0,120 C200,180 400,40 600,120 C800,200 1000,60 1200,120 L1200,200 L0,200 Z
        "
              />
            </path>

            {/* Layer 3 - Background wave (fades away softly) */}
            <path
              fill="white"
              opacity="1"
              d="M0,130 C300,200 900,50 1200,130 L1200,200 L0,200 Z"
            >
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
          M0,130 C300,200 900,50 1200,130 L1200,200 L0,200 Z;
          M0,130 C300,50 900,200 1200,130 L1200,200 L0,200 Z;
          M0,130 C300,200 900,50 1200,130 L1200,200 L0,200 Z
        "
              />
            </path>
          </svg>
        </div>

      </div>
    </>
  );
};

export default BannerTop;
