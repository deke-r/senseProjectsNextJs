export const metadata = {
  title: 'About Sense Projects – India’s Trusted Infrastructure Partner',
  description:
    'Learn about Sense Projects Pvt. Ltd., India’s trusted name in construction, engineering, and infrastructure. Discover our legacy, values, and commitment to delivering world-class solutions.',
  keywords: [
    'About Construction Firm India',
    'Company Profile Builders',
    'Trusted Infrastructure Partner',
    'Corporate Construction Overview',
    'Engineering Leadership India',
    'Construction Legacy Company',
    'Reputed Building Firm Profile',
    'Infrastructure Company History',
    'Top Development Partner India',
    'Sense Projects Background'
  ],
  alternates: {
    canonical: 'https://senseprojects.in/about-us/',
    types: {
      'application/rss+xml': [
        {
          title: 'About Sense Projects Pvt. Ltd. » Feed',
          url: 'https://senseprojects.in/feed/',
        },
        {
          title: 'About Sense Projects – India’s Trusted Infrastructure Partner',
          url: 'https://senseprojects.in/comments/feed/',
        },
      ],
    },
  },
  openGraph: {
    title: 'About Sense Projects – India’s Trusted Infrastructure Partner',
    description:
      'Learn about Sense Projects Pvt. Ltd., India’s trusted name in construction, engineering, and infrastructure. Discover our legacy, values, and commitment to delivering world-class solutions.',
    locale: 'en_US',
    type: 'website',
    siteName: 'Sense Projects Pvt. Ltd.',
    url: 'https://senseprojects.in/about-us/',
  },
};



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
            <BannerTop page='About Us' />


            <section className="about-us-section py-12 bg-white">
                <div className="container px-4 mx-auto">

                    {/* Section 1: Company Intro */}
                    <div className="container py-5">
                        <div className="row align-items-center">

                            {/* LEFT COLUMN - TEXT */}
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <SectionHeader header="Premier Construction Solutions Providere" color="#134377" />
                                <p className="text-lg fw-semibold text-warning mt-2 mb-3 font-pop">Renowned for Unrivaled Quality and Excellence</p>
                                <p className="text-secondary lh-lg font-pop font-semibold text-justify">
                                    Headquartered in New Delhi, Sense Projects Pvt. Ltd. is a dynamic and rapidly expanding construction powerhouse, acclaimed across India for its unwavering commitment to excellence, reliability, and innovation. Since our inception in 2007, we have delivered comprehensive engineering, architectural, and construction solutions spanning industrial, commercial, and residential sectors with unmatched precision.
                                </p>

                                <h4 className='fw-bold'>Our diverse expertise covers 10 critical business segments:</h4>
                                <ul className="service-point-list text-muted p-0 fw-semibold list-unstyled mt-3">
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Construction
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Pre-Engineered Buildings (PEB)
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Mechanical, Electrical & Plumbing (MEP)
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Interior Fit-outs
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Turnkey Projects
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Road Services
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        General Contracting
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Maintenance
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Collaboration
                                    </li>
                                    <li className="py-1">
                                        <i className="fas fa-chevron-right text-blue me-2"></i>
                                        Project Management
                                    </li>
                                </ul>

                                <p className="text-secondary lh-lg font-pop font-semibold text-justify">What distinguishes Sense Projects is our distinctive blend of steadfast dedication, forward-thinking innovation, and impeccable execution. By harnessing advanced technologies and cutting-edge methodologies, we are committed to becoming the premier choice—both nationally and globally—for superior quality, exceptional performance, and trusted delivery across all dimensions of construction.<br />Discover the future of construction with Sense Projects—where visionary concepts meet flawless execution, and every project stands as a testament to craftsmanship and excellence</p>
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
                        <p className="text-gray-700 text-secondary leading-7 font-pop text-justify  font-semibold">
                            Since our inception year, we have accomplished client’s faith and that’s what we consider as our success. We have reputation of striving towards the enhancement and perfection on every project that we undertake, regardless of its size. Thus, from major construction and building projects through the provisions of refurbishment services, designing and fit out- our services extend to all the big and small sphere of building and construction. Our highly trained in-house team of engineers, architects, designer apply their specialised skill set of knowledge to efficiently produce high quality service at your delight.
                        </p>
                    </div>

                    {/* Section 3: Quality Control & Experience */}
                    <div>
                        <SectionHeader header="Strict Quality Control & Experience" color="#134377" />
                        <p className="text-gray-700 text-secondary leading-7 font-pop text-justify mb-4  font-semibold">
                            Our personnel are extremely capable of coordinating and understanding the client’s perspective, as our clients are our greatest advocates and thus, we offer all our services keeping in view of their needs and desires. We are meticulous about quality of the services we provide, to resist risk we procured most of the material centrally I.e., Purchased directly from the companies instead of distributors to ensure best available material is being used furthermore, regular reviews by subject/ Technical experts in order to check work done, quality of raw material, pace of work and safety concerns. In this way we work diligently, efficiently and effectively.
                        </p>

                    </div>

                </div>


                <div className="container px-4 mx-auto">

                    {/* Section 2: Trust & Quality */}
                    <div className="mb-16">
                        <SectionHeader header="Experience" color="#134377" />
                        <p className="text-gray-700 text-secondary leading-7 font-pop text-justify font-semibold">
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
                            Your Dream. Our Blueprint.
                        </p>
                    </div>

                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <p className="fs-6 fw-semibold text-secondary text-justify font-pop">
                               Sense Projects Pvt. Ltd. is proud to be recognized as one of India’s most trusted and top-ranked construction companies. Our position at the forefront of the industry is built on three core pillars: uncompromised quality, on-time project delivery, and cost-effective solutions.
