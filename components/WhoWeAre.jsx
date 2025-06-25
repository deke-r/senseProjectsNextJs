import React from 'react';
import '../styles/WhoWeAre.css';
import SectionHeader from '../components/SectionHeader';
const WhoWeAre = () => {
    return (
        <section className="who-we-are-section">
            <div className="wave-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,256L24,240C48,224,96,192,144,192C192,192,240,224,288,245.3C336,267,384,277,432,266.7C480,256,528,224,576,192C624,160,672,128,720,138.7C768,149,816,203,864,186.7C912,171,960,85,1008,74.7C1056,64,1104,128,1152,160C1200,192,1248,192,1296,176C1344,160,1392,128,1416,112L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    />
                </svg>
            </div>


            {/* Content */}
            <div className="container text-white py-5">

                <SectionHeader header='Who We Are' color='white' />


                <div className="row">
                    <div className="col-md-6 font-pop ">
                        <h4>Leading Builders in India</h4>
                        <p className='text-light text-justify'>
                            Sense Projects Pvt Ltd is a leading construction company in India. We operate in all major Metro cities and across India...
                        </p>
                        <p className='text-light text-justify'>
                            With expertise in construction, interior fit-out, PEB (Pre-Engineered Building), MEP...
                        </p>
                    </div>
                    <div className="col-md-6 font-pop">
                        <p className='text-light text-justify'>
                            With a strong reputation built over a decade of experience, Sense Projects Pvt Ltd is committed to delivering high-quality work...
                        </p>
                        <p className='text-light text-justify'>
                            Choose Sense Projects for all your construction necessities. We handle contracting, design, construction...
                        </p>
                        <p className="fw-bold text-light">📞 +91 9319412012</p>
                    </div>
                </div>
            </div>

            <div className="wave-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,64L24,80C48,96,96,128,144,149.3C192,171,240,181,288,165.3C336,149,384,107,432,101.3C480,96,528,128,576,144C624,160,672,160,720,165.3C768,171,816,181,864,165.3C912,149,960,107,1008,112C1056,117,1104,171,1152,186.7C1200,203,1248,181,1296,181.3C1344,181,1392,203,1416,213.3L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                    ></path>
                </svg>
            </div>

        </section>
    );
};

export default WhoWeAre;
