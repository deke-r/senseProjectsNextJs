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
            <BannerTop page='Institutional Construction Company In India
' page2='Services' />

            <SectionHeader
                header={
                    <>
   Are You Looking for Top Institutional Construction Companies in India?
                    </>
                }
                color="#134377"
            />

            <h5 className='text-center fw-bold'>

                “Shaping Spaces for Learning, Innovation, and Growth”
            </h5>
            <div className="container my-5">

                <p className='fw-semibold text-secondary text-justify'>Sense Projects Pvt. Ltd. has been a leading institutional construction company in India since 2007. We specialize in delivering customized, cost-effective solutions tailored to your specific needs.

As a trusted construction contractor, we follow a comprehensive design-build approach that maximizes space utilization and ensures superior quality. Our commitment to excellence and client satisfaction makes us the preferred choice for prime institutional construction projects across the country.</p>
            </div>


            <LeadingTrustSection />

            <section className="why_choose_page ptb-50">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Text Content */}
                        <div className="col-md-6">
                            <div className="heading-title-2">
                                <SectionHeader
                                    header='Building Foundations for Knowledge and Progress'
                                    color="#134377"
                                />

                            </div>
                            <div className="span-head mb-3">
                                <h4>
                                  
                                </h4>
                            </div>
                            <p className='fw-semibold text-muted text-justify'>
                             Since 2007, Sense Projects Pvt. Ltd. has been a trusted name in delivering superior construction and renovation solutions for a wide range of institutional projects.

We specialize in constructing educational institutions—including schools, colleges, and universities—where functionality meets inspiring design. Our experienced team also excels in designing and building government administrative buildings that balance practicality with aesthetic appeal.

Our expertise extends to developing advanced research laboratories and scientific institutions that foster innovation and progress across various fields.

Additionally, our creative professionals bring communities closer to knowledge and culture by designing and constructing libraries, museums, and cultural centers that enrich public life.

Trust Sense Projects for your institutional construction needs and experience excellence that stands the test of time.
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