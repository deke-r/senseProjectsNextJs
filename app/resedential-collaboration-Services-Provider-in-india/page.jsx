import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import PreEngineeredServices from '@/components/preEngineeredServices';
import LeadingTrustSection from '@/components/LeadingTrustSection';

export default function ResedentialCollaborationServicesProviderInIndia() {
    return (
        <>
            {/* Top Banner */}
            <BannerTop page="Premier Residential Collaboration Services Provider in India, delivering bespoke living solutions through innovation, elegance, and strategic partnerships." page2="Services" />
            <div className="container">
                <div className="row text-center mx-md-5">

                    <SectionHeader
                        header="Experience India’s finest in residential collaboration — where innovation meets elegance, your vision comes to life, and your dream home is crafted with unmatched quality and personalized service."
                        color="#134377"
                    />
                    <h4 className='fw-bold'>Make your collaboration journey effortless and rewarding with SPPL — one of India’s leading residential collaboration and construction companies.</h4>
                    <p className='fw-semibold text-muted'>We offer the best deals and tailor-made, built-to-suit designs that transform your plot into a space that reflects your vision. Just sit back and watch your dream home come to life. Backed by smart technology and a commitment to excellence, we deliver precisely to your expectations.
                        <span className='text-warning'>  Get in touch to begin your journey with us.</span></p>
                </div>
            </div>

            <LeadingTrustSection />



            {/* Main Section */}
            <section className="bg-white">
                <div className="container">

                    <SectionHeader
                        header="Who we are"
                        color="#134377"
                    />

                  
                    <div className="row align-items-center">
                        {/* Left Column - Text */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h4 className='fw-bold'>Leading Residential Collaboration Specialists in India</h4>
                            <p className='fw-semibold text-muted text-justify'>
                               With over 14 years of unparalleled expertise, our team of visionary professionals is committed to delivering seamless project execution that exceeds expectations. As your exclusive, single-source partner, we uphold stringent quality control standards—ensuring every detail of your residential collaboration is flawless and effortlessly managed.<br /><br />We elevate your space or plot by blending the latest design trends with your unique taste, offering bespoke solutions that transform your vision into reality. From premium flooring to exquisite ceilings and everything in between, our curated product range reflects sophistication and craftsmanship. Proudly recognized among the top-tier builders, we also excel in Pre-Engineered Building solutions tailored for modern demands.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6">
                            <img
                                src='/images/residential-construction-collaboration.webp'
                                alt="Pre Engineered Buildings"
                                className="img-fluid"
                            />
                        </div>
                    </div>


                </div>
            </section>


            <section>
                <div className="container my-4">
                    <div className="row">

                        <div className="col-md-6">
                            <h4 className="fw-bold">Our Expertise</h4>
                            <p className="fw-semibold mt-2 text-muted text-justify">
                               As an award-winning leader in collaboration services, we bring comprehensive experience across residential, commercial, and real estate development sectors. We specialize in delivering tailor-made designs that maximize every inch of any plot size or configuration, creating spaces that are both innovative and timeless.
                            </p>
                            <p className="fw-semibold mt-2 text-muted text-justify">
                              Our unwavering commitment to client satisfaction is embodied in our meticulous attention to detail, premium-quality materials, and streamlined project management. We pride ourselves on delivering on time, every time—making us the preferred partner for discerning clients seeking excellence.
                            </p>
                        </div>


                        <div className="col-md-6">
                            <h4 className="fw-bold">Why Partner With Us?</h4>


                            <ul className="service-point-list text-muted  p-0 fw-semibold list-unstyled mt-3">
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                    Absolute transparency with premium on-site services
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                    Respect for your identity—your name and reputation remain untarnished
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                  Trusted by over 200 delighted clients who attest to our excellence
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                    A comprehensive, end-to-end suite of bespoke services
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                    Collaboration with top-tier architects and master craftsmen
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                   A distinctive, personalized approach tailored to your vision
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h6 className='fw-semibold text-justify'>Experience the pinnacle of residential collaboration with us—where innovation meets elegance, precision meets passion, and your dream space comes to life flawlessly.</h6>
                           
                        </div>
                    </div>
                </div>
            </section>













            <CTASection h3="Looking for a high-quality construction partner for your residential, commercial, industrial, or hospitality project? Call now to build with confidence." />
            <PanIndia />
        </>
    );
}
