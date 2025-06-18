import BannerTop from '../../components/BannerTop'
import PanIndia from '../../components/PanIndia'
import CTASection from '../../components/CTASection'
import SectionHeader from '../../components/SectionHeader'
import LeadingTrustSection from '../../components/LeadingTrustSection'
import WhoWeAre from '@/components/WhoWeAre'
import WhyChooseUs from '@/components/WhyChooseUs'


const IC = () => {
    return (
        <>
            <BannerTop page='Industrial Construction company in India
' page2='Services' />

            <SectionHeader
                header={
                    <>
                        Are You Looking for Top Industrial  <br /> Construction Companies in India?
                    </>
                }
                color="#134377"
            />

            <h5 className='text-center fw-bold'>“WE BUILD, THAT LONG LASTS”</h5>
            <div className="container my-2">

                <p className='fw-semibold text-secondary'>Sense Projects is one of the trusted industrial construction companies in India since 2007. We deliver exceptional Industrial solutions. We are experts in industrial projects. We have an experienced team who delivers high-quality results. If you are looking for a reliable construction company for your industrial projects, choose Sense Projects for all your construction needs.</p>
            </div>


            <LeadingTrustSection />

            <section className="why_choose_page ptb-50">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Text Content */}
                        <div className="col-md-6">
                            <div className="heading-title-2">
                                <SectionHeader
                                    header='Who We Do?'
                                    color="#134377"
                                />

                            </div>
                            <div className="span-head mb-3">
                                <h4>
                                     <span className='text-warning'></span>
                                </h4>
                            </div>
                            <p className='fw-semibold text-muted'>
                               Sense Projects focuses on various types of construction projects related to industries. Our work involves designing, building, and maintaining structures specifically for industrial purposes. These structures may include <span className='text-dark'> manufacturing plants, warehouses, distribution centers, power plants, refineries, logistics centers, research and development facilities, cold storage facilities, data centers, and more. We have professionals with expertise in engineering, architecture, project management, and construction techniques </span>. We make sure that the buildings are constructed to meet safety standards, accommodate specialized equipment, and provide an efficient workflow for industrial processes. Our company is well-known for achieving high-quality standards, meeting deadlines, optimizing spaces, and solving on-site risks with the help of our dedicated project experts.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6 text-center">
                            <img
                                src='/images/industrial-construction-company.webp'
                                alt="Industrial Construction Company in India"
                                className="img-fluid mt-5"
                            />
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="container pt-30">
                    <div className="row">
                        <div className="col-12">
                            <div className="span-head mb-3">
                                <h4>
                                     <span className='text-warning'></span> 
                                </h4>
                            </div>
                            <p className='fw-semibold text-muted'>
                               
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WhoWeAre/>

            <WhyChooseUs/>

            <CTASection h3='Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call N' />
            <PanIndia />

        </>
    )
}

export default IC