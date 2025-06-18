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
            <BannerTop page='Institutional Construction Company in India
' page2='Services' />

            <SectionHeader
                header={
                    <>
                        Are You Looking for Top<span className='text-warning'> Institutional<br />  Construction Companies</span> in India?
                           
                    </>
                }
                color="#134377"
            />

            <h5 className='text-center fw-bold'></h5>
            <div className="container my-5">

                <p className='fw-semibold text-secondary'>Sense Projects Pvt. Ltd has been a leading Institutional Construction Company in India since 2007. We specialize in providing customized and personalized solutions, along with cost-effective services. As the most trusted Construction Contractor, we employ a comprehensive design-build approach that optimizes spaces and ensures the best possible use of them. Our focus also extends to prime Institutional Construction projects, prioritizing quality and client satisfaction.</p>
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
                                  
                                </h4>
                            </div>
                            <p className='fw-semibold text-muted'>
                               Sense Projects is a reputable construction company that has been operating since 2007. We provide top-quality services for various sectors. We focus on construction and renovation projects for educational institutions, such as <span className='text-dark'> schools, colleges, and universities.</span> Additionally, we have he team of experienced and professionals who know how to design and construct government administrative buildings that combine functionality with appealing aesthetics. Our expertise also extends to building research laboratories and scientific institutions to facilitate advancements in various fields. Furthermore, we have a creative team capable of designing and constructing libraries, museums, and cultural centers that contribute to knowledge and art appreciation within communities. Trust Sense Projects for your institutional construction needs and witness exceptional results.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6 text-center">
                            <img
                                src='images/institutional-construction-company.webp'
                                alt="hospitality Construction Company in India"
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

                                </h4>
                            </div>
                            <p className='fw-semibold text-muted'>

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WhoWeAre />
            <WhyChooseUs />

            <CTASection h3='Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call N' />
            <PanIndia />

        </>
    )
}

export default IC