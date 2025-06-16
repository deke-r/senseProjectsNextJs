'use client'

import React from 'react'
import Header from '../components/Header'
import Carosuel from '../components/Carosuel'
import BlobSection from '../components/BlobSection'
import WhoWeAre from '../components/WhoWeAre'
import CTASection from '../components/CTASection'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import AwardWinning from '../components/AwardWinning'
import OurClients from '../components/OurClients'
import Testimonials from '../components/Testimonials'
import PanIndia from '../components/PanIndia'

export default function HomePage() {
  return (
    <>
      <div className="banner-top">
        <Carosuel />
        <div className="video-overlay"></div>
        <Header />

        <div className="wave-container">
          <svg className="wave" viewBox="0 0 1200 200" preserveAspectRatio="none">
          
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

            {/* Midground Wave */}
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

            {/* Background Wave */}
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

      <BlobSection />
      <WhoWeAre />
      <CTASection
        h3="Ready to Build with Award-Winning Experts?"
        p="Get your construction done by professionals who solve with innovation — all at an affordable price."
      />
      <OurServices />
      <WhyChooseUs />
      <AwardWinning />
      <OurClients />
      <Testimonials />
      <PanIndia />
    </>
  )
}
