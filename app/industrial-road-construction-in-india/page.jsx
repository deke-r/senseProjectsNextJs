import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import PreEngineeredServices from '@/components/preEngineeredServices';
import LeadingTrustSection from '@/components/LeadingTrustSection';

export default function IndustrialRoadConstructionInIndia() {
    return (
        <>
            {/* Top Banner */}
            <BannerTop page="Leading Industrial Road Construction Company in India" page2="Services" />
            <div className="container">
                <div className="row text-center mx-md-5">

                    <SectionHeader
                        header="Your Search for the Top Road Construction Companies in India Ends Here."
                        color="#134377"
                    />
                    <h4 className='fw-bold'>SPPL designs, builds, manages, and maintains road networks across India.</h4>
                    <p className='fw-semibold text-muted'>With advanced technology and expert engineers, we’re one of India’s most trusted road construction contractors.
                        Contact us to discuss your next infrastructure project.  </p>
                </div>
            </div>

            <LeadingTrustSection />



            {/* Main Section */}
            <section className="bg-white">
                <div className="container">
                    <SectionHeader
                        header="Industrial Road Construction Mastery – Built for Performance, Engineered for the Future"
                        color="#134377"
                    />

                    <div className="row align-items-center">
                        {/* Left Column - Text */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p className="fw-semibold text-muted">
                                At SPPL, we specialize in delivering high-performance industrial road construction solutions tailored to meet the demanding needs of manufacturing units, logistics hubs, special economic zones (SEZs), and large-scale industrial parks.
                            </p>
                            <p className="fw-semibold text-muted">
                                With over 14 years of expertise, we understand that industrial roads are not just pathways — they are lifelines for efficiency, mobility, and economic output. That’s why our projects are designed to endure heavy loads, continuous traffic, and operational stress without compromising on durability or safety.
                            </p>
                            <p className="fw-semibold text-muted">
                                We take a 360-degree approach, managing every stage — from design and material selection to execution, quality control, and long-term maintenance. Our in-house teams use cutting-edge machinery, advanced surveying tools, and high-grade materials to ensure the structural integrity of every road we build.
                            </p>
                            <p className="fw-semibold text-muted">
                                Whether it's high-strength concrete pavements, bitumen-rich surfaces, or custom-designed internal road systems for industrial layouts, SPPL delivers with precision, performance, and long-term value.
                            </p>
                            <ul className="fw-semibold text-muted ps-3" style={{ listStyle: 'none' }}>
                                <li><i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>Internal factory roads</li>
                                <li><i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>Industrial approach roads</li>
                                <li><i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>Dock and loading bay surfaces</li>
                                <li><i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>Heavy-duty container & trailer movement roads</li>
                                <li><i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>Customized drainage and stormwater solutions integrated into roadworks</li>
                            </ul>
                            <p className="fw-semibold text-muted">
                                Every project reflects our commitment to technical excellence, on-time delivery, and client satisfaction. This dedication has made us a trusted name in the industrial infrastructure sector across India.
                            </p>
                            <p className="fw-semibold text-muted">
                                <strong>SPPL</strong> — building the roads that power India’s industrial growth.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6">
                            <img
                                src="/images/industrial-road-construction.webp"
                                alt="Industrial Road Construction"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container my-2">
                    <div className="row">
                        <h4 className="fw-bold">What We Do</h4>
                        <p className="fw-semibold mt-2 text-muted">
                            At SPPL, we bring unmatched expertise in industrial road construction, delivering comprehensive infrastructure solutions that meet the specific demands of heavy-duty, high-traffic industrial environments. From planning and design to execution, commissioning, tolling, operations, and long-term maintenance, we handle every phase in-house with precision and control.
                        </p>
                        <p className="fw-semibold text-muted">
                            Our roads are engineered to endure — built for durability, load-bearing performance, and operational efficiency. Whether it's access roads for factories, internal circulation routes, or custom-built logistics corridors, SPPL ensures every road we construct supports uninterrupted industrial productivity.
                        </p>
                        <p className="fw-semibold text-muted">
                            By leveraging advanced technology, high-quality materials, and expert project management, we ensure consistent value for our clients, surrounding communities, and stakeholders across India. Our commitment to timely delivery, cost-effectiveness, and flawless execution has earned us a trusted name in the infrastructure space.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container my-2">
                    <div className="row">
                        <h4 className="fw-bold">Why Choose SPPL?</h4>
                        <p className="fw-semibold mt-2 text-muted">
                            We don’t just build roads — we build infrastructure that powers industries. Backed by over 14 years of proven experience, SPPL has established itself as one of the top industrial road construction companies in India. Our projects are driven by engineering excellence, reliability, and sustainable innovation.
                        </p>
                        <p className="fw-semibold text-muted">
                            We take pride in delivering solutions that are not only structurally superior but also strategically aligned with industrial and logistical needs.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <ul className="service-point-list p-0 fw-semibold" style={{ listStyle: 'none' }}>
                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>
                                    <strong>Proven Expertise Since 2007</strong>
                                </li>
                                <li className="text-muted ps-3">
                                    Delivering high-quality roads and infrastructure for sectors including highways, bridges, tunnels, industrial zones, and logistics hubs.
                                </li>

                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>
                                    <strong>Industry-Specific Solutions</strong>
                                </li>
                                <li className="text-muted ps-3">
                                    Specialized in constructing roads built to handle heavy machinery, transport vehicles, and continuous industrial operations.
                                </li>

                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>
                                    <strong>Customer-Centric Approach</strong>
                                </li>
                                <li className="text-muted ps-3">
                                    Every project is customized to client needs with a strong focus on safety, performance, and long-term durability.
                                </li>

                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>
                                    <strong>Superior Materials & Technology</strong>
                                </li>
                                <li className="text-muted ps-3">
                                    We use the best-in-class materials, precision equipment, and skilled teams to ensure smooth execution and structural integrity.
                                </li>

                                <li className="py-1">
                                    <i className="fas fa-chevron-right text-blue me-2" aria-hidden="true"></i>
                                    <strong>Professional Standards & Process</strong>
                                </li>
                                <li className="text-muted ps-3">
                                    Our work is guided by a step-by-step, quality-driven methodology, delivering cost-effective and on-time results across all projects.
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
