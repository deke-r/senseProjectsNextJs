import BannerTop from '../../components/BannerTop'
import PanIndia from '../../components/PanIndia'
import CTASection from '../../components/CTASection'
import SectionHeader from '../../components/SectionHeader'
import LeadingTrustSection from '../../components/LeadingTrustSection'
import WhoWeAre from '@/components/WhoWeAre'
import WhyChooseUs from '@/components/WhyChooseUs'


const HC = () => {
    return (
        <>
            <BannerTop page='Hospitality Construction Company in India
' page2='Services' />

            <SectionHeader
                header={
                    <>
                        Are You Looking for Best  Construction Company<br />  for building a functional <span className='text-warning'>
                            hospital?</span>
                    </>
                }
                color="#134377"
            />

            <h5 className='text-center fw-bold'></h5>
            <div className="container my-5">

                <p className='fw-semibold text-secondary'>Sense Projects Private Limited is a top-notch hospital construction company with a proven track record since its inception in 2007. We specialize in building the most advanced hospitals that place a priority on patient well-being. Sense Projects Private Limited has built quite a name in the construction industry as we are equipped with highly skilled architects, contractors, and engineers which makes us the most sought choice when it comes to building hospitals.</p>
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
                                    We Talk About <span className='text-warning'>Class, Comfort And Convenience.</span>
                                </h4>
                            </div>
                            <p className='fw-semibold text-muted'>
                                As a renowned <span className='text-warning'> hospital building company</span>, we are committed to providing excellent facilities that cater to the unique needs of a healthcare facility. Planning, design, construction management, and execution are all included in our all-inclusive solutions for building the hospital. At Sense Projects Private Limited we take care of rigid regulatory standards and integrate the latest advancements in medical infrastructure and technology such as installing advanced HVAC systems. We turn healthcare goals into reality with a commitment to quality, innovation, and timely delivery, making sure that hospitals have the necessary resources to give their patients the best treatment possible as there is an old yet true saying “ Health is Wealth “.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6 text-center">
                            <img
                                src='images/hospitality-construction-company.webp'
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

export default HC