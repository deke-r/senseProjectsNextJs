import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import PreEngineeredServices from '@/components/preEngineeredServices';
import LeadingTrustSection from '@/components/LeadingTrustSection';

export default function ConcreteRoadConstructionCompanyInIndia() {
    return (
        <>
            {/* Top Banner */}
            <BannerTop page="Concrete Road Construction Company in India" page2="Services" />
            <div className="container">
                <div className="row text-center mx-md-5">

                    <SectionHeader
                        header="Are You Looking for top Roads Construction Companies Construction Companies in india?"
                        color="#134377"
                    />
                    <h4 className='fw-bold'>SPPL design, construct, manages & maintain road network across nation.</h4>
                    <p className='fw-semibold text-muted'>Technological advancement and best engineers make us most reliant roads construction contractors in india. Always looking forward to assist you, contact us for more information.</p>
                </div>
            </div>

            <LeadingTrustSection />

            

            {/* Main Section */}
            <section className="bg-white">
                <div className="container">

                      <SectionHeader
                header="Top Road Construction company in india"
                color="#134377"
            />

                    <div className="row">
                      
                    </div>
                    <div className="row align-items-center">
                        {/* Left Column - Text */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p className='fw-semibold text-muted'>
                               We are experts at road construction with a company heritage of over 15 years delivering quality projects on time and executes the construction of technically complex and high value projects across segments such as Express ways, National Highways, Flyovers, Bridges, institutional, commercial and residential complexes and other infrastructural construction works. we know how to execute a project flawlessly. We are single source supplier to our client that makes our quality control management superior and reliable. We are well-performing leading Road construction contractors in india.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6">
                            <img
                                src='/images/concrete-road-construction.webp'
                                alt="Pre Engineered Buildings"
                                className="img-fluid"
                            />
                        </div>
                    </div>

               
                </div>
            </section>


            <section>
               <div className="container my-2">
                     <div className="row">
                        <h4 className="fw-bold">
                          Who We Do?

                        </h4>

                        <p className='fw-semibold mt-2 text-muted'>
                          SPPL is emerged as leading road construction company in india offering world class infrastructure development comprehensive services that ensures consistent delivery of better value for end users, neighbouring communities, the nation and all stakeholders of the Company and above all, from concept to construction to commissioning to tolling and from operations to maintenance, all activities are performed by in-house expertise. We have earned remarkable reputation in short span because of our excellent project execution skills for timely delivery of projects and we are working imperatively to maintain this honour.
                        </p>
                    </div>
               </div>
            </section>


                       <section>
               <div className="container my-2">
                     <div className="row">
                        <h4 className="fw-bold">
                       Why Choose Us ?

                        </h4>

                        <p className='fw-semibold mt-2 text-muted'>
                       We are always committed to maintain a reputation for Quality & Excellence in the construction field. We strive for enhanced sustainability at every stage of project, all along our journey towards delivering excellence.
                        </p>
                    </div>
               </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div class="col-md-12 mt-3">
                          
                            <ul class="service-point-list p-0 fw-semibold" style={{ listStyle: 'none' }}>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i>  Best road Construction Company
                                </li>
                                <li className='text-muted ps-3'>Our expertise includes in, Tunnel, Highways, Building, Road & bridges etc. since 2007. SPPL We provide a professional renovation and installation services with a real focus on customer satisfaction</li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i> Best Materials
                                </li>
                                <li className='text-muted ps-3'>We have the experience, personnel and resources to make the project run smoothly. We can ensure a job is done on time.</li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i>  Professional Standards
                                </li>
                                <li className='text-muted ps-3'>SPPL aims to provide high quality and cost-effective road construction solutions carefully planned series of steps.</li>
                              
                            </ul></div>
                    </div>
                </div>

            </section>

        






            <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
            <PanIndia />
        </>
    );
}
