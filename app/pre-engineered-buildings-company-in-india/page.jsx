import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import PreEngineeredServices from '@/components/preEngineeredServices';

export default function preEngineeredBuildingsCompanyIndia() {
    return (
        <>
            {/* Top Banner */}
            <BannerTop page="Pre Engineered Buildings in India" page2="Services" />

            {/* Section Header */}
            <SectionHeader
                header="No.1 Leading PEB manufacturers in INDIA"
                color="#134377"
            />

            {/* Main Section */}
            <section className="bg-white">
                <div className="container">
                    <div className="row">
                        <h4 className="fw-bold">
                            Sense Projects Pvt. Ltd. handles everything seamlessly—from designing and processing  <br />  to erection.

                        </h4>
                    </div>
                    <div className="row align-items-center">
                        {/* Left Column - Text */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p className='fw-semibold'>
                                We are among most preferred PEB contractors in India. We offer advanced and reliable solutions through a combination of quality, timely project execution, safety, and cost efficiency. Our team comprises some of the nation's best technical experts, engineers, designers, managers, and skilled labor. Our PEB structure services are designed technically and precisely by keeping clients' expectations as main objective to achieve. We encourage Pre-engineered buildings that are modern and has futuristic approach as it ensures time-saving, cost-effectiveness and safe construction, since we fabricate PEB structures in our manufacturing plants and then transports all the components to the site to assembled and erect proper structure there with the help of nut bolts. Our top most PEB services in India include PEB Structures, Metal Building Products, Industrial Building, Warehouse Building, Factory, Cold Storage, Heavy Shed, PEB Shed, etc. We have executed a wide range of projects across India for both government and private sectors, including government buildings, commercial complexes, residential developments, high-end villas, as well as interior design and architectural works.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6">
                            <img
                                src='/images/pre-engineered-buildings.webp'
                                alt="Pre Engineered Buildings"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <h4 className="fw-bold">
                            Why Are We Best PEB Contractors In India?

                        </h4>

                        <p className='fw-semibold mt-2'>
                            We at Sense Projects – design, assemble and install cost-effective pre-engineered steel buildings and building components made to suit a wide range of applications in different industry sectors. PEB gives better speed, quality, and value to the project. One of its key advantages is that it appeals to all stakeholders involved in the project. Our primary focus is on civil works for industrial and warehouse PEB buildings across India. We have successfully undertaken a diverse range of projects across India for both government and private clients, including Government Buildings, Commercial Complexes, Residential Developments, High-end Villas, as well as Interior Design and Architectural Works.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div class="col-md-12 mt-3">
                            <h4 className="fw-bold">PEB services in Pan India</h4>
                            <ul class="service-point-list p-0 fw-semibold" style={{listStyle:'none'}}>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i> We strictly follow IS standards.
                                </li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i> All material meets ASTM (US) quality standards.
                                </li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i> We ensure Architectural versatility.
                                </li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i> Application of latest international design standards.
                                </li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i> Multi-locational manufacturing facilities facilitate the timely supply of raw materials.
                                </li>
                            </ul></div>
                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div class="col-md-12 mt-3">
                            <h4 className="fw-bold">Quality Is Our Priority</h4>
                            <ul class="service-point-list p-0 fw-semibold" style={{listStyle:'none'}}>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i> Welds Check:
                                 <span className='text-muted ms-1'>

                                  Magnetic Inspection, Ultra Sonic Inspection
                                     </span>
                                </li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i>  Spray:
                                    <span className='text-muted ms-1'>
                                  Metal Spray Application Before Paint</span>
                                </li>
                                <li className='py-1'><i class="fas fa-chevron-right text-blue" aria-hidden="true"></i>  Use Protective Paint:   <span className='text-muted ms-1'>
                                  From World’s Top Brands
                                 </span>
                                </li>
                      
                            </ul></div>
                    </div>
                </div>

            </section>






            {/* Other Components */}
            <PreEngineeredServices />
            <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
            <PanIndia />
        </>
    );
}
