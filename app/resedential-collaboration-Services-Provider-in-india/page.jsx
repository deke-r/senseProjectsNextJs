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
            <BannerTop page="Residential Collaboration Services Provider in India" page2="Services" />
            <div className="container">
                <div className="row text-center mx-md-5">

                    <SectionHeader
                        header="Are You Looking for Best Resedential Collaboration Services Provider in India Services?"
                        color="#134377"
                    />
                    <h4 className='fw-bold'>With SPPL make your collaboration journey pleasurable. We are one of the largest builders/ Residential collaboration company.</h4>
                    <p className='fw-semibold text-muted'>We offer best deals and best built to suit design for your space/plot. All you need to do is sit back and watch the magic happens. We are technologically smart and committed to our client’s specification. Contact us for more information.</p>
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

                    <div className="row">

                    </div>
                    <div className="row align-items-center">
                        {/* Left Column - Text */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h4 className='fw-bold'>Top Residential collaboration in Delhi</h4>
                            <p className='fw-semibold text-muted'>
                                We are team of ingenious minds, serving the community for 15+ years therefore we know how to execute a project seamlessly. We are single source supplier to our client that makes our quality control management superior and reliable. We make sure your residential collaboration runs smoothly and gives you a pleasurable experience.<br /><br />We transform your space/ plot according to the latest trends and your taste with a small share of ours. We offer wide array of products to our client from floors to ceiling and in between. We are among top builders.
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
                            <h4 className="fw-bold">What We Do?</h4>
                            <p className="fw-semibold mt-2 text-muted">
                                We are an award-winning company, with an extensive experience in collaboration services including residential collaboration, commercial collaboration & real estate development. We provide best-suited customised design for any size & shape of plot.
                            </p>
                            <p className="fw-semibold mt-2 text-muted">
                                We ensure client satisfaction by quality products and systematic working. With our precise and detailed designing we utilise every inch of your space and offer unique experience. We have the ability to deliver promises on time which enables us as best builders. We are the perfect fit for developing a well-tuned and modern residential/commercial & real estate development project.
                            </p>
                        </div>

                  
                        <div className="col-md-6">
                            <h4 className="fw-bold">Why Choose Us?</h4>
                   

                            <ul className="service-point-list p-0 fw-semibold list-unstyled mt-3">
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                    We are transparent and offer premium on your site.
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                     We don’t take your name back.
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                   We have over 200 happy references, who admire our work
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                    Comprehensive suite of services
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                               Best team of architects and finest workmanship
                                </li>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2"></i>
                                  Our unique approach to each project
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>













            <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
            <PanIndia />
        </>
    );
}