What truly sets us apart from the competition is our commitment to understanding your vision. We listen carefully to your ideas, align with your goals, and transform your imagination into a tangible, thoughtfully executed reality.


                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="p-4 bg-white shadow rounded h-100  mission-box">
                                <h5 className="text-o fw-bold mb-2 font-pop">What sets us apart:</h5>
                                <ul className="list-unstyled font-pop text-justify">
                                    <li className="mb-3">
                                        <strong>Decades of Distinction:</strong> With over 15 years of proven industry expertise, we’ve consistently delivered high-performance projects across India—on time, on budget, and beyond expectations.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Excellence is Our Standard:</strong> We don’t just meet benchmarks—we set them. Every project is executed with meticulous attention to detail, uncompromising quality, and a passion for perfection.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Award-Winning Leadership:</strong> Our team is recognized for its innovation, professionalism, and customer-centric mindset. We combine global thinking with local insight to deliver results that truly stand out.
                                    </li>
                                    <li className="mb-3">
                                        <strong>End-to-End Solutions:</strong> From concept and design to construction and handover, we provide seamless, turnkey solutions under one roof—streamlining your entire project journey.
                                    </li>
                                    <li className="mb-3">
                                        <strong>Trusted Nationwide:</strong> Operating across metro cities and throughout India, our track record of repeat clients and landmark projects speaks volumes about the trust we’ve earned.
                                    </li>
                                    <li className="mb-3">
                                        When you choose <strong>Sense Projects</strong>, you’re choosing more than a construction company—you’re choosing a partner committed to building your vision with integrity, innovation, and excellence.
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 bg-white shadow rounded h-100 mission-box">
                                <h5 className="text-o fw-bold mb-3 font-pop">MISSION</h5>
                                <p className='font-pop text-justify'>
                                    Our mission is to deliver exceptional construction services that exceed customer expectations through superior quality and competitive pricing. We aim to build lasting relationships based on trust, customer satisfaction, and repeat business, achieved through attention to detail, timeliness, and a service-oriented approach.
                                </p>
                                <p className='font-pop text-justify'>
                                    We are committed to continuous improvement, fairness, efficiency, and pride in our work. By fostering organizational excellence, promoting quality awareness, and investing in the development of both our employees and clients, we strive to create a culture of growth, innovation, and success.
                                </p>
                                  <h5 className="text-o fw-bold mb-3 font-pop">VISION</h5>
                                <p className='font-pop text-justify'>
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