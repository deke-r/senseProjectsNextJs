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