import '../../styles/AboutWhoWeAre.css'
import Testimonials from '../../components/Testimonials';
import PanIndia from '../../components/PanIndia';
import OurClients from '../../components/OurClients';
import CTASection from '../../components/CTASection';
import BannerTop from '../../components/BannerTop';
import SectionHeader from '../../components/SectionHeader';
import StatsSection from '../../components/StatsSection';


const AboutWhoWeAre = () => {
    return (
        <>
            <BannerTop page='About' />


            <section className="about-us-section py-12 bg-white">
                <div className="container px-4 mx-auto">

                    {/* Section 1: Company Intro */}
                    <div className="container py-5">
                        <div className="row align-items-center">

                            {/* LEFT COLUMN - TEXT */}
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <SectionHeader header="Best Construction Company" color="#134377" />
                                <p className="text-lg fw-semibold text-warning mt-2 mb-3 font-pop">Known for highest quality standards</p>
                                <p className="text-secondary lh-lg font-pop font-semibold">
                                    Sense Projects Pvt. Ltd., headquartered in New Delhi, is a rapidly growing and well-reputed construction company in India.
                                    We are involved in a full range of engineering, architectural, and construction activities for industrial, commercial, and residential infrastructure development.
                                    <br /><br />
                                    Since 2007, we deliver end-to-end solutions in 10 business segments: construction, PEB, MEP, interior fit-outs, turnkey projects, road services,
                                    general contracts, maintenance, collaboration, and project management.
                                    <br /><br />
                                    The unique blend of commitment, innovation, and confidence is the essence of our company’s culture. Using modern principles & sophisticated technologies,
                                    we aim to be the top preference nationally and globally for quality, performance, and reliability in all types of construction across India.
                                </p>
                            </div>

                            {/* RIGHT COLUMN - BOOTSTRAP CAROUSEL */}
                            {/* RIGHT COLUMN - OVERLAPPING IMAGES */}
                            <div className="col-12 col-md-6 position-relative">
                                <div className="image-stack-wrapper">
                                    <img src='/images/1-3-415x230-1.jpg' alt="img1" className="stack-img" />
                                    <img src='/images/22-415x230-1.jpg' alt="img2" className="stack-img" />
                                    <img src='/images/2-3-415x230-1.jpg' alt="img3" className="stack-img" />
                                    <img src='/images/3-3-415x230-1.jpg' alt="img4" className="stack-img" />
                                    <img src='/images/4-3-415x230-1.jpeg' alt="img5" className="stack-img" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <StatsSection />
                <div className="container px-4 mx-auto">

                    {/* Section 2: Trust & Quality */}
                    <div className="mb-16">
                        <SectionHeader header="Sense Projects – A Name of Trust" color="#134377" />
                        <p className="text-gray-700 text-secondary leading-7 font-pop  font-semibold">
                            Since inception, our greatest achievement has been earning our clients' trust. We aim for excellence in every project, large or small—
                            from major constructions to refurbishments and fit-outs. Our skilled in-house team, including engineers, architects, and designers,
                            ensures each project meets the highest quality standards with client satisfaction at the forefront.
                        </p>
                    </div>

                    {/* Section 3: Quality Control & Experience */}
                    <div>
                        <SectionHeader header="Strict Quality Control & Experience" color="#134377" />
                        <p className="text-gray-700 text-secondary leading-7 font-pop mb-4  font-semibold">
                            Our team collaborates closely with clients, sourcing materials directly from manufacturers to ensure top quality.
                            Regular site audits are conducted by technical experts to maintain standards in work quality, pace, and safety.
                        </p>
                        <p className="text-gray-700 text-secondary leading-7 font-pop font-semibold">
                            With over 2000 satisfied clients, we’ve built a legacy of excellence across commercial, residential, retail, hospitality,
                            institutional, industrial, and road projects. Our experienced workforce includes project engineers, site and safety engineers,
                            architects, technicians, and laborers committed to quality and precision.
                        </p>
                    </div>

                </div>
            </section>





            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <SectionHeader header="Why Choose Us?" color="#134377" />
                        <p className="text-secondary font-pop fw-semibold lead">
                            Sense Projects will help you to create a home, that you admired always.
                        </p>
                    </div>

                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <p className="fs-6 fw-semibold text-secondary font-pop">
                                Sense Projects is ranked No.1 and trustworthy construction company and the reason we are at the top is our no quality compromise, on-time handover and price as low as reasonable. These are the qualities which our competitors don’t have and that make the difference. We convert your imagination into reality by listening to your plans and ideas towards the projects and implement them in it. That’s how the final result comes out as a dream.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="p-4 bg-white shadow rounded h-100  mission-box">
                                <h5 className="text-o fw-bold mb-2 font-pop">Reasons you should pick us:</h5>
                                <ul className="list-unstyled font-pop">
                                    <li className="mb-2" ><strong>Expertise:</strong> Over a decade of hands-on experience dealing with complex challenges on the field.</li>
                                    <li className="mb-2"><strong>Over 15 years of experience:</strong> We are driven by professionalism and high-quality standards.</li>
                                    <li className="mb-2"><strong>Award-winning team:</strong> Our customer-centric approach and pursuit of excellence sets us apart.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 bg-white shadow rounded h-100 mission-box">
                                <h5 className="text-o fw-bold mb-3 font-pop">MISSION</h5>
                                <p className='font-pop'>
                                    To provide quality workmanship and customer service while maintaining the highest level of professionalism, honesty, and fairness in relationships with our clients, employees, and vendors. To continuously grow by offering significant services and expanding into new areas that build on our core strengths.
                                </p>
                                <p className='font-pop'>
                                    Sense Projects Pvt. Ltd. is a full-service construction company whose mission is to build lasting relationships by serving perfection and world-class, hassle-free services — including 24/7 customer support and adherence to global quality standards.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="px-4 py-3 bg-white shadow h-100 mt-4 vision-box" style={{ borderLeft: '6px solid #F97306' }}>
                                <h5 className="text-o fw-bold mb-3 font-pop">VISION</h5>
                                <p className='font-pop'>
                                    To be India’s premier engineering, construction, and project management organization by achieving extraordinary results for our customers, building satisfying careers for our people, and delivering fair returns. We aim to be the preferred contractor of choice — a company clients want to work with and employees are proud to work for.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CTASection h3='Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now' />
            <OurClients />
            <Testimonials />
            <PanIndia />
        </>
    )
}

export default AboutWhoWeAre