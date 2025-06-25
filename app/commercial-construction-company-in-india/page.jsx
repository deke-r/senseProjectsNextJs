import BannerTop from '../../components/BannerTop'
import PanIndia from '../../components/PanIndia'
import CTASection from '../../components/CTASection'
import SectionHeader from '../../components/SectionHeader'
import LeadingTrustSection from '../../components/LeadingTrustSection'
import WhoWeAre from '@/components/WhoWeAre'
import WhyChooseUs from '@/components/WhyChooseUs'


const CC = () => {
    return (
        <>
            <BannerTop page='Commercial Construction Company In India
' page2='Services' />

            <SectionHeader
                header={
                    <>
                        Are You Looking for Best Commercial <br /> Construction Companies in India?
                    </>
                }
                color="#134377"
            />

            <h5 className='text-center fw-bold'>“We design and build efficiently”</h5>
            <div className="container mb-5 mt-3">

                <p className='fw-semibold text-secondary text-justify'>Sense Projects Pvt. Ltd. is a trusted commercial construction company in India. Since 2007, we have excelled in the field of construction. Our highly skilled technical experts make sure perfect and error-free creations without delays. We are reliable, unique, and committed to delivering high-quality projects. Our expertise lies in commercial construction, extensions, conversions, and refurbishments. Trust us to deliver excellence in every project we undertake.</p>
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
                            <p className='fw-semibold text-muted text-justify'>
                               Sense Projects is a <span className='text-dark'> leading commercial construction company</span> that offers top-quality construction solutions for different sectors. We specialize in <span className='text-dark'>building office buildings, retail stores and shopping centers, hotels, restaurants and cafes, entertainment venues, banks and financial institutions, and mixed-use developments.</span> Our team of skilled professionals works diligently to ensure every project is executed with precision and attention to detail. We provide 100% quality assurance, following the highest construction standards. From the beginning to the end, we strive to exceed our client's expectations by delivering projects on time and within the set budget. Sense Projects is committed to bringing your commercial construction ideas to life with exceptional quality and unwavering dedication. Trust us to create spaces that fulfill your vision and meet your requirements.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6 text-center">
                            <img
                                src='images/commercial-construction-company.webp'
                                alt="commercial Construction Company in India"
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

            <WhoWeAre/>
            <WhyChooseUs/>

            <CTASection h3='Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call N' />
            <PanIndia />

        </>
    )
}

export default CC