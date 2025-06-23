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
                           Since our inception year, we have accomplished client’s faith and that’s what we consider as our success. We have reputation of striving towards the enhancement and perfection on every project that we undertake, regardless of its size. Thus, from major construction and building projects through the provisions of refurbishment services, designing and fit out- our services extend to all the big and small sphere of building and construction. Our highly trained in-house team of engineers, architects, designer apply their specialised skill set of knowledge to efficiently produce high quality service at your delight.
                        </p>
                    </div>

                    {/* Section 3: Quality Control & Experience */}
                    <div>
                        <SectionHeader header="Strict Quality Control & Experience" color="#134377" />
                        <p className="text-gray-700 text-secondary leading-7 font-pop mb-4  font-semibold">
                           Our personnel are extremely capable of coordinating and understanding the client’s perspective, as our clients are our greatest advocates and thus, we offer all our services keeping in view of their needs and desires. We are meticulous about quality of the services we provide, to resist risk we procured most of the material centrally I.e., Purchased directly from the companies instead of distributors to ensure best available material is being used furthermore, regular reviews by subject/ Technical experts in order to check work done, quality of raw material, pace of work and safety concerns. In this way we work diligently, efficiently and effectively.
                        </p>
 
                    </div>

                </div>


                   <div className="container px-4 mx-auto">

                    {/* Section 2: Trust & Quality */}
                    <div className="mb-16">
                        <SectionHeader header="Experience" color="#134377" />
                        <p className="text-gray-700 text-secondary leading-7 font-pop  font-semibold">
                          There is an old saying “perfection comes after practice and experience”, with over 2000 happy clients Sense Projects is now an old handed team of professionals, setting benchmark with each passing year. Awarded as the best construction company, our work includes Commercial, Residential, Hotels, Resorts, retail, shopping malls, Restaurants, institutions, Landscaping, industrials, Hospitals and road services. Our work force includes of veterans; project engineers n architect, site engineers, safety engineers, technicians and labours.
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
                                   Our mission is to deliver exceptional construction services that exceed customer expectations through superior quality and competitive pricing. We aim to build lasting relationships based on trust, customer satisfaction, and repeat business, achieved through attention to detail, timeliness, and a service-oriented approach.
                                </p>
                                <p className='font-pop'>
                                   We are committed to continuous improvement, fairness, efficiency, and pride in our work. By fostering organizational excellence, promoting quality awareness, and investing in the development of both our employees and clients, we strive to create a culture of growth, innovation, and success.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="px-4 py-3 bg-white shadow h-100 mt-4 vision-box" style={{ borderLeft: '6px solid #F97306' }}>
                                <h5 className="text-o fw-bold mb-3 font-pop">VISION</h5>
                                <p className='font-pop'>
                                   At Sense Projects Pvt. Ltd., we aspire to uphold our legacy of innovation and excellence in the engineering and construction industry. Our goal is to continue setting new benchmarks, achieving milestones, and raising standards in the market. We envision building world-class infrastructure that reflects the highest quality and principles, contributing to the nation’s development with every project we undertake.
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