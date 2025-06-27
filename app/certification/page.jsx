export const metadata = {
  title: 'Certifications & Accreditations – Sense Projects Pvt. Ltd.',
  description:
    'Explore our official certifications and accreditations that reflect Sense Projects Pvt. Ltd.’s commitment to quality, safety, sustainability, and industry excellence.',
  keywords: [
    'Construction Certifications India',
    'ISO Certified Builders',
    'Quality Assurance Accreditation',
    'Certified Construction Company India',
    'Safety Certified Infrastructure Firm',
    'Sustainability Certifications Construction',
    'Accredited Construction Firm',
    'Compliance Certified Company India',
    'Recognized Builders Certifications',
    'Green Building Certifications India'
  ],
  alternates: {
    canonical: 'https://senseprojects.in/certification',
  },
  openGraph: {
    title: 'Certifications & Accreditations – Sense Projects Pvt. Ltd.',
    description:
      'View the official recognitions and quality certifications that establish Sense Projects Pvt. Ltd. as a leader in construction excellence across India.',
    locale: 'en_US',
    type: 'website',
    siteName: 'Sense Projects Pvt. Ltd.',
    url: 'https://senseprojects.in/certification',
  },
};



import React from 'react'
import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import '../../styles/Certification.css'
const Certification = () => {
    return (
        <>
            <BannerTop page='Certification' />

            <div className="container-fluid">
                <SectionHeader header='Our Certification' color='#134377'></SectionHeader>

                <div className="certification-section">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="cert-img-box position-relative">
                                    <img src='/images/Sense Projects QMS_page-0001.webp' className="img-fluid rounded-0 rounded-top-4 mx-auto d-block" alt="ISO Certificate 1" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cert-img-box position-relative">
                                    <img src='/images/Sense Projects OHS_page-0001.webp' className="img-fluid rounded-0 rounded-top-4 mx-auto d-block" alt="ISO Certificate 2" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <PanIndia />
        </>
    )
}

export default Certification